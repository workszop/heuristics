/* Scheme 11 – Use bounds to judge how much improvement is possible.
   Home and school: the straight line (8 km) is a lower bound, a street route (10 km) an upper bound, a 9 km route narrows the range. */
HeurAnim.register(11, {
  steps: [
    { pl: 'Jedziesz z domu do szkoły. Jaka jest najkrótsza trasa ulicami?', en: 'You cycle from home to school. What is the shortest route along the streets?' },
    { pl: 'Pomiń regułę o ulicach: w linii prostej jest 8 km. Każda trasa ulicami jest też dozwolona w tej wersji, więc żadna nie jest krótsza.', en: 'Drop the street rule: a straight line is 8 km. Every street route is allowed there too, so none is shorter.' },
    { pl: 'Znajdujesz trasę ulicami na 10 km. Najlepsza ma więc najwyżej 10 km: to granica górna.', en: 'You find a street route of 10 km. So the best one is at most 10 km: an upper bound.' },
    { pl: 'Najlepsza trasa ulicami leży między 8 a 10 km. Dalsze szukanie zaoszczędzi najwyżej 2 km.', en: 'The best street route lies between 8 and 10 km. More searching can save at most 2 km.' },
    { pl: 'Trasa na 9 km: przedział 8–9 km. Trasa na dokładnie 8 km od razu dowiodłaby, że jest najlepsza; inaczej trzeba lepszej granicy dolnej.', en: 'A 9 km route: range 8–9 km. A street route of exactly 8 km would prove itself best at once; otherwise you need a better lower bound.' }
  ],
  build(api) {
    // ─── Layout ───
    const HOME = { x: 80, y: 150 }, SCHOOL = { x: 560, y: 60 };
    const AXIS_Y = 304, AXIS_X0 = 60, PX_PER_KM = 130;
    const kmX = km => AXIS_X0 + (km - 7) * PX_PER_KM;
    const BAND_H = 20;

    // ─── Scene ───
    const question = api.text(320, 130, '?', 'ha-label--big ha-label--center');
    const straight = api.line(HOME.x, HOME.y, SCHOOL.x, SCHOOL.y, 'ha-line--dashed');
    const straightLabel = api.text(160, 100, { pl: 'prosto: 8 km', en: 'straight: 8 km' }, 'ha-label--small');
    const street10 = api.path(`M ${HOME.x} ${HOME.y} L ${HOME.x} 185 L 300 185 L 300 ${SCHOOL.y} L ${SCHOOL.x} ${SCHOOL.y}`, '');
    const street10Label = api.text(314, 185, { pl: 'ulicami: 10 km', en: 'streets: 10 km' }, 'ha-label--small');
    const street9 = api.path(`M ${HOME.x} ${HOME.y} L 380 ${HOME.y} L 380 ${SCHOOL.y} L ${SCHOOL.x} ${SCHOOL.y}`, '');
    const street9Label = api.text(396, 122, { pl: 'ulicami: 9 km', en: 'streets: 9 km' }, 'ha-label--small');
    const home = api.circle(HOME.x, HOME.y, 12, 'is-accent');
    api.text(HOME.x, HOME.y - 26, { pl: 'dom', en: 'home' }, 'ha-label--small ha-label--center');
    const school = api.circle(SCHOOL.x, SCHOOL.y, 12, 'is-accent');
    api.text(SCHOOL.x, SCHOOL.y - 26, { pl: 'szkoła', en: 'school' }, 'ha-label--small ha-label--center');

    const axis = api.group('ha-set');
    api.line(kmX(7), AXIS_Y, kmX(11), AXIS_Y, '', axis);
    [7, 8, 9, 10, 11].forEach(km => api.text(kmX(km), AXIS_Y + 20, String(km), 'ha-label--small ha-label--center', axis));
    api.text(kmX(11) + 20, AXIS_Y + 20, 'km', 'ha-label--small', axis);
    const bandWide = api.el('rect', { x: kmX(8), y: AXIS_Y - BAND_H, width: 2 * PX_PER_KM, height: BAND_H, rx: 4, class: 'ha-area is-accent' });
    const bandNarrow = api.el('rect', { x: kmX(8), y: AXIS_Y - BAND_H, width: PX_PER_KM, height: BAND_H, rx: 4, class: 'ha-area is-accent' });
    const lower = api.group('ha-set');
    api.line(kmX(8), AXIS_Y - 40, kmX(8), AXIS_Y + 6, 'is-info', lower);
    api.text(kmX(8), AXIS_Y - 56, { pl: 'dolna: 8 km', en: 'lower: 8 km' }, 'ha-label--small ha-label--center is-info', lower);
    const upper = api.group('ha-set');
    api.line(kmX(10), AXIS_Y - 40, kmX(10), AXIS_Y + 6, 'is-info', upper);
    const upperLabel = api.text(kmX(10), AXIS_Y - 56, '', 'ha-label--small ha-label--center is-info', upper);
    const rangeLabel = api.text(kmX(9), AXIS_Y - 86, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(question, step === 0);
      api.visible(straight, step >= 1);
      api.tone(straight, step >= 2 ? 'dim' : 'info');
      api.visible(straightLabel, step === 1);
      api.visible(street10, step >= 2);
      api.tone(street10, step === 4 ? 'dim' : null);
      api.visible(street10Label, step >= 2 && step <= 3);
      api.visible(street9, step === 4);
      api.tone(street9, step === 4 ? 'good' : null);
      api.visible(street9Label, step === 4);
      api.visible(axis, step >= 1);
      api.visible(lower, step >= 1);
      api.visible(upper, step >= 2);
      api.place(upper, step === 4 ? -PX_PER_KM : 0, 0);
      api.setText(upperLabel, step === 4 ? { pl: 'górna: 9 km', en: 'upper: 9 km' } : { pl: 'górna: 10 km', en: 'upper: 10 km' });
      api.visible(bandWide, step === 3);
      api.visible(bandNarrow, step === 4);
      api.visible(rangeLabel, step >= 3);
      api.setText(rangeLabel, step === 4 ? { pl: 'najlepsza: 8–9 km', en: 'best: 8–9 km' } : { pl: 'najlepsza: 8–10 km', en: 'best: 8–10 km' });
      api.place(rangeLabel, step === 4 ? -PX_PER_KM / 2 + 0 : 0, 0);
      api.tone(home, null);
      api.tone(school, null);
    };
  }
});
