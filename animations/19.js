/* Scheme 19 – Check units and extreme cases.
   Distance and time blocks, a reversed division exposed by its unit, the correct speed, boundary tests and the forbidden zero. */
HeurAnim.register(19, {
  steps: [
    { pl: 'Rowerzysta przejechał 18 km w 1,5 godziny. Szukamy prędkości.', en: 'A cyclist rode 18 km in 1.5 hours. We want the speed.' },
    { pl: 'Pomyłka: 1,5 ÷ 18 ≈ 0,083. Jednostka to godziny na kilometr, nie prędkość, więc dzielenie jest odwrócone.', en: 'A mistake: 1.5 ÷ 18 ≈ 0.083. The unit is hours per kilometre, not speed, so the division is reversed.' },
    { pl: 'Poprawnie: 18 km ÷ 1,5 h = 12 km/h. Jednostka zgadza się z tym, czego szukamy.', en: 'Correct: 18 km ÷ 1.5 h = 12 km/h. The unit matches what we are looking for.' },
    { pl: 'Przypadki skrajne: 0 km daje 0 km/h, a dwa razy dalej (36 km) daje dwa razy szybciej: 24 km/h.', en: 'Extreme cases: 0 km gives 0 km/h, and twice as far (36 km) gives twice as fast: 24 km/h.' },
    { pl: 'Zero godzin odpada: przez zero nie można dzielić, więc takich danych nie wstawiamy.', en: 'Zero hours is ruled out: you cannot divide by zero, so we do not feed in such data.' }
  ],
  build(api) {
    // ─── Scene ───
    const distance = api.box(70, 24, 230, 76, { pl: 'Odległość\n18 km', en: 'Distance\n18 km' });
    const time = api.box(340, 24, 230, 76, { pl: 'Czas\n1,5 h', en: 'Time\n1.5 h' });
    const result = api.box(70, 130, 500, 86, null);
    const resultText = api.text(320, 173, '', 'ha-label--center ha-label--strong', result);
    const zero = api.box(40, 244, 270, 76, { pl: '0 km → 0 km/h', en: '0 km → 0 km/h' });
    const twice = api.box(330, 244, 270, 76, { pl: '36 km → 24 km/h\ndwa razy szybciej', en: '36 km → 24 km/h\ntwice as fast' });

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.tone(distance, step === 0 ? 'accent' : null);
      api.tone(time, step === 0 ? 'accent' : null);
      const text = [
        { pl: 'prędkość = odległość ÷ czas', en: 'speed = distance ÷ time' },
        { pl: '1,5 h ÷ 18 km = 0,083 h/km\nto nie jest prędkość', en: '1.5 h ÷ 18 km = 0.083 h/km\nthis is not a speed' },
        { pl: '18 km ÷ 1,5 h = 12 km/h', en: '18 km ÷ 1.5 h = 12 km/h' },
        { pl: '18 km ÷ 1,5 h = 12 km/h', en: '18 km ÷ 1.5 h = 12 km/h' },
        { pl: '÷ 0 h: nie wolno dzielić przez zero', en: '÷ 0 h: you cannot divide by zero' }
      ][step];
      api.setText(resultText, text);
      api.tone(result, step === 1 || step === 4 ? 'bad' : (step >= 2 ? 'good' : null));
      api.visible(zero, step >= 3);
      api.visible(twice, step >= 3);
      api.tone(zero, step === 4 ? 'dim' : null);
      api.tone(twice, step === 4 ? 'dim' : null);
    };
  }
});
