/* Scheme 31 – Count the same thing in two ways.
   Six students on a hexagon: count handshake ends per student (30), then per handshake (15). */
HeurAnim.register(31, {
  steps: [
    { pl: 'Pierwszy rachunek, po uczniach: jedna osoba ściska 5 dłoni, więc ma 5 końców uścisków.', en: 'First count, by student: one person shakes 5 hands, so has 5 handshake ends.' },
    { pl: 'Każdy z 6 uczniów ma 5 końców, razem 6 × 5 = 30. To nie jest jeszcze liczba uścisków.', en: 'Each of the 6 students has 5 ends: 6 × 5 = 30 in all. That is not yet the number of handshakes.' },
    { pl: 'Drugi rachunek, po uściskach: uścisk ma dwa końce, po jednym u każdej osoby, więc 30 końców to 15 uścisków.', en: 'Second count, by handshake: a handshake has two ends, one per person, so 30 ends make 15 handshakes.' },
    { pl: 'Trzeci rachunek: 6 wyborów pierwszej osoby razy 5 drugiej, podzielone przez 2: też 15. Oba wyniki się zgadzają.', en: 'Third count: 6 choices of the first person times 5 of the second, divided by 2: also 15. The results agree.' }
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
        if (step === 3) name = 'good';
        api.tone(item.node, name);
      });
      dots.forEach((node, i) => api.tone(node, step === 0 && i === 0 ? 'accent' : null));
      endTags.forEach(node => api.visible(node, step === 2));
      const main = [
        { pl: '5 końców', en: '5 ends' },
        { pl: '6 × 5 = 30\nkońców', en: '6 × 5 = 30\nends' },
        { pl: '30 / 2 = 15\nuścisków', en: '30 / 2 = 15\nhandshakes' },
        { pl: '15 = 15', en: '15 = 15' }
      ][step];
      api.setText(side, main);
      const note = [null, null, { pl: '2 końce = 1 uścisk', en: '2 ends = 1 handshake' }, { pl: '6 × 5 / 2 = 15', en: '6 × 5 / 2 = 15' }][step];
      api.visible(sub, Boolean(note));
      api.setText(sub, note || '');
      api.tone(side, step === 3 ? 'good' : null);
    };
  }
});
