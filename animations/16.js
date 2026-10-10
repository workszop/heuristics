/* Scheme 16 – Solve a small or simple instance first.
   Complete graphs of 2, 3 and 4 players grow one player at a time; a table records 1, 3, 6 and the newcomer rule predicts 190 for 20. */
HeurAnim.register(16, {
  steps: [
    { pl: 'Zaczynamy od małego turnieju. Dwóch graczy rozgrywa 1 partię.', en: 'Start with a small tournament. Two players play 1 game.' },
    { pl: 'Trzeci gracz gra z każdym z dwóch poprzednich. Razem 3 partie.', en: 'A third player plays each of the two earlier players. 3 games in total.' },
    { pl: 'Czwarty gracz gra z każdym z trzech poprzednich. Razem 3 + 3 = 6 partii.', en: 'A fourth player plays each of the three earlier players. 3 + 3 = 6 games in total.' },
    { pl: 'Wzór: nowy gracz dokłada tyle partii, ilu było już graczy (+2, +3).', en: 'Pattern: a new player adds as many games as there were players already (+2, +3).' },
    { pl: 'Dla 20 graczy ostatni dokłada 19. Razem 1 + 2 + … + 19 = 190 partii.', en: 'With 20 players the last one adds 19. In total 1 + 2 + … + 19 = 190 games.' }
  ],
  build(api) {
    // ─── Layout ───
    const POINTS = [[90, 100], [250, 100], [250, 240], [90, 240]];
    const EDGES = [[0, 1], [0, 2], [1, 2], [0, 3], [1, 3], [2, 3]];
    const EDGE_FROM_STEP = [0, 1, 1, 2, 2, 2];
    const DOT_R = 18;
    const TABLE_X = 380, ROW_YS = [90, 140, 190, 260];
    const ROWS = [
      { pl: '2 graczy → 1', en: '2 players → 1' },
      { pl: '3 graczy → 3', en: '3 players → 3' },
      { pl: '4 graczy → 6', en: '4 players → 6' },
      { pl: '20 graczy → 190', en: '20 players → 190' }
    ];
    const ROW_FROM_STEP = [0, 1, 2, 4];

    // ─── Scene ───
    const edges = EDGES.map(pair => api.line(POINTS[pair[0]][0], POINTS[pair[0]][1], POINTS[pair[1]][0], POINTS[pair[1]][1]));
    const dots = POINTS.map((point, i) => {
      const group = api.group('ha-node');
      api.circle(point[0], point[1], DOT_R, 'ha-dot--hollow', group);
      api.text(point[0], point[1], String(i + 1), 'ha-label--small ha-label--center', group);
      return group;
    });
    api.text(TABLE_X, 50, { pl: 'liczba partii', en: 'number of games' }, 'ha-label--small');
    const rows = ROWS.map((label, i) => api.text(TABLE_X, ROW_YS[i], label));
    const adds = [null, { pl: '+2', en: '+2' }, { pl: '+3', en: '+3' }, { pl: '+19', en: '+19' }].map((label, i) => label ? api.text(610, ROW_YS[i], label, 'ha-label--small ha-label--end') : null);
    const dotsRow = api.text(TABLE_X, 222, '…', 'ha-label--small');
    const bottom = api.text(320, 328, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      const players = step === 0 ? 2 : (step === 1 ? 3 : 4);
      dots.forEach((node, i) => {
        api.visible(node, i < players);
        api.tone(node, i === players - 1 && step >= 1 && step <= 2 ? 'accent' : null);
      });
      edges.forEach((node, i) => {
        api.visible(node, step <= 2 ? EDGE_FROM_STEP[i] <= step : EDGE_FROM_STEP[i] <= 2);
        api.tone(node, step >= 1 && step <= 2 && EDGE_FROM_STEP[i] === step ? 'accent' : null);
      });
      rows.forEach((node, i) => {
        api.visible(node, step >= ROW_FROM_STEP[i]);
        api.tone(node, step === ROW_FROM_STEP[i] ? 'accent' : null);
      });
      api.visible(dotsRow, step === 4);
      adds.forEach((node, i) => {
        if (node) api.visible(node, i === 3 ? step === 4 : step >= 3);
      });
      const foot = step === 4 ? { pl: '1 + 2 + … + 19 = 190', en: '1 + 2 + … + 19 = 190' } : null;
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
      api.tone(bottom, step === 4 ? 'good' : null);
    };
  }
});
