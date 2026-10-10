/* Scheme 31 – Count the same thing in two ways.
   Six students on a hexagon: count one by one (5+4+3+2+1) and by ends (6 x 5 / 2), both give 15. */
HeurAnim.register(31, {
  steps: [
    { pl: 'Pierwszy sposób, po kolei: pierwsza osoba ściska 5 nowych dłoni.', en: 'First way, one by one: the first student shakes 5 new hands.' },
    { pl: 'Druga już tylko 4 nowe, potem 3, 2 i 1, razem 5 + 4 + 3 + 2 + 1 = 15 uścisków.', en: 'The second only 4 new ones, then 3, 2 and 1, so 5 + 4 + 3 + 2 + 1 = 15 handshakes.' },
    { pl: 'Drugi sposób, po końcach: każdy z 6 uczniów ściska 5 dłoni, więc końców jest 6 × 5 = 30.', en: 'Second way, by ends: each of the 6 students shakes 5 hands, giving 6 × 5 = 30 ends.' },
    { pl: 'Uścisk ma dwa końce, po jednym u każdej osoby, więc policzyliśmy go dwa razy: 30 / 2 = 15.', en: 'A handshake has two ends, one per person, so it was counted twice: 30 / 2 = 15.' },
    { pl: 'Oba sposoby dają 15, więc wynik się potwierdza. Gdyby wyszło 15 i 30, to zdradziłoby błąd.', en: 'Both ways give 15, so the answer is confirmed. Getting 15 and 30 would reveal a mistake.' }
  ],
  build(api) {
    // ─── Layout ───
    const CX = 200, CY = 175, RADIUS = 115, COUNT = 6;
    const pos = i => {
      const angle = -Math.PI / 2 + i * 2 * Math.PI / COUNT;
      return { x: CX + RADIUS * Math.cos(angle), y: CY + RADIUS * Math.sin(angle) };
    };
    const SPOKE_TO = 3;

    // ─── Scene ───
    const lines = [];
    for (let a = 0; a < COUNT; a += 1) {
      for (let b = a + 1; b < COUNT; b += 1) {
        lines.push({ a, b, node: api.line(pos(a).x, pos(a).y, pos(b).x, pos(b).y, 'ha-line--thin') });
      }
    }
    const dots = Array.from({ length: COUNT }, (_, i) => api.circle(pos(i).x, pos(i).y, 12));
    const endTags = [
      api.text(pos(0).x + 26, pos(0).y + 6, { pl: 'koniec', en: 'end' }, 'ha-label--small'),
      api.text(pos(SPOKE_TO).x + 26, pos(SPOKE_TO).y + 6, { pl: 'koniec', en: 'end' }, 'ha-label--small')
    ];
    const side = api.text(500, 150, '', 'ha-label--center ha-label--strong');
    const sub = api.text(500, 215, '', 'ha-label--small ha-label--center');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      lines.forEach(item => {
        const spoke = (item.a === 0 && item.b === SPOKE_TO);
        api.visible(item.node, step >= 1 || item.a === 0);
        let name = null;
        if (step === 0 && item.a === 0) name = 'accent';
        if (step === 2) name = spoke ? 'accent' : 'dim';
        if (step === 4) name = 'good';
        api.tone(item.node, name);
      });
      dots.forEach((node, i) => api.tone(node, step === 0 && i === 0 ? 'accent' : null));
      endTags.forEach(node => api.visible(node, step === 2 || step === 3));
      const main = [
        { pl: 'pierwsza osoba:\n5 nowych', en: 'first student:\n5 new' },
        { pl: '5 + 4 + 3 + 2 + 1\n= 15', en: '5 + 4 + 3 + 2 + 1\n= 15' },
        { pl: '6 × 5 = 30\nkońców', en: '6 × 5 = 30\nends' },
        { pl: '30 / 2 = 15\nuścisków', en: '30 / 2 = 15\nhandshakes' },
        { pl: '15 = 15', en: '15 = 15' }
      ][step];
      api.setText(side, main);
      const note = [null, { pl: 'pierwszy sposób', en: 'first way' }, { pl: 'drugi sposób', en: 'second way' }, { pl: '2 końce = 1 uścisk', en: '2 ends = 1 handshake' }, { pl: '6 × 5 / 2 = 15', en: '6 × 5 / 2 = 15' }][step];
      api.visible(sub, Boolean(note));
      api.setText(sub, note || '');
      api.tone(side, step === 4 ? 'good' : null);
    };
  }
});
