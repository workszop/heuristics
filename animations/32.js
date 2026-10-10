/* Scheme 32 – Add a helpful object.
   A 6 m x 8 m court: the added diagonal links the known sides to the requested distance. */
HeurAnim.register(32, {
  steps: [
    { pl: 'Boisko ma boki 6 m i 8 m. Pytanie: jaka jest odległość między przeciwległymi narożnikami?', en: 'The court has sides 6 m and 8 m. Question: how far apart are opposite corners?' },
    { pl: 'Same boki nie podają tej odległości, więc dorysowujemy przekątną d.', en: 'The sides alone do not give that distance, so we add the diagonal d.' },
    { pl: 'Przekątna tworzy trójkąt prostokątny; jest w nim najdłuższym bokiem.', en: 'The diagonal forms a right triangle; in it, it is the longest side.' },
    { pl: 'Kwadrat najdłuższego boku to suma kwadratów pozostałych: d² = 36 + 64 = 100.', en: 'The square of the longest side is the sum of the other two squares: d² = 36 + 64 = 100.' },
    { pl: 'Skoro 10 · 10 = 100, to d = 10 m. Dodana linia pomogła w obliczeniu, a boiska nie zmieniła.', en: 'Since 10 × 10 = 100, d = 10 m. The added line helped the calculation and did not change the court.' }
  ],
  build(api) {
    // ─── Layout ───
    const PX_PER_M = 30;
    const LEFT = 60, TOP = 70, WIDTH = 8 * PX_PER_M, HEIGHT = 6 * PX_PER_M;
    const RIGHT = LEFT + WIDTH, BOTTOM = TOP + HEIGHT;

    // ─── Scene ───
    const court = api.box(LEFT, TOP, WIDTH, HEIGHT, null);
    const triangle = api.el('path', { d: 'M ' + LEFT + ' ' + BOTTOM + ' L ' + RIGHT + ' ' + BOTTOM + ' L ' + RIGHT + ' ' + TOP + ' Z', class: 'ha-area is-accent' });
    const widthLabel = api.text(LEFT + WIDTH / 2, BOTTOM + 28, '8 m', 'ha-label--center');
    const heightLabel = api.text(LEFT - 14, TOP + HEIGHT / 2 + 6, '6 m', 'ha-label--end');
    const cornerA = api.circle(LEFT, BOTTOM, 7);
    const cornerB = api.circle(RIGHT, TOP, 7);
    const diagonal = api.line(LEFT, BOTTOM, RIGHT, TOP, 'ha-line--dashed');
    const diagLabel = api.text(LEFT + WIDTH / 2 - 36, TOP + HEIGHT / 2 - 14, 'd', 'ha-label--strong ha-label--center');
    const question = api.text(LEFT + WIDTH / 2, TOP + HEIGHT / 2 + 4, { pl: 'd = ?', en: 'd = ?' }, 'ha-label--big ha-label--center');
    const side = api.text(500, 160, '', 'ha-label--center ha-label--strong');
    const sub = api.text(500, 235, '', 'ha-label--small ha-label--center');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(triangle, step >= 2);
      api.visible(diagonal, step >= 1);
      api.tone(diagonal, step >= 4 ? 'good' : 'accent');
      api.visible(diagLabel, step >= 1);
      api.setText(diagLabel, step >= 4 ? '10 m' : 'd');
      api.tone(diagLabel, step >= 4 ? 'good' : null);
      api.visible(question, step === 0);
      api.tone(cornerA, step === 0 ? 'accent' : null);
      api.tone(cornerB, step === 0 ? 'accent' : null);
      const main = [null, null, { pl: 'trójkąt prostokątny', en: 'right triangle' }, { pl: 'd² = 6² + 8²\n= 36 + 64\n= 100', en: 'd² = 6² + 8²\n= 36 + 64\n= 100' }, { pl: 'd = 10 m', en: 'd = 10 m' }][step];
      api.visible(side, Boolean(main));
      api.setText(side, main || '');
      const note = [null, null, null, { pl: 'd² znaczy d · d', en: 'd² means d × d' }, { pl: '10 · 10 = 100', en: '10 × 10 = 100' }][step];
      api.visible(sub, Boolean(note));
      api.setText(sub, note || '');
    };
  }
});
