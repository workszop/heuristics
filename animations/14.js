/* Scheme 14 – Commit in stages while keeping later choices flexible.
   A 4 h hall bar: rich decorations (2.5 h) plus sketched later blocks overflow; going back to simple decorations (1.5 h) makes everything fit. */
HeurAnim.register(14, {
  steps: [
    { pl: 'Hala jest na 4 godziny. Najpierw wybieramy dekoracje: bogaty zestaw zajmie 2,5 godziny.', en: 'The hall is booked for 4 hours. First we pick the decorations: the rich set takes 2.5 hours.' },
    { pl: 'Dalsze etapy tylko szkicujemy: gry 1,5 godziny, sprzątanie 1 godzina. Razem 5 godzin, o godzinę za dużo.', en: 'Later stages are only sketched: games 1.5 hours, cleanup 1 hour. Total 5 hours, one hour too many.' },
    { pl: 'Wracamy do pierwszego wyboru: proste dekoracje zajmą 1,5 godziny. Szkice gier i sprzątania przesuwają się wcześniej.', en: 'Back to the first choice: simple decorations take 1.5 hours. The sketches of games and cleanup slide earlier.' },
    { pl: 'Teraz 1,5 + 1,5 + 1 = 4 godziny: wszystkie etapy mieszczą się dokładnie.', en: 'Now 1.5 + 1.5 + 1 = 4 hours: all stages fit exactly.' }
  ],
  build(api) {
    // ─── Layout ───
    const PX_PER_HOUR = 110;
    const AXIS_X = 50, BLOCK_Y = 120, BLOCK_H = 76, AXIS_Y = 222;
    const LIMIT_X = AXIS_X + 4 * PX_PER_HOUR;
    const xAt = hours => AXIS_X + hours * PX_PER_HOUR;
    const SHIFT = -1 * PX_PER_HOUR;

    // ─── Scene ───
    api.line(AXIS_X, AXIS_Y, xAt(5), AXIS_Y, 'ha-line--thin');
    [0, 1, 2, 3, 4, 5].forEach(hour => {
      api.line(xAt(hour), AXIS_Y - 6, xAt(hour), AXIS_Y + 6, 'ha-line--thin');
      api.text(xAt(hour), AXIS_Y + 24, String(hour), 'ha-label--small ha-label--center');
    });
    api.text(xAt(5) + 6, AXIS_Y + 24, { pl: 'h', en: 'h' }, 'ha-label--small');
    api.line(LIMIT_X, 84, LIMIT_X, AXIS_Y, 'ha-line--dashed ha-line--thin');
    api.text(LIMIT_X, 62, { pl: 'limit: 4 godziny', en: 'limit: 4 hours' }, 'ha-label--small ha-label--center');

    function block(hours, startHours, name, extra) {
      const group = api.box(xAt(startHours), BLOCK_Y, hours * PX_PER_HOUR, BLOCK_H, null, extra);
      const label = api.text(xAt(startHours) + hours * PX_PER_HOUR / 2, BLOCK_Y + BLOCK_H / 2, name, 'ha-label--small ha-label--center', group);
      return { group, label };
    }
    const richDecor = block(2.5, 0, { pl: 'bogate dekoracje\n2,5 h', en: 'rich decorations\n2.5 h' });
    const simpleDecor = block(1.5, 0, { pl: 'proste dekoracje\n1,5 h', en: 'simple decorations\n1.5 h' });
    const gamesGhost = block(1.5, 2.5, { pl: 'gry\n1,5 h', en: 'games\n1.5 h' }, 'ha-box--ghost');
    const cleanGhost = block(1, 4, { pl: 'sprzątanie\n1 h', en: 'cleanup\n1 h' }, 'ha-box--ghost');
    const gamesSolid = block(1.5, 1.5, { pl: 'gry\n1,5 h', en: 'games\n1.5 h' });
    const cleanSolid = block(1, 3, { pl: 'sprzątanie\n1 h', en: 'cleanup\n1 h' });
    const sum = api.text(320, 322, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(richDecor.group, step <= 1);
      api.tone(richDecor.group, step === 0 ? 'accent' : null);
      api.visible(simpleDecor.group, step >= 2);
      api.tone(simpleDecor.group, step === 2 ? 'accent' : (step === 3 ? 'good' : null));
      const slide = step >= 2 ? SHIFT : 0;
      api.visible(gamesGhost.group, step === 1 || step === 2);
      api.visible(cleanGhost.group, step === 1 || step === 2);
      api.place(gamesGhost.group, slide, 0);
      api.place(cleanGhost.group, slide, 0);
      api.tone(cleanGhost.group, step === 1 ? 'bad' : null);
      api.visible(gamesSolid.group, step === 3);
      api.visible(cleanSolid.group, step === 3);
      api.tone(gamesSolid.group, step === 3 ? 'good' : null);
      api.tone(cleanSolid.group, step === 3 ? 'good' : null);
      const foot = [null,
        { pl: '2,5 + 1,5 + 1 = 5 h > 4 h', en: '2.5 + 1.5 + 1 = 5 h > 4 h' },
        null,
        { pl: '1,5 + 1,5 + 1 = 4 h', en: '1.5 + 1.5 + 1 = 4 h' }][step];
      api.visible(sum, Boolean(foot));
      api.setText(sum, foot || '');
      api.tone(sum, step === 1 ? 'bad' : (step === 3 ? 'good' : null));
    };
  }
});
