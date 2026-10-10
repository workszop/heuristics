/* Scheme 18 – Change the representation.
   Words about a rectangle turn into a labelled drawing, then an equation, the solution and a check. */
HeurAnim.register(18, {
  steps: [
    { pl: 'Treść jest słowna: obwód prostokąta to 26 cm, a długość jest o 3 cm większa od szerokości.', en: 'The problem is in words: the perimeter is 26 cm and the length is 3 cm more than the width.' },
    { pl: 'Narysuj prostokąt i oznacz boki: szerokość w, długość w + 3. Oba warunki są na rysunku.', en: 'Draw the rectangle and label the sides: width w, length w + 3. Both conditions are in the picture.' },
    { pl: 'Obwód to dwie szerokości i dwie długości: 2w + 2(w + 3) = 26.', en: 'The perimeter is two widths and two lengths: 2w + 2(w + 3) = 26.' },
    { pl: 'Upraszczasz do 4w + 6 = 26, potem 4w = 20, więc w = 5, a długość to 8.', en: 'Simplify to 4w + 6 = 26, then 4w = 20, so w = 5 and the length is 8.' },
    { pl: 'Sprawdzenie na rysunku: 2 × 5 + 2 × 8 = 26, a 8 to o 3 więcej niż 5. Oba warunki spełnione.', en: 'Check on the drawing: 2 × 5 + 2 × 8 = 26, and 8 is 3 more than 5. Both conditions hold.' }
  ],
  build(api) {
    // ─── Layout ───
    const RECT_X = 210, RECT_Y = 104, RECT_W = 220, RECT_H = 110;
    const MID_X = RECT_X + RECT_W / 2;

    // ─── Scene ───
    const words = api.box(40, 12, 560, 56, { pl: 'Obwód 26 cm. Długość jest o 3 cm\nwiększa od szerokości.', en: 'Perimeter 26 cm. The length is 3 cm\nmore than the width.' }, 'ha-box--ghost');
    const rect = api.box(RECT_X, RECT_Y, RECT_W, RECT_H, null);
    const top = api.text(MID_X, RECT_Y - 18, '', 'ha-label--center');
    const bottom = api.text(MID_X, RECT_Y + RECT_H + 18, '', 'ha-label--center');
    const left = api.text(RECT_X - 14, RECT_Y + RECT_H / 2, '', 'ha-label--end');
    const right = api.text(RECT_X + RECT_W + 14, RECT_Y + RECT_H / 2, '', '');
    const equation = api.text(320, 270, '', 'ha-label--big ha-label--center');
    const note = api.text(320, 328, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(words, step <= 2);
      api.tone(words, step === 0 ? 'accent' : null);
      api.visible(rect, step >= 1);
      api.tone(rect, step === 4 ? 'good' : null);
      const solved = step >= 3;
      const side = solved ? ['8', '5'] : ['w + 3', 'w'];
      [top, bottom].forEach(node => { api.visible(node, step >= 1); api.setText(node, side[0]); });
      [left, right].forEach(node => { api.visible(node, step >= 1); api.setText(node, side[1]); });
      const eq = [null, null, '2w + 2(w + 3) = 26', '4w + 6 = 26, w = 5', '2 × 5 + 2 × 8 = 26'][step];
      api.visible(equation, Boolean(eq));
      api.setText(equation, eq || '');
      api.tone(equation, step === 4 ? 'good' : null);
      const foot = [null, null, { pl: 'słowa zamienione na równanie', en: 'words turned into an equation' }, { pl: 'szerokość 5 cm, długość 8 cm', en: 'width 5 cm, length 8 cm' }, { pl: 'obwód 26 i różnica 3: zgadza się', en: 'perimeter 26 and difference 3: it matches' }][step];
      api.visible(note, Boolean(foot));
      api.setText(note, foot || '');
    };
  }
});
