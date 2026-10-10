/* Scheme 3 – Break the problem into parts.
   One big job splits into five tiles, arrows mark what must wait, the joined snack lists break the budget, a fix restores the goal. */
HeurAnim.register(3, {
  steps: [
    { pl: 'Wieczór filmowy klasy wygląda na jedną ogromną robotę.', en: 'A class film night looks like one huge job.' },
    { pl: 'Dziel na części: zgoda, sala, film, przekąski, ogłoszenie. Każda ma jasny wynik.', en: 'Split it into parts: permission, room, film, snacks, announcement. Each has a clear result.' },
    { pl: 'Strzałki pokazują, co musi poczekać: sala po zgodzie, ogłoszenie po filmie i sali.', en: 'Arrows show what must wait: the room after permission, the announcement after the film and the room.' },
    { pl: 'Każdą część da się zrobić osobno i oddać jako gotową.', en: 'Each part can be done separately and handed in as finished.' },
    { pl: 'Jedna osoba planuje napoje, druga jedzenie: 6 + 6 = 12 euro, a budżet to 10 euro. Złożone części się gryzą.', en: 'One person plans drinks, another food: 6 + 6 = 12 euros, but the budget is 10. Joined, the parts clash.' },
    { pl: 'Klasa rezygnuje z pozycji za 2 euro: 6 + 4 = 10 euro. Całość spełnia cel.', en: 'The class drops a 2-euro item: 6 + 4 = 10 euros. The whole meets the goal.' }
  ],
  build(api) {
    // ─── Layout ───
    const TW = 130, TH = 56;
    const TILES = [
      { x: 20, y: 40, label: { pl: 'Zgoda', en: 'Permission' } },
      { x: 225, y: 40, label: { pl: 'Sala', en: 'Room' } },
      { x: 20, y: 130, label: { pl: 'Film', en: 'Film' } },
      { x: 450, y: 85, w: 160, label: { pl: 'Ogłoszenie', en: 'Announcement' } }
    ];
    const SNACK_Y = 225;
    const CENTER_X = 320 - TW / 2, CENTER_Y = 152;

    // ─── Scene ───
    const whole = api.box(110, 70, 420, 170, { pl: 'Wieczór filmowy', en: 'Film night' });
    const tiles = TILES.map(item => api.box(item.x, item.y, item.w || TW, TH, item.label));
    const snacks = api.box(20, SNACK_Y, TW, TH, { pl: 'Przekąski', en: 'Snacks' });
    const listA = api.box(20, SNACK_Y, 100, TH, { pl: 'Napoje\n6 €', en: 'Drinks\n6 €' });
    const listB = api.box(140, SNACK_Y, 100, TH, { pl: 'Jedzenie\n6 €', en: 'Food\n6 €' });
    const listBFixed = api.box(140, SNACK_Y, 100, TH, { pl: 'Jedzenie\n4 €', en: 'Food\n4 €' });
    const budget = api.text(420, 256, { pl: 'budżet: 10 €', en: 'budget: 10 €' }, 'ha-label--small ha-label--center');
    const sum = api.text(420, 228, '', 'ha-label--center ha-label--strong');
    const arrows = [
      api.arrow(154, 68, 221, 68),
      api.arrow(359, 68, 446, 100),
      api.arrow(154, 158, 446, 122)
    ];

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(whole, step === 0);
      const spread = step >= 1;
      tiles.forEach(node => {
        api.visible(node, spread);
        api.tone(node, step === 3 || step === 5 ? 'good' : null);
      });
      tiles.forEach((node, i) => api.place(node, spread ? 0 : CENTER_X - TILES[i].x, spread ? 0 : CENTER_Y - TILES[i].y));
      api.visible(snacks, step >= 1 && step <= 3);
      api.place(snacks, spread ? 0 : CENTER_X - 20, spread ? 0 : CENTER_Y - SNACK_Y);
      api.tone(snacks, step === 3 ? 'good' : null);
      arrows.forEach(node => api.visible(node, step === 2 || step === 3));
      api.visible(listA, step >= 4);
      api.visible(listB, step === 4);
      api.visible(listBFixed, step === 5);
      api.tone(listA, step === 4 ? 'bad' : (step === 5 ? 'good' : null));
      api.tone(listB, step === 4 ? 'bad' : null);
      api.tone(listBFixed, step === 5 ? 'good' : null);
      api.visible(budget, step >= 4);
      api.visible(sum, step >= 4);
      api.setText(sum, step === 4 ? { pl: '6 + 6 = 12 € > 10 €', en: '6 + 6 = 12 € > 10 €' } : { pl: '6 + 4 = 10 €', en: '6 + 4 = 10 €' });
      api.tone(sum, step === 4 ? 'bad' : (step === 5 ? 'good' : null));
    };
  }
});
