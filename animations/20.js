/* Scheme 20 – Use symmetry to avoid repeated work.
   Four friends at a round table: moving everyone one seat clockwise gives the same arrangement, so fixing one person leaves 3 x 2 x 1 = 6 cases. */
HeurAnim.register(20, {
  steps: [
    { pl: 'Ania (A), Bartek (B), Celina (C) i Darek (D) siedzą przy okrągłym stole. Układem jest kolejność dookoła stołu.', en: 'Ania (A), Bartek (B), Celina (C) and Darek (D) sit at a round table. The arrangement is the order around the table.' },
    { pl: 'Wszyscy przesiadają się o jedno miejsce zgodnie z zegarem. Kolejność jest ta sama, więc to ten sam układ.', en: 'Everyone moves one seat clockwise. The order is the same, so it is the same arrangement.' },
    { pl: '4 × 3 × 2 × 1 = 24 sposoby posadzenia liczą każdy układ 4 razy (4 przesunięcia): 24 ÷ 4 = 6.', en: '4 × 3 × 2 × 1 = 24 seatings count each arrangement 4 times (4 moves): 24 ÷ 4 = 6.' },
    { pl: 'Prościej: posadź Anię na dowolnym miejscu. To usuwa przesuwanie. Zostaje ustawić trzy osoby na trzech miejscach.', en: 'Simpler: seat Ania anywhere. That removes the moving. What is left is placing three people in three seats.' },
    { pl: 'Pozostałych da się ustawić na 3 × 2 × 1 = 6 sposobów. Tyle jest różnych układów.', en: 'The others can be placed in 3 × 2 × 1 = 6 ways. That is the number of different arrangements.' },
    { pl: 'Gdyby krzesło „przy drzwiach” było oznaczone, przesunięcie zmieniałoby, kto na nim siedzi: każde z 24 posadzeń jest inne.', en: 'If the chair ‘by the door’ were marked, moving would change who sits there: all 24 seatings differ.' }
  ],
  build(api) {
    // ─── Layout ───
    const SEATS = [{ x: 180, y: 82 }, { x: 270, y: 176 }, { x: 180, y: 270 }, { x: 90, y: 176 }];
    const PERSON_W = 52, PERSON_H = 44;
    const LETTERS = ['A', 'B', 'C', 'D'];
    const ORDERS = ['A B C D', 'A B D C', 'A C B D', 'A C D B', 'A D B C', 'A D C B'];

    // ─── Scene ───
    api.circle(180, 176, 52, 'ha-dot--hollow');
    const ghosts = SEATS.map((seat, i) => api.box(seat.x - PERSON_W / 2, seat.y - PERSON_H / 2, PERSON_W, PERSON_H, '?', 'ha-box--ghost'));
    const people = SEATS.map((seat, i) => api.box(seat.x - PERSON_W / 2, seat.y - PERSON_H / 2, PERSON_W, PERSON_H, LETTERS[i]));
    const door = api.text(180, 44, { pl: 'przy drzwiach', en: 'by the door' }, 'ha-label--small ha-label--center');
    const side = api.text(470, 120, '', 'ha-label--center ha-label--strong');
    const minis = ORDERS.map((order, i) => api.box(372 + (i % 2) * 120, 160 + Math.floor(i / 2) * 52, 108, 42, order));
    const total = api.text(470, 330, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      const shift = [0, 1, 2, 0, 0, 0][step];
      people.forEach((node, i) => {
        const to = SEATS[(i + shift) % 4];
        api.place(node, to.x - SEATS[i].x, to.y - SEATS[i].y);
        api.visible(node, step < 3 || step === 5 || i === 0);
        api.tone(node, (step === 3 || step === 4) && i === 0 ? 'accent' : null);
      });
      ghosts.forEach((node, i) => api.visible(node, (step === 3 || step === 4) && i > 0));
      api.visible(door, step === 5);
      const sideText = [
        { pl: 'kolejność zgodnie\nz zegarem: A B C D', en: 'clockwise order:\nA B C D' },
        { pl: 'ten sam układ', en: 'the same arrangement' },
        { pl: '4 przesunięcia =\njeden układ', en: '4 moves =\none arrangement' },
        { pl: 'Ania na stałe,\nresztę ustawiamy', en: 'Ania stays put,\nwe place the rest' },
        null,
        { pl: 'oznaczone krzesło:\nprzesunięcie coś zmienia', en: 'marked chair:\nmoving changes something' }
      ][step];
      api.visible(side, Boolean(sideText));
      api.setText(side, sideText || '');
      api.tone(side, step === 1 ? 'info' : null);
      minis.forEach(node => api.visible(node, step === 4));
      const totalText = [null, null, { pl: '24 ÷ 4 = 6', en: '24 ÷ 4 = 6' }, null, { pl: '3 × 2 × 1 = 6 układów', en: '3 × 2 × 1 = 6 arrangements' }, { pl: 'liczy się wszystkie 24', en: 'all 24 count' }][step];
      api.visible(total, Boolean(totalText));
      api.setText(total, totalText || '');
      api.tone(total, step === 4 ? 'good' : null);
    };
  }
});
