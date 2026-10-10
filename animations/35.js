/* Scheme 35 – Use a greedy choice as a first pass.
   Target 6 with tokens 1, 3, 4: greedy takes 4, 1, 1 (three tokens); 3 + 3 needs only two. */
HeurAnim.register(35, {
  steps: [
    { pl: 'Cel: dokładnie 6 punktów, jak najmniej żetonów. Żetony warte 1, 3 i 4, każdego dowolnie dużo.', en: 'Goal: exactly 6 points with as few tokens as possible. Tokens are worth 1, 3 and 4, as many as you like.' },
    { pl: 'Reguła zachłanna: bierz największy żeton, który się mieści. Pierwszy to 4, zostają 2 punkty.', en: 'Greedy rule: take the biggest token that fits. First comes 4, 2 points remain.' },
    { pl: 'Żeton 3 już się nie mieści, więc 1 i 1. Razem 3 żetony i dokładnie 6.', en: 'Token 3 no longer fits, so 1 and 1. In all 3 tokens and exactly 6.' },
    { pl: 'Sprawdzamy inaczej: dwa żetony po 3 też dają 6, czyli 2 żetony.', en: 'Try differently: two tokens of 3 also make 6, that is 2 tokens.' },
    { pl: 'Wynik zachłanny jest poprawny, ale nie najlepszy. Dwa to minimum, bo nie ma żetonu 6.', en: 'The greedy answer is valid but not the best. Two is the minimum, as no token is worth 6.' }
  ],
  build(api) {
    // ─── Layout ───
    const CELL = 70, X0 = 110, GREEDY_Y = 120, ALT_Y = 220, CELL_H = 56;
    const cellX = i => X0 + i * CELL;

    // ─── Scene ───
    const legend = api.text(320, 28, { pl: 'żetony: 1, 3, 4', en: 'tokens: 1, 3, 4' }, 'ha-label--center ha-label--strong');
    const goal = api.text(320, 56, { pl: 'cel: 6 punktów', en: 'goal: 6 points' }, 'ha-label--small ha-label--center');
    const greedyTitle = api.text(X0, GREEDY_Y - 20, { pl: 'zachłannie: największy, który się mieści', en: 'greedy: the biggest that fits' }, 'ha-label--small');
    const altTitle = api.text(X0, ALT_Y - 20, { pl: 'inaczej', en: 'differently' }, 'ha-label--small');
    const greedyCells = Array.from({ length: 6 }, (_, i) => api.box(cellX(i), GREEDY_Y, CELL - 6, CELL_H, null, 'ha-box--ghost'));
    const altCells = Array.from({ length: 6 }, (_, i) => api.box(cellX(i), ALT_Y, CELL - 6, CELL_H, null, 'ha-box--ghost'));
    const g4 = api.box(cellX(0), GREEDY_Y, 4 * CELL - 6, CELL_H, '4');
    const g1a = api.box(cellX(4), GREEDY_Y, CELL - 6, CELL_H, '1');
    const g1b = api.box(cellX(5), GREEDY_Y, CELL - 6, CELL_H, '1');
    const a3a = api.box(cellX(0), ALT_Y, 3 * CELL - 6, CELL_H, '3');
    const a3b = api.box(cellX(3), ALT_Y, 3 * CELL - 6, CELL_H, '3');
    const bottom = api.text(320, 322, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(altTitle, step >= 3);
      altCells.forEach(node => api.visible(node, step >= 3));
      api.visible(g4, step >= 1);
      api.visible(g1a, step >= 2);
      api.visible(g1b, step >= 2);
      api.visible(a3a, step >= 3);
      api.visible(a3b, step >= 3);
      api.tone(g4, step === 1 ? 'accent' : null);
      api.tone(g1a, step === 2 ? 'accent' : null);
      api.tone(g1b, step === 2 ? 'accent' : null);
      api.tone(a3a, step >= 3 ? 'good' : null);
      api.tone(a3b, step >= 3 ? 'good' : null);
      const foot = [
        null,
        { pl: 'wzięte 4, zostają 2', en: 'taken 4, 2 remain' },
        { pl: '4 + 1 + 1 = 6: 3 żetony', en: '4 + 1 + 1 = 6: 3 tokens' },
        { pl: '3 + 3 = 6: 2 żetony', en: '3 + 3 = 6: 2 tokens' },
        { pl: 'zachłannie 3 żetony, najlepiej 2', en: 'greedy 3 tokens, best 2' }
      ][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
      api.tone(bottom, step === 4 ? 'bad' : null);
    };
  }
});
