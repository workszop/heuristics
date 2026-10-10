/* Scheme 27 – Find something that cannot change.
   Three switches and the move "flip 1 and 2 together": the count of lit switches stays even, yet parity alone does not make a target reachable. */
HeurAnim.register(27, {
  steps: [
    { pl: 'Trzy przełączniki są wyłączone: 000. Jedyny ruch przełącza przełączniki 1 i 2 razem.', en: 'Three switches are off: 000. The only move flips switches 1 and 2 together.' },
    { pl: 'Po ruchu mamy 110: włączone są 2 przełączniki, czyli liczba parzysta.', en: 'After the move we have 110: 2 switches are on, an even number.' },
    { pl: 'Kolejny ruch wraca do 000. Liczba włączonych zawsze zostaje parzysta: to niezmiennik.', en: 'Another move returns to 000. The number of switches on always stays even: an invariant.' },
    { pl: 'Cel 100 ma 1 włączony przełącznik, więc liczba jest nieparzysta: cel jest niemożliwy.', en: 'Target 100 has 1 switch on, an odd number: the target is impossible.' },
    { pl: 'Cel 101 ma parzystą liczbę, ale osiągalne są tylko 000 i 110: niezmiennik wyklucza, nie gwarantuje.', en: 'Target 101 has an even number, but only 000 and 110 are reachable: the invariant rules out, it does not guarantee.' }
  ],
  build(api) {
    // ─── Layout ───
    const SW_W = 100, SW_H = 70, SW_Y = 62;
    const SW_CX = [180, 320, 460];
    const MINI_W = 56, MINI_H = 44, MINI_Y = 246;
    const MINI_CX = [254, 320, 386];
    const STATES = ['000', '110', '000', '000', '000'];
    const TARGETS = [null, null, null, '100', '101'];

    // ─── Scene ───
    const rule = api.text(320, 22, { pl: 'Ruch: przełącz 1 i 2 razem', en: 'Move: flip 1 and 2 together' }, 'ha-label--center ha-label--strong');
    const bracket = api.path('M 180 56 L 180 48 L 320 48 L 320 56', 'ha-line--thin');
    const switches = SW_CX.map(cx => {
      const group = api.box(cx - SW_W / 2, SW_Y, SW_W, SW_H, null);
      return { group, label: api.text(cx, SW_Y + SW_H / 2, '0', 'ha-label--big ha-label--center', group) };
    });
    const numbers = SW_CX.map((cx, i) => api.text(cx, SW_Y + SW_H + 18, String(i + 1), 'ha-label--small ha-label--center'));
    const counter = api.text(320, 184, '', 'ha-label--center ha-label--strong');
    const note = api.text(320, 214, { pl: 'niezmiennik: parzystość liczby włączonych', en: 'invariant: parity of the number switched on' }, 'ha-label--small ha-label--center');
    const targetTag = api.text(MINI_CX[0] - MINI_W / 2 - 14, MINI_Y + MINI_H / 2, { pl: 'cel', en: 'target' }, 'ha-label--small ha-label--end');
    const minis = MINI_CX.map(cx => {
      const group = api.box(cx - MINI_W / 2, MINI_Y, MINI_W, MINI_H, null);
      return { group, label: api.text(cx, MINI_Y + MINI_H / 2, '0', 'ha-label--center', group) };
    });
    const bottom = api.text(320, 328, '', 'ha-label--center');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      const state = STATES[step];
      switches.forEach((item, i) => {
        const on = state[i] === '1';
        api.setText(item.label, on ? '1' : '0');
        api.tone(item.group, on ? 'accent' : null);
      });
      api.visible(rule, true);
      api.visible(bracket, step <= 2);
      numbers.forEach(node => api.visible(node, true));
      const target = TARGETS[step];
      const countOf = text => text.split('').filter(ch => ch === '1').length;
      const lit = countOf(target || state);
      const parity = lit % 2 === 0 ? { pl: 'parzyste', en: 'even' } : { pl: 'nieparzyste', en: 'odd' };
      api.setText(counter, {
        pl: (target ? 'włączone w celu: ' : 'włączone: ') + lit + ' (' + parity.pl + ')',
        en: (target ? 'on in the target: ' : 'switched on: ') + lit + ' (' + parity.en + ')'
      });
      api.tone(counter, step === 3 ? 'bad' : (step === 2 ? 'info' : null));
      api.visible(note, step === 2);
      api.tone(note, step === 2 ? 'info' : null);
      api.visible(targetTag, Boolean(target));
      minis.forEach((item, i) => {
        api.visible(item.group, Boolean(target));
        api.setText(item.label, target ? target[i] : '0');
        api.tone(item.group, target ? 'bad' : null);
      });
      const foot = [null, null, null,
        { pl: 'Parzystość się nie zgadza: cel niemożliwy', en: 'The parity does not match: impossible' },
        { pl: 'Osiągalne są tylko 000 i 110: cel nadal niemożliwy', en: 'Only 000 and 110 are reachable: still impossible' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
    };
  }
});
