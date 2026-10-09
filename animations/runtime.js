/* Heuristics – shared animation runtime for index.html and index_co.html.
   Classic script (works from file://). Exposes window.HeurAnim. */
(function () {
  'use strict';

  // ─── Constants ───
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const VIEW_W = 640;
  const VIEW_H = 360;
  const STEP_MS = 2800;
  const MIN_STEPS = 3;
  const MAX_STEPS = 6;
  const MAX_CAPTION = 140;
  const SCHEME_COUNT = 37;
  const LANGS = ['pl', 'en'];
  const TONES = ['accent', 'good', 'bad', 'info', 'dim'];
  const DEFAULT_LABELS = {
    title: 'See it in motion', play: 'Play', pause: 'Pause', prev: 'Previous step',
    next: 'Next step', restart: 'Restart', step: 'Step', unavailable: 'Animation unavailable'
  };
  const ICONS = {
    restart: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path>',
    prev: '<path d="m15 18-6-6 6-6"></path>',
    next: '<path d="m9 18 6-6-6-6"></path>',
    play: '<polygon points="6 3 20 12 6 21 6 3"></polygon>',
    pause: '<rect x="14" y="4" width="4" height="16" rx="1"></rect><rect x="6" y="4" width="4" height="16" rx="1"></rect>'
  };

  // ─── State ───
  const registry = new Map();
  let mountCounter = 0;

  // ─── Helpers ───
  function prefersReducedMotion() {
    return Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  function pick(value, lang) {
    if (value && typeof value === 'object') return String(value[lang] ?? value.pl ?? '');
    return value === undefined || value === null ? '' : String(value);
  }
  function validateDef(def) {
    if (!def || typeof def !== 'object') return ['definition is not an object'];
    const errors = [];
    if (typeof def.build !== 'function') errors.push('build is not a function');
    if (!Array.isArray(def.steps)) return errors.concat('steps is not an array');
    if (def.steps.length < MIN_STEPS || def.steps.length > MAX_STEPS) errors.push('needs 3-6 steps, has ' + def.steps.length);
    def.steps.forEach((step, index) => {
      LANGS.forEach(lang => {
        const text = step && typeof step[lang] === 'string' ? step[lang].trim() : '';
        if (!text) errors.push('step ' + (index + 1) + ': missing ' + lang + ' caption');
        else if (text.length > MAX_CAPTION) errors.push('step ' + (index + 1) + ': ' + lang + ' caption longer than ' + MAX_CAPTION);
        if (text.includes('\u2014')) errors.push('step ' + (index + 1) + ': ' + lang + ' caption contains an em dash');
      });
    });
    return errors;
  }
  function register(id, def) {
    if (!Number.isInteger(id) || id < 1 || id > SCHEME_COUNT) { console.error('HeurAnim.register: invalid id', id); return; }
    if (registry.has(id)) { console.error('HeurAnim.register: duplicate id', id); return; }
    registry.set(id, def);
  }
  function icon(name) {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.innerHTML = ICONS[name];
    return svg;
  }
  function button(action, label, iconName) {
    const node = document.createElement('button');
    node.type = 'button';
    node.className = 'anim-btn';
    node.dataset.animAction = action;
    node.setAttribute('aria-label', label);
    node.title = label;
    node.appendChild(icon(iconName));
    return node;
  }
  function makeApi(svg, lang, markerId) {
    const L = value => pick(value, lang);
    const cls = (base, extra) => (base + ' ' + (extra || '')).trim();
    function el(tag, attrs, parent) {
      const node = document.createElementNS(SVG_NS, tag);
      Object.entries(attrs || {}).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') node.setAttribute(key, String(value));
      });
      (parent || svg).appendChild(node);
      return node;
    }
    function setText(node, value) {
      const lines = L(value).split('\n');
      node.replaceChildren();
      if (lines.length === 1) { node.textContent = lines[0]; return node; }
      const x = node.getAttribute('x');
      lines.forEach((line, index) => {
        const span = document.createElementNS(SVG_NS, 'tspan');
        span.setAttribute('x', x);
        span.setAttribute('dy', (index === 0 ? -(lines.length - 1) * 0.6 : 1.2) + 'em');
        span.textContent = line;
        node.appendChild(span);
      });
      return node;
    }
    function text(x, y, value, extra, parent) { return setText(el('text', { x, y, class: cls('ha-label', extra) }, parent), value); }
    function group(extra, parent) { return el('g', { class: extra || null }, parent); }
    function box(x, y, w, h, label, extra, parent) {
      const node = group(cls('ha-box', extra), parent);
      el('rect', { x, y, width: w, height: h, rx: 10 }, node);
      if (label !== undefined && label !== null && L(label) !== '') text(x + w / 2, y + h / 2, label, 'ha-label--center', node);
      return node;
    }
    function circle(cx, cy, r, extra, parent) { return el('circle', { cx, cy, r, class: cls('ha-dot', extra) }, parent); }
    function line(x1, y1, x2, y2, extra, parent) { return el('line', { x1, y1, x2, y2, class: cls('ha-line', extra) }, parent); }
    function arrow(x1, y1, x2, y2, extra, parent) {
      const node = line(x1, y1, x2, y2, extra, parent);
      node.setAttribute('marker-end', 'url(#' + markerId + ')');
      return node;
    }
    function path(d, extra, parent, withArrow) {
      const node = el('path', { d, class: cls('ha-line', extra) }, parent);
      if (withArrow) node.setAttribute('marker-end', 'url(#' + markerId + ')');
      return node;
    }
    function place(node, x, y) { node.style.transform = 'translate(' + x + 'px, ' + y + 'px)'; return node; }
    function visible(node, on) { node.classList.toggle('is-hidden', !on); return node; }
    function tone(node, name) { TONES.forEach(item => node.classList.toggle('is-' + item, item === name)); return node; }
    function between(step, from, to) { return step >= from && (to === undefined || step <= to); }
    return { svg, lang, L, el, setText, text, group, box, circle, line, arrow, path, place, visible, tone, between, VIEW_W, VIEW_H };
  }
  function unavailable(host, id, labels, reason) {
    host.replaceChildren();
    host.dataset.animState = 'unavailable';
    host.dataset.animStep = '0';
    host.dataset.animSteps = '0';
    const message = document.createElement('p');
    message.className = 'anim-unavailable';
    message.textContent = labels.unavailable;
    host.appendChild(message);
    console.warn('HeurAnim: scheme ' + id + ' unavailable:', reason);
    const noop = () => {};
    return { id, lang: host.dataset.animLang, el: host, steps: 0, get step() { return 0; }, get state() { return 'unavailable'; }, play: noop, pause: noop, toggle: noop, goTo: noop, restart: noop, destroy: noop };
  }

  // ─── Render ───
  function mount(host, id, lang, labelOverrides, options) {
    const labels = Object.assign({}, DEFAULT_LABELS, labelOverrides || {});
    const opts = Object.assign({ autoplay: true, startStep: 0 }, options || {});
    const safeLang = LANGS.includes(lang) ? lang : 'pl';
    host.replaceChildren();
    host.classList.add('scheme-animation');
    host.dataset.component = 'scheme-animation';
    host.dataset.scheme = String(id);
    host.dataset.animLang = safeLang;
    const def = registry.get(id);
    const errors = def ? validateDef(def) : ['not registered'];
    if (errors.length) return unavailable(host, id, labels, errors.join('; '));
    const total = def.steps.length;
    mountCounter += 1;
    const uid = 'ha' + mountCounter;

    const heading = document.createElement('h2');
    heading.className = 'anim-title';
    heading.id = uid + '-title';
    heading.textContent = labels.title;
    host.setAttribute('aria-labelledby', heading.id);
    const stage = document.createElement('figure');
    stage.className = 'anim-stage';
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + VIEW_W + ' ' + VIEW_H);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-labelledby', uid + '-caption');
    svg.setAttribute('focusable', 'false');
    stage.appendChild(svg);
    const caption = document.createElement('p');
    caption.className = 'anim-caption';
    caption.id = uid + '-caption';
    const controls = document.createElement('div');
    controls.className = 'anim-controls';
    const restartBtn = button('restart', labels.restart, 'restart');
    const prevBtn = button('prev', labels.prev, 'prev');
    const toggleBtn = button('toggle', labels.play, 'play');
    const nextBtn = button('next', labels.next, 'next');
    const dotList = document.createElement('ol');
    dotList.className = 'anim-dots';
    const dots = def.steps.map((_, index) => {
      const item = document.createElement('li');
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'anim-dot';
      dot.dataset.animGoto = String(index);
      dot.setAttribute('aria-label', labels.step + ' ' + (index + 1));
      item.appendChild(dot);
      dotList.appendChild(item);
      return dot;
    });
    const counter = document.createElement('span');
    counter.className = 'anim-counter';
    controls.append(restartBtn, prevBtn, toggleBtn, nextBtn, dotList, counter);
    host.append(heading, stage, caption, controls);

    const markerId = uid + '-arrow';
    const defs = document.createElementNS(SVG_NS, 'defs');
    const marker = document.createElementNS(SVG_NS, 'marker');
    [['id', markerId], ['viewBox', '0 0 10 10'], ['refX', '8'], ['refY', '5'], ['markerWidth', '4'], ['markerHeight', '4'], ['orient', 'auto-start-reverse']]
      .forEach(([key, value]) => marker.setAttribute(key, value));
    const head = document.createElementNS(SVG_NS, 'path');
    head.setAttribute('d', 'M0 0 L10 5 L0 10 z');
    head.setAttribute('class', 'ha-arrowhead');
    marker.appendChild(head);
    defs.appendChild(marker);
    svg.appendChild(defs);

    let show = null;
    try { show = def.build(makeApi(svg, safeLang, markerId)); } catch (error) { return unavailable(host, id, labels, error); }
    if (typeof show !== 'function') return unavailable(host, id, labels, 'build did not return a function');

    let step = Math.min(total - 1, Math.max(0, Number(opts.startStep) || 0));
    let state = 'idle';
    let timer = null;
    let destroyed = false;
    let autoPaused = false;
    let observer = null;

    function sync() {
      try { show(step); } catch (error) { console.error('HeurAnim: scheme ' + id + ' step ' + step, error); }
      const playing = state === 'playing';
      caption.textContent = pick(def.steps[step], safeLang);
      caption.setAttribute('aria-live', playing ? 'off' : 'polite');
      host.dataset.animStep = String(step);
      host.dataset.animSteps = String(total);
      host.dataset.animState = state;
      counter.textContent = (step + 1) + ' / ' + total;
      dots.forEach((dot, index) => dot.setAttribute('aria-current', index === step ? 'step' : 'false'));
      toggleBtn.replaceChildren(icon(playing ? 'pause' : 'play'));
      toggleBtn.setAttribute('aria-label', playing ? labels.pause : labels.play);
      toggleBtn.title = playing ? labels.pause : labels.play;
      toggleBtn.setAttribute('aria-pressed', String(playing));
      prevBtn.setAttribute('aria-disabled', String(step === 0));
      nextBtn.setAttribute('aria-disabled', String(step === total - 1));
    }
    function clearTimer() { if (timer) { window.clearTimeout(timer); timer = null; } }
    function tick() {
      timer = null;
      if (destroyed || state !== 'playing') return;
      step = Math.min(total - 1, step + 1);
      if (step === total - 1) state = 'done';
      sync();
      if (state === 'playing') timer = window.setTimeout(tick, STEP_MS);
    }
    function play() {
      if (destroyed) return;
      clearTimer();
      autoPaused = false;
      if (step === total - 1) step = 0;
      state = 'playing';
      sync();
      timer = window.setTimeout(tick, STEP_MS);
    }
    function pause() {
      if (destroyed) return;
      clearTimer();
      autoPaused = false;
      if (state === 'playing') state = 'paused';
      sync();
    }
    function toggle() { if (state === 'playing') pause(); else play(); }
    function goTo(index) {
      if (destroyed) return;
      clearTimer();
      autoPaused = false;
      step = Math.min(total - 1, Math.max(0, Number(index) || 0));
      state = step === total - 1 ? 'done' : 'paused';
      sync();
    }
    function restart() {
      goTo(0);
      if (!prefersReducedMotion()) play();
    }
    function onVisibility(entries) {
      const entry = entries[entries.length - 1];
      if (!entry || destroyed) return;
      if (entry.isIntersecting) {
        if (state === 'idle' || autoPaused) play();
      } else if (state === 'playing') {
        clearTimer();
        state = 'paused';
        autoPaused = true;
        sync();
      }
    }

    // ─── Listeners ───
    function onClick(event) {
      const target = event.target.closest('[data-anim-action], [data-anim-goto]');
      if (!target || !host.contains(target)) return;
      if (target.dataset.animGoto !== undefined) { goTo(Number(target.dataset.animGoto)); return; }
      const action = target.dataset.animAction;
      if (action === 'toggle') toggle();
      else if (action === 'next') goTo(step + 1);
      else if (action === 'prev') goTo(step - 1);
      else if (action === 'restart') restart();
    }
    function onKey(event) {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); goTo(step + 1); }
      else if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(step - 1); }
      else if (event.key === 'Home') { event.preventDefault(); goTo(0); }
      else if (event.key === 'End') { event.preventDefault(); goTo(total - 1); }
    }
    function destroy() {
      destroyed = true;
      clearTimer();
      if (observer) observer.disconnect();
      observer = null;
      host.removeEventListener('click', onClick);
      host.removeEventListener('keydown', onKey);
    }
    host.addEventListener('click', onClick);
    host.addEventListener('keydown', onKey);

    // ─── Init ───
    sync();
    if (opts.autoplay && !prefersReducedMotion()) {
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(onVisibility, { threshold: 0.4 });
        observer.observe(host);
      } else {
        play();
      }
    }
    return {
      id, lang: safeLang, el: host, steps: total,
      get step() { return step; },
      get state() { return state; },
      play, pause, toggle, goTo, restart, destroy
    };
  }

  window.HeurAnim = {
    register, mount, validateDef,
    has: id => registry.has(id),
    ids: () => [...registry.keys()].sort((a, b) => a - b),
    definition: id => registry.get(id) || null,
    STEP_MS, SCHEME_COUNT, VIEW_W, VIEW_H
  };
})();
