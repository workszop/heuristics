/* Scheme 5 – Improve a workable solution and escape dead ends.
   A score landscape with two hills: a swap climbs the lower one, neighbours are worse (local optimum), a restart reaches the higher hill. */
HeurAnim.register(5, {
  steps: [
    { pl: 'Plan startowy: matematyka, fizyka, historia, biologia, geografia. Pasuje tylko biologia, wynik 1 z 3.', en: 'Starting plan: Maths, Physics, History, Biology, Geography. Only Biology fits, score 1 out of 3.' },
    { pl: 'Zamiana poniedziałku i wtorku: matematyka jest dzień przed sprawdzianem. Wynik 2.', en: 'Swapping Monday and Tuesday puts Maths the day before its test. Score 2.' },
    { pl: 'Każda zamiana sąsiednich wieczorów daje tylko 1. To lokalne optimum: w pobliżu nie ma nic lepszego.', en: 'Every swap of neighbouring evenings gives only 1. A local optimum: nothing nearby is better.' },
    { pl: 'Zapisujemy ten plan jako najlepszy dotąd (wynik 2). Dalsze drobne zamiany nie pomogą.', en: 'We save this plan as the best so far (score 2). More small swaps will not help.' },
    { pl: 'Restart od innej kolejności: historia, geografia, matematyka, fizyka, biologia. Wynik 0, ale inne wzgórze.', en: 'Restart from another order: History, Geography, Maths, Physics, Biology. Score 0, but another hill.' },
    { pl: 'Trzy zamiany dają wynik 3. To więcej niż zapisane 2 i maksimum, bo sprawdziany są tylko trzy.', en: 'Three swaps reach score 3. That beats the saved 2 and is the maximum, since there are only three tests.' }
  ],
  build(api) {
    // ─── Layout ───
    const PEAK_LEFT = [190, 154];
    const START = [120, 227];
    const NEIGHBOUR_R = [259, 225];
    const FOOT = [327, 294];
    const CLIMB = [[369, 222], [393, 156], [450, 80]];

    // ─── Scene ───
    const axis = api.line(40, 300, 610, 300, 'ha-line--thin');
    const yLabel = api.text(40, 24, { pl: 'wynik planu (0 do 3)', en: 'plan score (0 to 3)' }, 'ha-label--small');
    const xLabel = api.text(610, 326, { pl: 'kolejne warianty planu', en: 'plan variants' }, 'ha-label--small ha-label--end');
    const leftHill = api.path('M 50 300 C 110 300 130 154 190 154 C 250 154 270 296 320 296', '');
    const rightHill = api.path('M 320 296 C 370 296 390 80 450 80 C 510 80 540 300 600 300', '');
    const saved = api.circle(PEAK_LEFT[0], PEAK_LEFT[1], 11, 'ha-dot--hollow is-info');
    const savedLabel = api.text(PEAK_LEFT[0], 100, { pl: 'zapisane: 2', en: 'saved: 2' }, 'ha-label--small ha-label--center is-info');
    const neighbours = [START, NEIGHBOUR_R].map(point => api.circle(point[0], point[1], 8, 'is-bad'));
    const neighbourLabel = api.text(205, 270, { pl: 'sąsiedzi:\ntylko 1', en: 'neighbours:\nonly 1' }, 'ha-label--small ha-label--center is-bad');
    const trail = CLIMB.slice(0, 2).map(point => api.circle(point[0], point[1], 5, 'is-dim'));
    const dot = api.circle(0, 0, 11, 'is-accent');
    const scoreLabel = api.text(0, 0, '', 'ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(rightHill, step >= 4);
      const positions = [START, PEAK_LEFT, PEAK_LEFT, PEAK_LEFT, FOOT, CLIMB[2]];
      const scores = ['1', '2', '2', '2', '0', '3'];
      const point = positions[step];
      api.place(dot, point[0], point[1]);
      api.tone(dot, step === 5 ? 'good' : 'accent');
      api.visible(saved, step >= 3);
      api.visible(savedLabel, step >= 3 && step <= 4);
      neighbours.forEach(node => api.visible(node, step === 2));
      api.visible(neighbourLabel, step === 2);
      trail.forEach(node => api.visible(node, step === 5));
      api.visible(scoreLabel, true);
      const labelAt = step === 0 ? [point[0] + 24, point[1] + 22] : (step === 4 ? [point[0] - 12, 322] : [point[0] + 18, point[1] - 22]);
      api.place(scoreLabel, labelAt[0], labelAt[1]);
      api.setText(scoreLabel, { pl: 'wynik ' + scores[step], en: 'score ' + scores[step] });
      api.tone(scoreLabel, step === 5 ? 'good' : null);
    };
  }
});
