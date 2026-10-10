/* Scheme 21 – Compare choices through outcomes and trade-offs.
   Decision tree: plan A with 75% / 25% outcomes and an average of 75, plan B with an unknown chance, and the worst outcome of A highlighted. */
HeurAnim.register(21, {
  steps: [
    { pl: 'Rita wybiera sposób nauki: plan A zajmuje 2 godziny, plan B jedną.', en: 'Rita chooses how to study: plan A takes 2 hours, plan B takes one.' },
    { pl: 'Z czterech podobnych kartkówek szacuje dla planu A: 75% na 80 punktów i 25% na 60.', en: 'From four similar quizzes she estimates for plan A: 75% for 80 points and 25% for 60.' },
    { pl: 'Wynik oczekiwany planu A to średnia z wielu powtórzeń: 0,75 × 80 + 0,25 × 60 = 75 punktów.', en: 'The expected score of plan A is the average over many repeats: 0.75 × 80 + 0.25 × 60 = 75 points.' },
    { pl: 'Dla planu B nie ma danych: szansa jest nieznana, a nie równa 50%. Średniej z wymyślonej liczby nie liczymy.', en: 'Plan B has no data: its chance is unknown, not 50%. We do not average an invented number.' },
    { pl: 'Średnia 75 nie wystarczy, jeśli 60 punktów to za mało. Najgorszy wynik też trzeba ocenić.', en: 'An average of 75 is not enough if 60 points is too low. The worst outcome must be judged too.' }
  ],
  build(api) {
    // ─── Scene ───
    const root = api.box(14, 142, 92, 56, { pl: 'Wybór', en: 'Choice' });
    const planA = api.box(150, 56, 130, 60, { pl: 'Plan A\n2 godz.', en: 'Plan A\n2 hours' });
    const planB = api.box(150, 224, 130, 60, { pl: 'Plan B\n1 godz.', en: 'Plan B\n1 hour' });
    const toA = api.line(106, 165, 150, 90);
    const toB = api.line(106, 175, 150, 254);
    const high = api.box(330, 28, 150, 46, { pl: '75%: 80 pkt', en: '75%: 80 pts' });
    const low = api.box(330, 98, 150, 46, { pl: '25%: 60 pkt', en: '25%: 60 pts' });
    const toHigh = api.line(280, 80, 330, 51);
    const toLow = api.line(280, 92, 330, 121);
    const average = api.box(510, 50, 116, 70, { pl: 'średnia\n75 pkt', en: 'average\n75 pts' });
    const toAverage = api.line(480, 74, 510, 85);
    const unknown = api.box(330, 224, 150, 60, '?', 'ha-box--ghost');
    const guess = api.text(560, 254, '50%', 'ha-label--center');
    const strike = api.line(530, 254, 590, 254, 'ha-line--thin');
    const bottom = api.text(320, 328, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.tone(root, step === 0 ? 'accent' : null);
      [high, low, toHigh, toLow].forEach(node => api.visible(node, step >= 1));
      [average, toAverage].forEach(node => api.visible(node, step >= 2));
      api.tone(average, step === 2 ? 'accent' : null);
      [unknown, guess, strike].forEach(node => api.visible(node, step >= 3));
      api.tone(guess, step >= 3 ? 'bad' : null);
      api.tone(strike, step >= 3 ? 'bad' : null);
      api.tone(low, step === 4 ? 'accent' : null);
      const foot = [null, null,
        { pl: '0,75 × 80 + 0,25 × 60 = 75', en: '0.75 × 80 + 0.25 × 60 = 75' },
        { pl: 'nieznana szansa to nie 50%', en: 'an unknown chance is not 50%' },
        { pl: 'najgorszy wynik planu A: 60 pkt', en: 'worst outcome of plan A: 60 pts' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
    };
  }
});
