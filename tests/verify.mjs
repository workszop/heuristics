#!/usr/bin/env node
// Headless verification of the heuristics readers and scheme animations.
// Usage: node tests/verify.mjs [--ids 1,26,27] [--shots DIR] [--page index.html]
// Env: PORT (default 8791), PLAYWRIGHT_MODULE, CHROME_PATH.
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ─── Constants ───
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PLAYWRIGHT_MODULE = process.env.PLAYWRIGHT_MODULE || '/home/andrzey/.hermes/hermes-agent/node_modules/playwright/index.mjs';
const CHROME_PATH = process.env.CHROME_PATH || '/usr/bin/google-chrome';
const PORT = Number(process.env.PORT || 8791);
const BASE = `http://127.0.0.1:${PORT}/`;
const LANGS = ['pl', 'en'];
const TIMEOUT_MS = 15000;
const ARGS = process.argv.slice(2);
const argValue = name => { const index = ARGS.indexOf(name); return index >= 0 ? ARGS[index + 1] : null; };
const FULL = !argValue('--ids');
const IDS = FULL ? Array.from({ length: 37 }, (_, i) => i + 1) : argValue('--ids').split(',').map(Number);
const SHOTS = argValue('--shots');
const PAGES = argValue('--page') ? [argValue('--page')] : ['index.html', 'index_co.html'];

// ─── State ───
const failures = [];
let server = null;
let browser = null;
let stepMs = 2800;

// ─── Helpers ───
function check(name, pass, detail = '') {
  if (!pass) failures.push(name + (detail ? ': ' + detail : ''));
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function startServer() {
  server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: ROOT, stdio: 'ignore' });
  const deadline = Date.now() + 10000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error('http.server exited early (port ' + PORT + ' busy?)');
    try { const res = await fetch(BASE + 'index.html'); if (res.ok) return; } catch {}
    await sleep(200);
  }
  throw new Error('http.server not ready on port ' + PORT);
}
async function newPage(contextOptions = {}) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, ...contextOptions });
  const page = await context.newPage();
  page.setDefaultTimeout(TIMEOUT_MS);
  const errors = [];
  page.on('pageerror', error => errors.push(String(error)));
  page.on('console', message => {
    const url = (message.location() && message.location().url) || '';
    if (message.type() === 'error' && !/fonts\.(googleapis|gstatic)\.com/.test(url)) errors.push(message.text());
  });
  return { context, page, errors };
}
async function openPage(page, pageName) {
  await page.goto(BASE + pageName, { waitUntil: 'load' });
  await page.waitForFunction(() => window.App && window.HeurAnim);
  stepMs = await page.evaluate(() => window.HeurAnim.STEP_MS);
}
async function openScheme(page, id) {
  await page.evaluate(schemeId => window.App.navigate('scheme', schemeId), id);
  await page.waitForSelector(`[data-component="scheme-animation"][data-scheme="${id}"]`);
}
async function setLang(page, lang) {
  await page.evaluate(value => { window.App.state.lang = value; window.App.saveState(); window.App.render(); }, lang);
  await page.waitForFunction(value => document.querySelector('#main').dataset.lang === value, lang);
}
function snapshotSource() {
  // Returns a function body usable inside page.evaluate to serialise an svg deterministically.
  return svg => [...svg.querySelectorAll('*')].map(node => {
    const attrs = [...node.attributes]
      .filter(attr => !['id', 'marker-end', 'aria-labelledby'].includes(attr.name))
      .map(attr => attr.name + '=' + (attr.name === 'class' ? attr.value.split(/\s+/).filter(Boolean).sort().join(' ') : attr.value))
      .sort().join(';');
    return node.tagName + '|' + attrs + '|' + (node.childElementCount ? '' : node.textContent);
  }).join('\n');
}
async function checkScheme(page, id, lang) {
  const info = await page.evaluate(({ id, lang }) => {
    const host = document.querySelector('[data-component="scheme-animation"]');
    const def = window.HeurAnim.definition(id);
    return {
      scheme: host && host.dataset.scheme, lang: host && host.dataset.animLang,
      steps: host ? Number(host.dataset.animSteps) : 0, state: host && host.dataset.animState,
      captions: def ? def.steps.map(step => step[lang]) : [],
      errors: def ? window.HeurAnim.validateDef(def) : ['not registered']
    };
  }, { id, lang });
  check(`#${id} ${lang} registered`, info.errors.length === 0, info.errors.join('; '));
  check(`#${id} ${lang} host contract`, info.scheme === String(id) && info.lang === lang && info.steps >= 3 && info.steps <= 6 && ['idle', 'paused', 'done'].includes(info.state), JSON.stringify(info));
  for (let k = 0; k < info.steps; k += 1) {
    await page.click(`[data-component="scheme-animation"] [data-anim-goto="${k}"]`);
    const result = await page.evaluate(({ id, lang, k, snap }) => {
      const serialise = new Function('return ' + snap)();
      const host = document.querySelector('[data-component="scheme-animation"]');
      const svg = host.querySelector('svg');
      const live = serialise(svg);
      const probe = document.createElement('section');
      probe.style.cssText = 'position:absolute;left:-9999px;top:0;width:640px';
      document.body.appendChild(probe);
      const controller = window.HeurAnim.mount(probe, id, lang, {}, { autoplay: false, startStep: k });
      const fresh = serialise(probe.querySelector('svg'));
      controller.destroy(); probe.remove();
      const box = svg.getBoundingClientRect();
      const scale = box.width / 640;
      const overflow = [];
      svg.querySelectorAll('text').forEach(text => {
        if (text.closest('.is-hidden') || !text.textContent.trim()) return;
        const r = text.getBoundingClientRect();
        const x = (r.left - box.left) / scale, y = (r.top - box.top) / scale;
        const w = r.width / scale, h = r.height / scale;
        if (x < -1 || y < -1 || x + w > 641 || y + h > 361) overflow.push('outside viewBox: ' + text.textContent);
        const group = text.parentNode;
        const rect = group && group.classList && group.classList.contains('ha-box') ? group.querySelector('rect') : null;
        if (rect) {
          const rr = rect.getBoundingClientRect();
          if (r.left < rr.left + 2 || r.right > rr.right - 2 || r.top < rr.top || r.bottom > rr.bottom) overflow.push('outside its box: ' + text.textContent);
        }
      });
      return {
        step: host.dataset.animStep, state: host.dataset.animState,
        caption: host.querySelector('.anim-caption').textContent, same: live === fresh, overflow
      };
    }, { id, lang, k, snap: snapshotSource().toString() });
    const expectedState = k === info.steps - 1 ? 'done' : 'paused';
    check(`#${id} ${lang} step ${k}`, result.step === String(k) && result.state === expectedState, JSON.stringify({ step: result.step, state: result.state }));
    check(`#${id} ${lang} caption ${k}`, result.caption === info.captions[k], result.caption);
    check(`#${id} ${lang} idempotent show(${k})`, result.same, 'state after other steps differs from a fresh mount at this step');
    check(`#${id} ${lang} text fits at step ${k}`, result.overflow.length === 0, result.overflow.join(' | '));
  }
  if (SHOTS) await page.locator('[data-component="scheme-animation"]').screenshot({ path: path.join(SHOTS, `${String(id).padStart(2, '0')}-${lang}.png`) });
}
async function checkVerifyRows(page, label) {
  const rows = await page.evaluate(() => window.App.verify());
  rows.filter(row => !row.pass && (FULL || row.name !== 'animation registry'))
    .forEach(row => check(`${label} App.verify ${row.name}`, false, row.detail));
  check(`${label} App.verify has animation rows`, rows.some(row => row.name === 'animation registry') && rows.some(row => row.name === 'animation contract'));
}
async function regressions(page, errors) {
  const id = IDS[0];
  await setLang(page, 'pl');
  await openScheme(page, id);
  await page.click('[data-component="scheme-animation"] [data-anim-goto="1"]');
  await page.evaluate(() => { document.querySelector('[data-component="scheme-animation"]').__probe = 1; });
  await page.click('input[data-step="0"]', { force: true });
  const kept = await page.evaluate(() => {
    const host = document.querySelector('[data-component="scheme-animation"]');
    return Boolean(host && host.__probe === 1 && host.dataset.animStep === '1');
  });
  check('animation survives procedure toggle', kept);
  await page.click('input[data-step="0"]', { force: true });
  await setLang(page, 'en');
  const switched = await page.evaluate(id => {
    const host = document.querySelector('[data-component="scheme-animation"]');
    const def = window.HeurAnim.definition(id);
    return Boolean(host && host.dataset.animLang === 'en' && host.dataset.animStep === '1' && host.querySelector('.anim-caption').textContent === def.steps[1].en);
  }, id);
  check('language switch keeps step', switched);
  await setLang(page, 'pl');
  await page.evaluate(() => window.App.navigate('home'));
  await sleep(stepMs + 600);
  check('navigate away is clean', await page.evaluate(() => !document.querySelector('[data-component="scheme-animation"]')) && errors.length === 0, errors.join(' | '));
  const fallback = await page.evaluate(() => {
    const host = document.createElement('section');
    const controller = window.HeurAnim.mount(host, 99, 'pl', {}, { autoplay: false });
    return host.dataset.animState === 'unavailable' && typeof controller.destroy === 'function';
  });
  check('unregistered id renders the unavailable fallback', fallback);
}

// ─── Run ───
async function run() {
  const { chromium } = await import(PLAYWRIGHT_MODULE);
  if (SHOTS) mkdirSync(SHOTS, { recursive: true });
  await startServer();
  browser = await chromium.launch({ executablePath: CHROME_PATH, headless: true, args: ['--no-sandbox'] });
  for (const pageName of PAGES) {
    const reduced = await newPage({ reducedMotion: 'reduce' });
    await openPage(reduced.page, pageName);
    const schemeIds = pageName === 'index.html' ? IDS : IDS.slice(0, 1);
    for (const lang of LANGS) {
      await setLang(reduced.page, lang);
      for (const id of schemeIds) {
        await openScheme(reduced.page, id);
        await checkScheme(reduced.page, id, lang);
      }
    }
    await checkVerifyRows(reduced.page, pageName + ' scheme view');
    await openScheme(reduced.page, IDS[0]);
    await sleep(1000);
    check(`${pageName} no autoplay when reduced`, await reduced.page.evaluate(() => document.querySelector('[data-component="scheme-animation"]').dataset.animState !== 'playing'));
    await regressions(reduced.page, reduced.errors);
    check(`${pageName} console clean (reduced)`, reduced.errors.length === 0, reduced.errors.join(' | '));
    await reduced.context.close();

    const motion = await newPage();
    await openPage(motion.page, pageName);
    await openScheme(motion.page, IDS[0]);
    await motion.page.waitForFunction(() => document.querySelector('[data-component="scheme-animation"]').dataset.animState === 'playing', null, { timeout: 4000 }).catch(() => {});
    await sleep(stepMs + 700);
    const advanced = await motion.page.evaluate(() => Number(document.querySelector('[data-component="scheme-animation"]').dataset.animStep));
    check(`${pageName} autoplay advances`, advanced >= 1, 'step ' + advanced);
    await motion.page.click('[data-component="scheme-animation"] [data-anim-action="toggle"]');
    const pausedAt = await motion.page.evaluate(() => document.querySelector('[data-component="scheme-animation"]').dataset.animStep);
    await sleep(stepMs + 400);
    check(`${pageName} pause holds`, await motion.page.evaluate(step => document.querySelector('[data-component="scheme-animation"]').dataset.animStep === step, pausedAt));
    check(`${pageName} console clean (motion)`, motion.errors.length === 0, motion.errors.join(' | '));
    await motion.context.close();

    const mobile = await newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce', isMobile: true, hasTouch: true });
    await openPage(mobile.page, pageName);
    await openScheme(mobile.page, IDS[0]);
    const layout = await mobile.page.evaluate(() => {
      const host = document.querySelector('[data-component="scheme-animation"]');
      const svg = host.querySelector('svg');
      const scale = svg.getBoundingClientRect().width / 640;
      const sizes = [...svg.querySelectorAll('text')].map(text => ({ small: text.classList.contains('ha-label--small'), px: parseFloat(getComputedStyle(text).fontSize) * scale }));
      const buttons = [...host.querySelectorAll('.anim-btn')].map(b => b.getBoundingClientRect());
      const dots = [...host.querySelectorAll('.anim-dot')].map(b => b.getBoundingClientRect());
      return {
        noScroll: document.documentElement.scrollWidth <= window.innerWidth,
        minNormal: Math.min(...sizes.filter(s => !s.small).map(s => s.px), 99),
        minSmall: Math.min(...sizes.filter(s => s.small).map(s => s.px), 99),
        buttonsOk: buttons.every(r => r.width >= 40 && r.height >= 40),
        dotsOk: dots.every(r => r.width >= 32 && r.height >= 32)
      };
    });
    check(`${pageName} mobile layout`, layout.noScroll && layout.minNormal >= 10 && layout.minSmall >= 9 && layout.buttonsOk && layout.dotsOk, JSON.stringify(layout));
    if (SHOTS) await mobile.page.locator('[data-component="scheme-animation"]').screenshot({ path: path.join(SHOTS, `mobile-${pageName.replace('.html', '')}.png`) });
    await mobile.context.close();
  }
}

// ─── Init ───
run()
  .catch(error => failures.push('probe crashed: ' + (error && error.stack || error)))
  .finally(async () => {
    if (browser) await browser.close().catch(() => {});
    if (server && server.exitCode === null) server.kill('SIGTERM');
    failures.forEach(line => console.log('FAIL  ' + line));
    console.log(failures.length ? `${failures.length} failures` : `PASS – ${IDS.length} scheme(s), ${PAGES.join(' + ')}`);
    process.exit(failures.length ? 1 : 0);
  });
