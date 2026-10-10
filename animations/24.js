/* Scheme 24 – Test the opposite and search for a counterexample.
   Claim 1 is rejected by one counterexample (15); claim 2 is confirmed by contradiction (a largest whole number N would be smaller than N + 1). */
HeurAnim.register(24, {
  steps: [
    { pl: 'Twierdzenie: „Każda liczba kończąca się na 5 jest pierwsza”. Spróbuj je podważyć.', en: 'Claim: “Every number ending in 5 is prime.” Try to break it.' },
    { pl: 'Przykład 5 pasuje, ale jeden przykład niczego nie dowodzi.', en: 'The example 5 fits, but one example proves nothing.' },
    { pl: 'Kontrprzykład: 15 kończy się na 5, ale 15 = 3 × 5. Jeden taki przypadek obala twierdzenie.', en: 'Counterexample: 15 ends in 5, but 15 = 3 × 5. One such case rejects the claim.' },
    { pl: 'Inne twierdzenie: „Nie istnieje największa liczba całkowita”. Załóż jego przeciwieństwo.', en: 'Another claim: “There is no largest whole number.” Assume its opposite.' },
    { pl: 'Skutek jest niemożliwy: N byłoby największe i nie największe naraz. Przeciwieństwo odpada.', en: 'The result is impossible: N would be the largest and not the largest at once. The opposite fails.' }
  ],
  build(api) {
    // ─── Layout ───
    const CARD_X = 60, CARD_Y = 28, CARD_W = 520, CARD_H = 60;
    const TILE_W = 120, TILE_H = 60, TILE_Y = 140;
    const CHAIN_X = 90, CHAIN_W = 460, CHAIN_H = 46, CHAIN_YS = [120, 182, 244];

    // ─── Scene ───
    const claimOne = api.box(CARD_X, CARD_Y, CARD_W, CARD_H, { pl: 'Każda liczba kończąca się na 5 jest pierwsza', en: 'Every number ending in 5 is prime' }, 'ha-node');
    const claimTwo = api.box(CARD_X, CARD_Y, CARD_W, CARD_H, { pl: 'Nie istnieje największa liczba całkowita', en: 'There is no largest whole number' }, 'ha-node');
    const strike = api.line(CARD_X + 20, CARD_Y + CARD_H / 2, CARD_X + CARD_W - 20, CARD_Y + CARD_H / 2);
    const tileFive = api.box(180, TILE_Y, TILE_W, TILE_H, '5', 'ha-node');
    const tileFifteen = api.box(340, TILE_Y, TILE_W, TILE_H, '15 = 3 × 5', 'ha-node');
    const tileNote = api.text(320, 250, '', 'ha-label--center');
    const chain = [
      api.box(CHAIN_X, CHAIN_YS[0], CHAIN_W, CHAIN_H, { pl: 'Załóż: istnieje największa liczba całkowita N', en: 'Assume: there is a largest whole number N' }, 'ha-node'),
      api.box(CHAIN_X, CHAIN_YS[1], CHAIN_W, CHAIN_H, { pl: 'Ale N + 1 też jest liczbą całkowitą, większą od N', en: 'But N + 1 is also a whole number, larger than N' }, 'ha-node'),
      api.box(CHAIN_X, CHAIN_YS[2], CHAIN_W, CHAIN_H, { pl: 'Największa i nie największa naraz: niemożliwe', en: 'Largest and not largest at once: impossible' }, 'ha-node')
    ];
    const bottom = api.text(320, 330, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(claimOne, step <= 2);
      api.tone(claimOne, step === 2 ? 'bad' : null);
      api.visible(strike, step === 2);
      api.tone(strike, 'bad');
      api.visible(claimTwo, step >= 3);
      api.tone(claimTwo, step === 4 ? 'good' : null);
      api.visible(tileFive, api.between(step, 1, 2));
      api.tone(tileFive, step === 1 ? 'info' : 'dim');
      api.visible(tileFifteen, step === 2);
      api.tone(tileFifteen, 'bad');
      const note = [null, { pl: 'pasuje, ale to za mało', en: 'fits, but that is not enough' }, { pl: 'spełnia założenie, łamie wniosek', en: 'meets the condition, breaks the conclusion' }, null, null][step];
      api.visible(tileNote, Boolean(note));
      api.setText(tileNote, note || '');
      chain.forEach((node, i) => {
        api.visible(node, step >= 3 && (i < 2 || step === 4));
        api.tone(node, i === 2 && step === 4 ? 'good' : null);
      });
      const foot = [null, null, { pl: 'jeden kontrprzykład wystarcza', en: 'one counterexample is enough' }, null, { pl: 'twierdzenie zostaje', en: 'the claim stays' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
      api.tone(bottom, step === 2 ? 'bad' : (step === 4 ? 'good' : null));
    };
  }
});
