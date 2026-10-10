/* Scheme 26 – Show that something must share a slot.
   25 student dots move into 12 month boxes: two per month is 24, so the 25th forces a third. */
HeurAnim.register(26, {
  steps: [
    { pl: 'W klasie jest 25 uczniów, a miesięcy urodzin jest 12.', en: 'The class has 25 students and there are 12 birth months.' },
    { pl: 'Daj każdemu miesiącowi po jednym uczniu: to 12 osób.', en: 'Give every month one student: that is 12 people.' },
    { pl: 'Dołóż drugiego do każdego miesiąca: 24 osoby i w żadnym miesiącu nie ma więcej niż 2.', en: 'Add a second student to every month: 24 people and no month has more than 2.' },
    { pl: '25. uczeń trafia do któregoś miesiąca (tu: maja), który już ma 2, więc jest tam co najmniej 3.', en: 'The 25th student joins some month (here: May) that already has 2, so it has at least 3.' },
    { pl: 'Mogło to być w każdym miesiącu: zasada nie mówi, w którym.', en: 'It could have been any month: the principle does not say which.' }
  ],
  build(api) {
    // ─── Layout ───
    const MONTHS = [
      { pl: 'sty', en: 'Jan' }, { pl: 'lut', en: 'Feb' }, { pl: 'mar', en: 'Mar' }, { pl: 'kwi', en: 'Apr' },
      { pl: 'maj', en: 'May' }, { pl: 'cze', en: 'Jun' }, { pl: 'lip', en: 'Jul' }, { pl: 'sie', en: 'Aug' },
      { pl: 'wrz', en: 'Sep' }, { pl: 'paź', en: 'Oct' }, { pl: 'lis', en: 'Nov' }, { pl: 'gru', en: 'Dec' }
    ];
    const BOX_W = 90, BOX_H = 84, GAP_X = 12, X0 = 20;
    const ROW_YS = [50, 176];
    const STUDENTS = 25, DOT_R = 8, EXTRA_MONTH = 4;
    const boxX = m => X0 + (m % 6) * (BOX_W + GAP_X);
    const boxY = m => ROW_YS[Math.floor(m / 6)];
    const target = i => {
      if (i === 24) return { x: boxX(EXTRA_MONTH) + BOX_W / 2, y: boxY(EXTRA_MONTH) + 66 };
      const m = i % 12;
      return { x: boxX(m) + (i < 12 ? 30 : 60), y: boxY(m) + 46 };
    };
    const start = i => ({ x: 45 + i * 22.5, y: 296 });
    const arrivalStep = i => (i < 12 ? 1 : (i < 24 ? 2 : 3));

    // ─── Scene ───
    const boxes = MONTHS.map((month, m) => {
      const group = api.box(boxX(m), boxY(m), BOX_W, BOX_H, null);
      api.text(boxX(m) + BOX_W / 2, boxY(m) + 16, month, 'ha-label--small ha-label--center', group);
      return group;
    });
    const marks = MONTHS.map((_, m) => api.text(boxX(m) + BOX_W / 2, boxY(m) - 14, '?', 'ha-label--big ha-label--center'));
    const dots = Array.from({ length: STUDENTS }, (_, i) => api.circle(target(i).x, target(i).y, DOT_R));
    const bottom = api.text(320, 335, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      boxes.forEach((node, m) => api.tone(node, step === 3 && m === EXTRA_MONTH ? 'accent' : null));
      marks.forEach(node => api.visible(node, step === 4));
      dots.forEach((node, i) => {
        const from = start(i), to = target(i);
        if (step >= arrivalStep(i)) api.place(node, 0, 0);
        else api.place(node, from.x - to.x, from.y - to.y);
      });
      const foot = [
        { pl: '25 uczniów, 12 miesięcy', en: '25 students, 12 months' },
        { pl: '12 uczniów w miesiącach', en: '12 students placed' },
        { pl: '24 uczniów: po 2 w każdym', en: '24 students: 2 in each' },
        { pl: '25 > 12 × 2, więc: co najmniej 3', en: '25 > 12 × 2, so: at least 3' },
        { pl: 'Któryś miesiąc ma co najmniej 3 osoby, ale który?', en: 'Some month has at least 3 people, but which?' }
      ][step];
      api.setText(bottom, foot);
    };
  }
});
