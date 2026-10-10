/* Scheme 2 – Reuse the structure of a solved problem.
   Left: the solved tap problem; right: the new fence problem. Lines map roles, the method moves over, a difference is checked. */
HeurAnim.register(2, {
  steps: [
    { pl: 'Rozwiązane zadanie: kran A napełnia basen w 3 godziny, kran B w 6. Razem 1/3 + 1/6 = 1/2 basenu na godzinę, czyli 2 godziny.', en: 'Solved problem: tap A fills a pool in 3 hours, tap B in 6. Together 1/3 + 1/6 = 1/2 pool per hour, so 2 hours.' },
    { pl: 'Nowe zadanie: Ola maluje płot w 3 godziny, Kuba w 6. Ile potrwa malowanie razem? Jeszcze nie wiadomo.', en: 'New problem: Ola paints a fence in 3 hours, Kuba in 6. How long together? Not known yet.' },
    { pl: 'Dopasuj role: malarz to kran, płot to basen, a czas na całość to czas napełniania.', en: 'Match the roles: a painter is a tap, the fence is the pool, and the time for the whole job is the filling time.' },
    { pl: 'Ta sama metoda: 1/3 + 1/6 = 1/2 płotu na godzinę, więc razem 2 godziny.', en: 'The same method: 1/3 + 1/6 = 1/2 of the fence per hour, so 2 hours together.' },
    { pl: 'Sprawdź różnicę: gdyby mieli jeden pędzel na dwoje, tempa by się nie dodawały.', en: 'Check a difference: with one brush for both, the rates would not add up.' },
    { pl: 'Przy dwóch pędzlach i pracy jednocześnie analogia działa: wynik 2 godziny jest wiarygodny.', en: 'With two brushes and work at the same time the analogy holds: the 2-hour result is reliable.' }
  ],
  build(api) {
    // ─── Layout ───
    const LEFT_X = 20, RIGHT_X = 450, BOX_W = 170, BOX_H = 50;
    const ROW_YS = [50, 112, 174];
    const LEFT_CX = LEFT_X + BOX_W / 2, RIGHT_CX = RIGHT_X + BOX_W / 2;
    const LEFT_LABELS = [{ pl: 'Kran A: 3 h', en: 'Tap A: 3 h' }, { pl: 'Kran B: 6 h', en: 'Tap B: 6 h' }, { pl: 'Basen', en: 'Pool' }];
    const RIGHT_LABELS = [{ pl: 'Ola: 3 h', en: 'Ola: 3 h' }, { pl: 'Kuba: 6 h', en: 'Kuba: 6 h' }, { pl: 'Płot', en: 'Fence' }];

    // ─── Scene ───
    const divider = api.line(320, 36, 320, 300, 'ha-line--dashed ha-line--thin is-dim');
    const leftHead = api.text(LEFT_CX, 20, { pl: 'rozwiązane', en: 'solved' }, 'ha-label--small ha-label--center');
    const rightHead = api.text(RIGHT_CX, 20, { pl: 'nowe', en: 'new' }, 'ha-label--small ha-label--center');
    const leftBoxes = ROW_YS.map((y, i) => api.box(LEFT_X, y, BOX_W, BOX_H, LEFT_LABELS[i]));
    const rightBoxes = ROW_YS.map((y, i) => api.box(RIGHT_X, y, BOX_W, BOX_H, RIGHT_LABELS[i]));
    const maps = ROW_YS.map(y => api.arrow(LEFT_X + BOX_W + 6, y + BOX_H / 2, RIGHT_X - 8, y + BOX_H / 2, 'ha-line--dashed is-info'));
    const leftFormula = api.text(LEFT_CX, 250, { pl: '1/3 + 1/6 = 1/2\nbasenu na godz.', en: '1/3 + 1/6 = 1/2\npool per hour' }, 'ha-label--small ha-label--center');
    const leftResult = api.text(LEFT_CX, 288, { pl: 'razem: 2 h', en: 'together: 2 h' }, 'ha-label--center ha-label--strong');
    const rightFormula = api.text(RIGHT_CX, 250, { pl: '1/3 + 1/6 = 1/2\npłotu na godz.', en: '1/3 + 1/6 = 1/2\nfence per hour' }, 'ha-label--small ha-label--center');
    const rightUnknown = api.text(RIGHT_CX, 288, { pl: 'razem: ?', en: 'together: ?' }, 'ha-label--center ha-label--strong');
    const rightMaybe = api.text(RIGHT_CX, 288, { pl: 'razem: 2 h ?', en: 'together: 2 h ?' }, 'ha-label--center ha-label--strong');
    const rightResult = api.text(RIGHT_CX, 288, { pl: 'razem: 2 h', en: 'together: 2 h' }, 'ha-label--center ha-label--strong');
    const bottom = api.text(320, 336, '', 'ha-label--center');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      leftBoxes.forEach(node => api.visible(node, true));
      [leftHead, divider, leftFormula, leftResult].forEach(node => api.visible(node, true));
      [rightHead, ...rightBoxes].forEach(node => api.visible(node, step >= 1));
      maps.forEach(node => api.visible(node, step === 2));
      rightBoxes.forEach(node => api.tone(node, step === 2 ? 'info' : null));
      api.visible(rightFormula, step >= 3);
      api.visible(rightUnknown, api.between(step, 1, 2));
      api.visible(rightMaybe, step === 4);
      api.visible(rightResult, step === 3 || step === 5);
      api.tone(rightResult, step === 5 ? 'good' : null);
      const foot = [null, null, null, null,
        { pl: 'Jeden pędzel na dwoje? Wtedy tempa się nie sumują', en: 'One brush for two? Then the rates do not add' },
        { pl: 'Dwa pędzle naraz: analogia działa', en: 'Two brushes at once: the analogy works' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
      api.tone(bottom, step === 4 ? 'bad' : (step === 5 ? 'good' : null));
    };
  }
});
