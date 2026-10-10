/* Scheme 6 – Estimate the scale before calculating precisely.
   A logarithmic axis 10 – 100 – 1000 euros: target 100, rough estimate 120, range 80 to 160, and a 1200 result that is clearly off. */
HeurAnim.register(6, {
  steps: [
    { pl: 'Klasa chce zebrać 100 euro ze sprzedaży przekąsek. Cel leży na osi w rzędach wielkości: 10, 100, 1000.', en: 'The class wants to raise 100 euros selling snacks. The target sits on a scale of orders of magnitude: 10, 100, 1000.' },
    { pl: 'Zgrubne oszacowanie: 20 uczniów × 3 przekąski × 2 euro = 120 euro.', en: 'Rough estimate: 20 students × 3 snacks × 2 euros = 120 euros.' },
    { pl: 'Niepewne dane zmieniamy: po 2 przekąski daje 80 euro, po 4 daje 160 euro. Zakres to 80 do 160.', en: 'Uncertain inputs vary: 2 snacks each gives 80 euros, 4 gives 160. The range is 80 to 160.' },
    { pl: 'Cel 100 euro leży w zakresie, więc jest realny. Koszty i niesprzedane przekąski trzeba jeszcze sprawdzić.', en: 'The 100-euro target lies inside the range, so it is realistic. Costs and unsold snacks still need checking.' },
    { pl: 'Dokładny rachunek, który dałby 1200 euro, leży daleko od zakresu. Zbędne zero widać od razu.', en: 'An exact calculation giving 1200 euros lies far from the range. The extra zero shows at once.' }
  ],
  build(api) {
    // ─── Layout ───
    const AXIS_Y = 200, X_MIN = 60, X_MAX = 580;
    const xOf = value => X_MIN + (X_MAX - X_MIN) * (Math.log10(value) - 1) / 2;

    // ─── Scene ───
    const axis = api.line(X_MIN, AXIS_Y, X_MAX + 30, AXIS_Y, '');
    const ticks = [10, 100, 1000].map(value => {
      api.line(xOf(value), AXIS_Y - 8, xOf(value), AXIS_Y + 8, 'ha-line--thin');
      return api.text(xOf(value), AXIS_Y + 30, { pl: value + ' €', en: value + ' €' }, 'ha-label--small ha-label--center');
    });
    const logNote = api.text(320, 290, { pl: 'każda kreska to 10 razy więcej', en: 'each mark is 10 times more' }, 'ha-label--small ha-label--center');
    const targetLine = api.line(xOf(100), 128, xOf(100), AXIS_Y, 'ha-line--dashed ha-line--thin');
    const targetLabel = api.text(xOf(100), 112, { pl: 'cel 100 €', en: 'target 100 €' }, 'ha-label--center ha-label--strong');
    const rangeBar = api.el('rect', { x: xOf(80), y: AXIS_Y - 10, width: xOf(160) - xOf(80), height: 20, rx: 6, class: 'ha-area is-info' });
    const rangeLow = api.text(xOf(80), 262, { pl: '80 €', en: '80 €' }, 'ha-label--small ha-label--center');
    const rangeHigh = api.text(xOf(160), 262, { pl: '160 €', en: '160 €' }, 'ha-label--small ha-label--center');
    const estimate = api.circle(xOf(120), AXIS_Y, 9, 'is-accent');
    const estimateLabel = api.text(xOf(120) + 20, 164, { pl: '20 × 3 × 2 = 120 €', en: '20 × 3 × 2 = 120 €' });
    const far = api.circle(xOf(1200), AXIS_Y, 9, 'is-bad');
    const farLabel = api.text(xOf(1200), 164, { pl: '1200 €', en: '1200 €' }, 'ha-label--center is-bad');
    const bottom = api.text(320, 322, '', 'ha-label--center');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(estimate, step >= 1);
      api.visible(estimateLabel, step === 1);
      api.visible(rangeBar, step >= 2);
      api.visible(rangeLow, step >= 2);
      api.visible(rangeHigh, step >= 2);
      api.tone(targetLabel, step === 3 ? 'good' : null);
      api.tone(targetLine, step === 3 ? 'good' : null);
      api.visible(far, step === 4);
      api.visible(farLabel, step === 4);
      const foot = [null, null, null,
        { pl: '100 € mieści się w zakresie: cel realny', en: '100 € fits inside the range: a realistic goal' },
        { pl: 'Daleko od zakresu: wkradło się zero', en: 'Far outside the range: a zero slipped in' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
      api.tone(bottom, step === 3 ? 'good' : (step === 4 ? 'bad' : null));
    };
  }
});
