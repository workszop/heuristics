/* Scheme 10 – Allow fractions first, then restore whole choices.
   A 6 h capacity bar, booths drawn proportional to their time; the fractional plan sets a ceiling, rounding overflows, whole choices win. */
HeurAnim.register(10, {
  steps: [
    { pl: '6 godzin, trzy stoiska. Każde robisz w całości albo wcale, a celem jest jak najwięcej punktów.', en: '6 hours, three booths. Each is built whole or not at all, and the goal is as many points as possible.' },
    { pl: 'Na próbę udaj, że stoiska można dzielić. Bierz to, co daje najwięcej punktów za godzinę: całe A i 2/3 B to 12 punktów.', en: 'Pretend booths can be split. Take what pays most per hour: all of A and 2/3 of B make 12 points.' },
    { pl: 'Pół stoiska nie istnieje. Całe B oznacza razem 7 godzin, a limit to 6: plan się nie mieści.', en: 'There is no half booth. A whole B makes 7 hours in total, but the limit is 6: the plan does not fit.' },
    { pl: 'Wróć do całych stoisk. A + C mieści się w 6 godzinach i daje 11 punktów.', en: 'Back to whole booths. A + C fits in 6 hours and earns 11 points.' },
    { pl: 'Sufit z ułamków to 12 punktów, najlepszy prawdziwy plan ma 11: do sufitu brakuje najwyżej 1.', en: 'The fraction ceiling is 12 points and the best real plan has 11: at most 1 point short of the ceiling.' }
  ],
  build(api) {
    // ─── Layout ───
    const PX_PER_HOUR = 80;
    const BAR_X = 40, BAR_Y = 44, BAR_H = 40;
    const LIMIT_X = BAR_X + 6 * PX_PER_HOUR;
    const ROW_X = 40, ROW_H = 56, ROW_YS = [120, 184, 248];
    const HOURS = [4, 3, 2];
    const NAMES = ['A', 'B', 'C'];
    const POINTS = [8, 6, 3];
    const PER_HOUR = [{ pl: '2 pkt za godz.', en: '2 pts per hour' }, { pl: '2 pkt za godz.', en: '2 pts per hour' }, { pl: '1,5 pkt za godz.', en: '1.5 pts per hour' }];
    const aWidth = 4 * PX_PER_HOUR;

    // ─── Scene ───
    const track = api.box(BAR_X, BAR_Y, 6 * PX_PER_HOUR, BAR_H, null, 'ha-box--ghost');
    const limitLine = api.line(LIMIT_X, 34, LIMIT_X, 94, 'ha-line--dashed ha-line--thin');
    const limitLabel = api.text(LIMIT_X, 20, { pl: 'limit 6 h', en: 'limit 6 h' }, 'ha-label--small ha-label--center');
    const segA = api.box(BAR_X, BAR_Y, aWidth, BAR_H, 'A');
    const segB2 = api.box(BAR_X + aWidth, BAR_Y, 2 * PX_PER_HOUR, BAR_H, '2/3 B');
    const segBFull = api.box(BAR_X + aWidth, BAR_Y, 3 * PX_PER_HOUR, BAR_H, 'B');
    const segC = api.box(BAR_X + aWidth, BAR_Y, 2 * PX_PER_HOUR, BAR_H, 'C');
    const sideLabel = api.text(630, 104, '', 'ha-label--small ha-label--end');

    const rows = HOURS.map((hours, i) => {
      const group = api.box(ROW_X, ROW_YS[i], hours * PX_PER_HOUR, ROW_H, null);
      if (i === 1) api.el('rect', { x: ROW_X, y: ROW_YS[i], width: 2 * PX_PER_HOUR, height: ROW_H, rx: 10, class: 'ha-area is-accent' }, group);
      api.text(ROW_X + hours * PX_PER_HOUR / 2, ROW_YS[i] + ROW_H / 2,
        { pl: 'Stoisko ' + NAMES[i] + '\n' + hours + ' h · ' + POINTS[i] + ' pkt', en: 'Booth ' + NAMES[i] + '\n' + hours + ' h · ' + POINTS[i] + ' pts' }, 'ha-label--center', group);
      return group;
    });
    const fillArea = rows[1].querySelector('.ha-area');
    const perHour = HOURS.map((hours, i) => api.text(ROW_X + hours * PX_PER_HOUR + 20, ROW_YS[i] + ROW_H / 2, PER_HOUR[i], 'ha-label--small'));
    const bottom = api.text(320, 334, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(segA, step >= 1);
      api.visible(segB2, step === 1);
      api.visible(segBFull, step === 2);
      api.visible(segC, step >= 3);
      api.tone(segA, step >= 3 ? 'good' : null);
      api.tone(segB2, step === 1 ? 'accent' : null);
      api.tone(segBFull, step === 2 ? 'bad' : null);
      api.tone(segC, step >= 3 ? 'good' : null);
      api.visible(fillArea, step === 1);
      rows.forEach((node, i) => {
        let name = null;
        if (step >= 3) name = i === 1 ? 'dim' : 'good';
        api.tone(node, name);
      });
      perHour.forEach(node => api.visible(node, step === 1));
      const side = [null, { pl: 'sufit: 12 pkt', en: 'ceiling: 12 pts' }, { pl: '7 h: za dużo', en: '7 h: too much' }, { pl: 'A + C: 11 pkt', en: 'A + C: 11 pts' }, { pl: 'A + C: 11 pkt', en: 'A + C: 11 pts' }][step];
      api.visible(sideLabel, Boolean(side));
      api.setText(sideLabel, side || '');
      api.tone(sideLabel, step === 2 ? 'bad' : (step >= 3 ? 'good' : null));
      const foot = [{ pl: 'Całe stoisko albo nic', en: 'A whole booth or nothing' }, null, null, null, { pl: '11 z 12: tracimy najwyżej 1 pkt', en: '11 of 12: we lose at most 1 point' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
    };
  }
});
