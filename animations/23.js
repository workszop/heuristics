/* Scheme 23 – Experiment, find a pattern, then explain it.
   Matchstick squares in a row: 4, 7, 10 matchsticks, the +3 pattern, the reason (a new square shares one side), and the prediction for eight squares. */
HeurAnim.register(23, {
  steps: [
    { pl: 'Eksperyment 1: jeden kwadrat z zapałek potrzebuje 4 zapałek.', en: 'Experiment 1: one square of matchsticks needs 4 matchsticks.' },
    { pl: 'Eksperyment 2: dwa kwadraty ze wspólnym bokiem to 7 zapałek.', en: 'Experiment 2: two squares sharing a side need 7 matchsticks.' },
    { pl: 'Eksperyment 3: trzy kwadraty to 10. Za każdym razem przybywają 3: możliwy wzorzec.', en: 'Experiment 3: three squares need 10. Each time 3 more appear: a possible pattern.' },
    { pl: 'Powód: nowy kwadrat ma wspólny bok z poprzednim, więc dokładamy tylko 3 zapałki.', en: 'The reason: a new square shares a side with the previous one, so only 3 matchsticks are added.' },
    { pl: 'Przewidywanie dla ośmiu kwadratów: 4 + 7 × 3 = 25. Same liczby nie byłyby dowodem.', en: 'Prediction for eight squares: 4 + 7 × 3 = 25. The numbers alone would not be proof.' }
  ],
  build(api) {
    // ─── Layout ───
    const SIDE = 42, X0 = 40, Y0 = 70, MAX_N = 8;
    const TABLE_X = 450;
    const ROW_YS = [90, 130, 170];

    // ─── Scene ───
    const verticals = [];
    for (let k = 0; k <= MAX_N; k += 1) verticals.push(api.line(X0 + k * SIDE, Y0, X0 + k * SIDE, Y0 + SIDE, 'ha-line--thin'));
    const tops = [];
    const bottoms = [];
    for (let k = 0; k < MAX_N; k += 1) {
      tops.push(api.line(X0 + k * SIDE, Y0, X0 + (k + 1) * SIDE, Y0, 'ha-line--thin'));
      bottoms.push(api.line(X0 + k * SIDE, Y0 + SIDE, X0 + (k + 1) * SIDE, Y0 + SIDE, 'ha-line--thin'));
    }
    const header = api.text(TABLE_X, 50, { pl: 'kwadraty → zapałki', en: 'squares → matchsticks' }, 'ha-label--small');
    const rows = [
      api.text(TABLE_X, ROW_YS[0], { pl: '1 → 4', en: '1 → 4' }, 'ha-label--strong'),
      api.text(TABLE_X, ROW_YS[1], { pl: '2 → 7', en: '2 → 7' }, 'ha-label--strong'),
      api.text(TABLE_X, ROW_YS[2], { pl: '3 → 10', en: '3 → 10' }, 'ha-label--strong')
    ];
    const diffs = [api.text(TABLE_X + 110, 110, '+3', 'ha-label--small'), api.text(TABLE_X + 110, 150, '+3', 'ha-label--small')];
    const note = api.text(40, 190, '', 'ha-label--small');
    const bottom = api.text(320, 300, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      const n = [1, 2, 3, 3, 8][step];
      verticals.forEach((node, k) => { api.visible(node, k <= n); api.tone(node, step === 3 && k === n ? 'accent' : null); });
      tops.forEach((node, k) => { api.visible(node, k < n); api.tone(node, step === 3 && k === n - 1 ? 'accent' : null); });
      bottoms.forEach((node, k) => { api.visible(node, k < n); api.tone(node, step === 3 && k === n - 1 ? 'accent' : null); });
      api.visible(header, true);
      rows.forEach((node, i) => { api.visible(node, step >= i || (step >= 3)); api.tone(node, null); });
      diffs.forEach(node => { api.visible(node, step >= 2); api.tone(node, 'info'); });
      const noteText = step === 3 ? { pl: 'wspólny bok już jest: dokładamy 3 zapałki', en: 'the shared side is already there: add 3 matchsticks' } : null;
      api.visible(note, Boolean(noteText));
      api.setText(note, noteText || '');
      api.tone(note, step === 3 ? 'accent' : null);
      const foot = step === 4 ? { pl: '8 kwadratów: 4 + 7 × 3 = 25 zapałek', en: '8 squares: 4 + 7 × 3 = 25 matchsticks' } : null;
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
      api.tone(bottom, step === 4 ? 'good' : null);
    };
  }
});
