/* Scheme 37 – Generalize to reveal the structure.
   Dot squares grow by L-shaped layers of 1, 3, 5, 7 dots; the general step: n x n square plus an L of 2n + 1 dots is an (n + 1) x (n + 1) square. */
HeurAnim.register(37, {
  steps: [
    { pl: 'Jedna kropka to kwadrat 1 · 1: suma pierwszej liczby nieparzystej wynosi 1.', en: 'One dot is a 1 × 1 square: the sum of the first odd number is 1.' },
    { pl: 'Dołóż „L” z 3 kropek: kwadrat 2 · 2, czyli 1 + 3 = 4.', en: 'Add an L of 3 dots: a 2 × 2 square, so 1 + 3 = 4.' },
    { pl: 'Dołóż „L” z 5 kropek: kwadrat 3 · 3, czyli 1 + 3 + 5 = 9.', en: 'Add an L of 5 dots: a 3 × 3 square, so 1 + 3 + 5 = 9.' },
    { pl: 'Ogólnie: do kwadratu n · n dokładamy „L” z 2n + 1 kropek (tu n = 3, czyli 7) i mamy (n + 1) · (n + 1).', en: 'In general: add an L of 2n + 1 dots to an n × n square (here n = 3, so 7) to get (n + 1) × (n + 1).' },
    { pl: 'Wzór działa dla każdego n, więc dla czterech liczb: 1 + 3 + 5 + 7 = 16.', en: 'The formula works for every n, so for four numbers: 1 + 3 + 5 + 7 = 16.' }
  ],
  build(api) {
    // ─── Layout ───
    const SIZE = 4, GAP = 50, X0 = 80, Y0 = 60, DOT_R = 15;
    // layer k (1..4) holds the dots whose row or column is k - 1 (an "L" of 2k - 1 dots)
    const LAYER_AT_STEP = [1, 2, 3, 4, 4];
    const cells = [];
    for (let r = 0; r < SIZE; r += 1) for (let c = 0; c < SIZE; c += 1) cells.push({ r, c, layer: Math.max(r, c) + 1 });

    // ─── Scene ───
    const dots = cells.map(cell => api.circle(X0 + cell.c * GAP, Y0 + cell.r * GAP, DOT_R, 'ha-dot--base'));
    const formula = api.text(430, 100, '', 'ha-label--big ha-label--center');
    const sub = api.text(430, 150, '', 'ha-label--center');
    const note = api.text(430, 200, '', 'ha-label--small ha-label--center');
    const bottom = api.text(320, 320, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      const shown = LAYER_AT_STEP[step];
      const newest = step === 3 ? 4 : (step <= 2 ? step + 1 : 0);
      dots.forEach((node, i) => {
        const layer = cells[i].layer;
        api.visible(node, layer <= shown);
        api.tone(node, layer === newest ? 'accent' : null);
      });
      const head = [
        '1 = 1²',
        '1 + 3 = 2²',
        '1 + 3 + 5 = 3²',
        'n² + (2n + 1) = (n + 1)²',
        '1 + 3 + 5 + 7 = 4² = 16'
      ][step];
      api.setText(formula, head);
      api.tone(formula, step === 4 ? 'good' : null);
      api.setText(sub, [
        { pl: 'kwadrat 1 · 1', en: 'a 1 × 1 square' },
        { pl: 'kwadrat 2 · 2', en: 'a 2 × 2 square' },
        { pl: 'kwadrat 3 · 3', en: 'a 3 × 3 square' },
        { pl: 'n · n plus „L” z 2n + 1', en: 'n × n plus an L of 2n + 1' },
        { pl: 'kwadrat 4 · 4', en: 'a 4 × 4 square' }
      ][step]);
      api.setText(note, [
        '', '+ 3', '+ 5',
        { pl: 'dla n = 3: 9 + 7 = 16', en: 'for n = 3: 9 + 7 = 16' },
        ''
      ][step]);
      api.setText(bottom, [
        { pl: 'pierwsza liczba nieparzysta: 1', en: 'the first odd number: 1' },
        { pl: 'druga liczba nieparzysta: 3', en: 'the second odd number: 3' },
        { pl: 'trzecia liczba nieparzysta: 5', en: 'the third odd number: 5' },
        { pl: 'następna liczba nieparzysta to zawsze 2n + 1', en: 'the next odd number is always 2n + 1' },
        { pl: 'czwarta liczba nieparzysta: 7', en: 'the fourth odd number: 7' }
      ][step]);
    };
  }
});
