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
async function shot(page, file) {
  // Scroll so the section sits below the sticky header, then capture it.
  await page.evaluate(() => {
    const host = document.querySelector('[data-component="scheme-animation"]');
    const header = document.querySelector('.app-header');
    const offset = (header ? header.getBoundingClientRect().height : 0) + 12;
    window.scrollTo(0, host.getBoundingClientRect().top + window.scrollY - offset);
  });
  await sleep(150);
  await page.locator('[data-component="scheme-animation"]').screenshot({ path: file });
}
// Synchronous language switch inside the page: reports the old and the new host in one tick (no timer race).
async function switchLangSync(page, lang) {
  return page.evaluate(value => {
    const read = host => host && {
      scheme: host.dataset.scheme, lang: host.dataset.animLang, step: host.dataset.animStep, state: host.dataset.animState,
      text: [...host.querySelectorAll('svg text')].map(node => node.textContent).join('|'),
      caption: host.querySelector('.anim-caption') ? host.querySelector('.anim-caption').textContent : ''
    };
    const old = document.querySelector('[data-component="scheme-animation"]');
    const before = read(old);
    window.__oldHost = old;
    window.App.state.lang = value; window.App.saveState(); window.App.render();
    const host = document.querySelector('[data-component="scheme-animation"]');
    return { before, after: read(host), replaced: host !== old };
  }, lang);
}
const hostStatus = page => page.evaluate(() => {
  const host = document.querySelector('[data-component="scheme-animation"]');
  return host && { step: host.dataset.animStep, state: host.dataset.animState, lang: host.dataset.animLang };
});
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
  const ascending = Array.from({ length: info.steps }, (_, i) => i);
  const order = ascending.concat(ascending.slice(0, -1).reverse());
  for (let visit = 0; visit < order.length; visit += 1) {
    const k = order[visit];
    const dir = visit < info.steps ? '' : ' (descending)';
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
    check(`#${id} ${lang} step ${k}${dir}`, result.step === String(k) && result.state === expectedState, JSON.stringify({ step: result.step, state: result.state }));
    check(`#${id} ${lang} caption ${k}${dir}`, result.caption === info.captions[k], result.caption);
    check(`#${id} ${lang} idempotent show(${k})${dir}`, result.same, 'state after other steps differs from a fresh mount at this step');
    check(`#${id} ${lang} text fits at step ${k}${dir}`, result.overflow.length === 0, result.overflow.join(' | '));
    if (SHOTS && !dir) await shot(page, path.join(SHOTS, `${String(id).padStart(2, '0')}-${lang}-s${k + 1}.png`));
  }
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
  // Language switch while paused at step 1: step and paused state survive, nothing resumes.
  const paused = await switchLangSync(page, 'en');
  const def1 = await page.evaluate(id => window.HeurAnim.definition(id).steps[1].en, id);
  check('language switch keeps step and paused state', paused.replaced && paused.after.lang === 'en' && paused.after.step === '1' && paused.after.state === 'paused' && paused.after.caption === def1, JSON.stringify(paused.after));
  if (id === 1) check('language switch relabels the svg', paused.before.text !== paused.after.text, paused.after.text);
  await sleep(stepMs + 600);
  const stillPaused = await hostStatus(page);
  check('paused animation does not resume after language switch', stillPaused && stillPaused.step === '1' && stillPaused.state === 'paused', JSON.stringify(stillPaused));
  // Language switch at the last step: stays done on the last step.
  const last = await page.evaluate(() => Number(document.querySelector('[data-component="scheme-animation"]').dataset.animSteps) - 1);
  await page.click(`[data-component="scheme-animation"] [data-anim-goto="${last}"]`);
  const atEnd = await switchLangSync(page, 'pl');
  check('language switch at last step stays done', atEnd.after.lang === 'pl' && atEnd.after.step === String(last) && atEnd.after.state === 'done', JSON.stringify(atEnd.after));
  await sleep(stepMs + 600);
  const stillDone = await hostStatus(page);
  check('done animation stays done after language switch', stillDone && stillDone.step === String(last) && stillDone.state === 'done', JSON.stringify(stillDone));
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
// Motion context: a playing animation must stop completely when the view or language changes.
async function waitPlaying(page, pageName, label) {
  let started = true;
  await page.waitForFunction(() => { const host = document.querySelector('[data-component="scheme-animation"]'); return host && host.dataset.animState === 'playing'; }, null, { timeout: 5000 }).catch(() => { started = false; });
  check(`${pageName} motion probe: playback started${label ? ' (' + label + ')' : ''}`, started);
}
async function motionRegressions(page, errors, pageName) {
  const id = IDS[0];
  const other = IDS.length > 1 ? IDS[1] : null;
  await setLang(page, 'pl');
  // Language switch while playing: old host frozen, step carried over, still (or again) running.
  await page.evaluate(() => window.App.navigate('home'));
  await openScheme(page, id);
  await waitPlaying(page, pageName);
  const sw = await switchLangSync(page, 'en');
  check(`${pageName} language switch while playing: remounted in en`, sw.replaced && sw.after.lang === 'en' && sw.after.step === sw.before.step, JSON.stringify({ before: sw.before.step, after: sw.after }));
  if (id === 1) check(`${pageName} language switch while playing relabels the svg`, sw.before.text !== sw.after.text, sw.after.text);
  const frozenAt = await page.evaluate(() => window.__oldHost.dataset.animStep);
  await sleep(stepMs + 600);
  const oldNow = await page.evaluate(() => window.__oldHost.dataset.animStep);
  check(`${pageName} old host frozen after language switch`, oldNow === frozenAt, `${frozenAt} -> ${oldNow}`);
  await setLang(page, 'pl');
  const actions = [
    ['navigate to another scheme', page => page.evaluate(target => window.App.navigate('scheme', target), other === null ? 37 : other)],
    ['Alt+ArrowRight', page => page.keyboard.press('Alt+ArrowRight')],
    ['navigate home', page => page.evaluate(() => window.App.navigate('home'))]
  ];
  for (const [label, act] of actions) {
    await page.evaluate(() => window.App.navigate('home'));
    await openScheme(page, id);
    await waitPlaying(page, pageName, label);
    await page.evaluate(() => { window.__oldHost = document.querySelector('[data-component="scheme-animation"]'); });
    await act(page);
    const stepAfter = await page.evaluate(() => window.__oldHost.dataset.animStep);
    await sleep(stepMs + 600);
    const result = await page.evaluate(() => {
      const host = document.querySelector('[data-component="scheme-animation"]');
      return {
        oldStep: window.__oldHost.dataset.animStep, oldState: window.__oldHost.dataset.animState,
        view: window.App.state.view, selected: window.App.state.selected,
        host: host && { scheme: host.dataset.scheme, same: host === window.__oldHost }
      };
    });
    check(`${pageName} ${label}: old animation frozen`, result.oldStep === stepAfter, `${stepAfter} -> ${result.oldStep}`);
    const hostOk = result.view === 'scheme' ? Boolean(result.host && !result.host.same && result.host.scheme === String(result.selected)) : !result.host;
    check(`${pageName} ${label}: visible animation belongs to the current view`, hostOk, JSON.stringify(result));
  }
  check(`${pageName} console clean after navigation checks`, errors.length === 0, errors.join(' | '));
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
    await motionRegressions(motion.page, motion.errors, pageName);
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
    if (SHOTS) await shot(mobile.page, path.join(SHOTS, `mobile-${pageName.replace('.html', '')}.png`));
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
