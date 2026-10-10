/* Scheme 8 – Check whether a mental shortcut is misleading you.
   Two vivid late buses push the gauge to 50%; ten recorded trips (2 late) move it to 20% and add an uncertainty band. */
HeurAnim.register(8, {
  steps: [
    { pl: 'Dwa spóźnione autobusy z rzędu. Pierwsze wrażenie: połowa następnych kursów też się spóźni, czyli 50%.', en: 'Two late buses in a row. First impression: half of the next trips will be late too, so 50%.' },
    { pl: 'Dwa irytujące spóźnienia łatwo sobie przypomnieć. To dostępność: wrażenie rośnie, choć danych jest mało.', en: 'Two annoying delays are easy to recall. That is availability: the feeling grows even though the data is thin.' },
    { pl: 'Druga droga: notatki z ostatnich 10 kursów. Spóźnione były tylko 2, te same, które pamiętasz.', en: 'Second route: notes on the last 10 trips. Only 2 were late, the same two you remember.' },
    { pl: '2 z 10 to 20%. Ta liczba pasuje do danych lepiej niż 50%, więc wskaźnik się przesuwa.', en: '2 of 10 is 20%. That fits the data better than 50%, so the gauge moves.' },
    { pl: 'To mała próba, a deszcz mógłby coś zmienić: zostaje pasmo niepewności, nie pewna liczba.', en: 'It is a small sample and rain could change things: a band of uncertainty remains, not a sure number.' }
  ],
  build(api) {
    // ─── Layout ───
    const GAUGE_X = 40, GAUGE_W = 560, GAUGE_Y = 58, GAUGE_H = 28;
    const PX_PER_PERCENT = GAUGE_W / 100;
    const xAt = percent => GAUGE_X + percent * PX_PER_PERCENT;
    const MARK_Y = GAUGE_Y + GAUGE_H / 2;
    const BUS_Y = 128, BUS_W = 150, BUS_H = 56;
    const TRIP_X = 44, TRIP_W = 48, TRIP_GAP = 8, TRIP_Y = 250, TRIP_H = 44;
    const LATE = [8, 9];

    // ─── Scene ───
    api.box(GAUGE_X, GAUGE_Y, GAUGE_W, GAUGE_H, null, 'ha-box--ghost');
    [0, 50, 100].forEach(p => api.text(xAt(p), 108, p + '%', 'ha-label--small ha-label--center'));
    const band = api.el('rect', { x: xAt(10), y: GAUGE_Y, width: xAt(35) - xAt(10), height: GAUGE_H, rx: 10, class: 'ha-area is-info' });
    const marker = api.group('ha-set');
    const markerDot = api.circle(xAt(50), MARK_Y, 13, '', marker);
    const markerLabel = api.text(xAt(50), 30, '', 'ha-label--center ha-label--strong', marker);
    const buses = [xAt(50) - 190, xAt(50) + 40].map(x => api.box(x, BUS_Y, BUS_W, BUS_H, { pl: 'spóźniony\nautobus', en: 'late\nbus' }, 'is-bad'));
    const recall = api.text(320, 214, { pl: 'łatwo je sobie przypomnieć = dostępność', en: 'easy to recall = availability' }, 'ha-label--small ha-label--center');
    const tripsTitle = api.text(44, 228, { pl: 'ostatnie 10 kursów', en: 'last 10 trips' }, 'ha-label--small');
    const trips = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => api.box(TRIP_X + i * (TRIP_W + TRIP_GAP), TRIP_Y, TRIP_W, TRIP_H, null, LATE.includes(i) ? 'is-bad' : 'is-good'));
    const bottom = api.text(320, 328, '', 'ha-label--center ha-label--strong');

    const MARK_TEXT = [
      { pl: 'wrażenie: 50%', en: 'impression: 50%' },
      { pl: 'wrażenie: 50%', en: 'impression: 50%' },
      { pl: 'wrażenie: 50%', en: 'impression: 50%' },
      { pl: 'dane: 20%', en: 'data: 20%' },
      { pl: 'dane: ok. 20%', en: 'data: about 20%' }
    ];
    const BOTTOM = [
      null,
      null,
      { pl: '2 spóźnione, 8 punktualnych', en: '2 late, 8 on time' },
      { pl: '2 z 10 = 20%', en: '2 of 10 = 20%' },
      { pl: 'niepewność: mała próba, pogoda (np. 10–35%)', en: 'uncertainty: small sample, weather (e.g. 10–35%)' }
    ];

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.place(marker, step >= 3 ? xAt(20) - xAt(50) : 0, 0);
      api.setText(markerLabel, MARK_TEXT[step]);
      api.tone(markerDot, step >= 3 ? 'good' : (step <= 1 ? 'bad' : null));
      buses.forEach(node => {
        api.visible(node, step <= 2);
        api.tone(node, step === 2 ? 'dim' : 'bad');
      });
      api.visible(recall, step === 1);
      api.visible(tripsTitle, step >= 2);
      trips.forEach(node => api.visible(node, step >= 2));
      api.visible(band, step === 4);
      const note = BOTTOM[step];
      api.visible(bottom, Boolean(note));
      api.setText(bottom, note || '');
    };
  }
});
