/* Scheme 29 – Build the large case from smaller cases.
   A staircase of four steps; each count is the sum of the counts of the two steps a last jump can start from. */
HeurAnim.register(29, {
  steps: [
    { pl: 'Małe przypadki liczymy ręcznie: na stopień 1 jest 1 sposób, na stopień 2 są 2 sposoby (1 + 1 albo 2).', en: 'Small cases by hand: step 1 has 1 route, step 2 has 2 routes (1 + 1, or 2).' },
    { pl: 'Na stopień 3 ostatni skok zaczyna się na stopniu 2 (skok o 1) albo na stopniu 1 (skok o 2).', en: 'The last jump into step 3 starts from step 2 (a jump of 1) or from step 1 (a jump of 2).' },
    { pl: 'Sposobów na stopień 3 jest tyle, ile na stopień 2, plus tyle, ile na stopień 1: 2 + 1 = 3.', en: 'Routes to step 3 equal routes to step 2 plus routes to step 1: 2 + 1 = 3.' },
    { pl: 'Tak samo na stopień 4: skok ze stopnia 3 albo ze stopnia 2, więc 3 + 2 = 5.', en: 'Same for step 4: a jump from step 3 or from step 2, so 3 + 2 = 5.' },
    { pl: 'Sprawdzenie: na stopień 4 da się dojść dokładnie pięcioma drogami z listy.', en: 'Check: there are exactly five routes to step 4, as the list shows.' }
  ],
  build(api) {
    // ─── Layout ───
    const BLOCK_W = 120, X0 = 50, STEP_X = 140, GROUND_Y = 250;
    const HEIGHTS = [50, 90, 130, 170];
    const blockX = i => X0 + i * STEP_X;
    const topY = i => GROUND_Y - HEIGHTS[i];
    const midX = i => blockX(i) + BLOCK_W / 2;
    const arc = (from, to, lift) => 'M ' + midX(from) + ' ' + (topY(from) - 8) + ' Q ' + ((midX(from) + midX(to)) / 2) + ' ' + (Math.min(topY(from), topY(to)) - lift) + ' ' + midX(to) + ' ' + (topY(to) - 10);
    const COUNTS = ['1', '2', '3', '5'];
    const ROUTES = '1 + 1 + 1 + 1 · 1 + 1 + 2 · 1 + 2 + 1 · 2 + 1 + 1 · 2 + 2';

    // ─── Scene ───
    const blocks = HEIGHTS.map((h, i) => {
      const group = api.box(blockX(i), topY(i), BLOCK_W, h, null);
      const count = api.text(midX(i), topY(i) + h / 2, '?', 'ha-label--big ha-label--center', group);
      return { group, count };
    });
    HEIGHTS.forEach((_, i) => api.text(midX(i), GROUND_Y + 22, { pl: 'stopień ' + (i + 1), en: 'step ' + (i + 1) }, 'ha-label--small ha-label--center'));
    const arcs3 = [api.path(arc(1, 2, 30), 'ha-line--thin is-accent', undefined, true), api.path(arc(0, 2, 95), 'ha-line--thin is-accent', undefined, true)];
    const arcs4 = [api.path(arc(2, 3, 30), 'ha-line--thin is-accent', undefined, true), api.path(arc(1, 3, 95), 'ha-line--thin is-accent', undefined, true)];
    const jumpLabels = [
      api.text(midX(1) - 12, topY(1) - 14, { pl: 'skok o 1', en: 'jump of 1' }, 'ha-label--small ha-label--end'),
      api.text(midX(1), 66, { pl: 'skok o 2', en: 'jump of 2' }, 'ha-label--small ha-label--center')
    ];
    const bottom = api.text(320, 328, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      const shown = [step >= 0 ? COUNTS[0] : '?', COUNTS[1], step >= 2 ? COUNTS[2] : '?', step >= 3 ? COUNTS[3] : '?'];
      blocks.forEach((item, i) => {
        api.setText(item.count, shown[i]);
        let name = null;
        if ((step === 1 || step === 2) && i === 2) name = 'accent';
        if (step === 3 && i === 3) name = 'accent';
        if (step === 4 && i === 3) name = 'good';
        api.tone(item.group, name);
      });
      arcs3.forEach(node => api.visible(node, step === 1 || step === 2));
      arcs4.forEach(node => api.visible(node, step === 3));
      jumpLabels.forEach(node => api.visible(node, step === 1));
      const foot = [
        { pl: 'stopnie 1 i 2: 1 i 2 sposoby', en: 'steps 1 and 2: 1 and 2 routes' },
        { pl: 'z którego stopnia można skoczyć?', en: 'which step can the jump start from?' },
        { pl: '2 + 1 = 3', en: '2 + 1 = 3' },
        { pl: '3 + 2 = 5', en: '3 + 2 = 5' },
        { pl: ROUTES, en: ROUTES }
      ][step];
      api.setText(bottom, foot);
    };
  }
});
