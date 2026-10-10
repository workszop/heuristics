/* Scheme 12 – Put an explicit cost on a trade-off.
   Two plans pass the hard-rule gate; penalty tokens (3 vs 5) decide, and a cheaper absence (2) flips the winner. */
HeurAnim.register(12, {
  steps: [
    { pl: 'Plany A i B spełniają twarde zasady: sala jest zarezerwowana, nagranie wyślą w piątek. Różnią się tylko miękkimi życzeniami.', en: 'Plans A and B meet the hard rules: the room is booked and the recording goes out on Friday. They differ only in soft wishes.' },
    { pl: 'Plan A czeka na wszystkich i kończy się o 18:45, czyli 45 minut po planie. To 3 razy po 15 minut: 3 punkty karne.', en: 'Plan A waits for everyone and ends at 18:45, 45 minutes late. That is 3 times 15 minutes: 3 penalty points.' },
    { pl: 'Plan B kończy się o 18:00, ale bez jednej osoby. Jedna nieobecność kosztuje 5 punktów karnych.', en: 'Plan B ends at 18:00 but without one member. One absence costs 5 penalty points.' },
    { pl: 'Plan A ma mniej punktów karnych (3 do 5), więc wygrywa.', en: 'Plan A has fewer penalty points (3 to 5), so it wins.' },
    { pl: 'Gdyby nieobecność kosztowała tylko 2 punkty, wygrałby B (2 do 3). Dlatego ceny trzeba podawać otwarcie.', en: 'If an absence cost only 2 points, B would win (2 to 3). That is why prices must be stated openly.' }
  ],
  build(api) {
    // ─── Layout ───
    const CARD_W = 270, CARD_H = 100, CARD_Y = 88;
    const CARD_X = [40, 330];
    const DOT_Y = 226, DOT_R = 12, DOT_GAP = 40, DOT_PAD = 30;
    const COUNT_A = 3, COUNT_B = 5, COUNT_B_CHEAP = 2;

    // ─── Scene ───
    const gate = api.box(40, 20, 560, 46, { pl: 'Twarde zasady: sala + nagranie w piątek', en: 'Hard rules: room + Friday upload' });
    const cardA = api.box(CARD_X[0], CARD_Y, CARD_W, CARD_H, { pl: 'Plan A\nczeka na wszystkich\nkoniec 18:45', en: 'Plan A\nwaits for everyone\nends 18:45' });
    const cardB = api.box(CARD_X[1], CARD_Y, CARD_W, CARD_H, { pl: 'Plan B\nbez jednej osoby\nkoniec 18:00', en: 'Plan B\nwithout one member\nends 18:00' });
    const dotsA = Array.from({ length: COUNT_A }, (_, i) => api.circle(CARD_X[0] + DOT_PAD + i * DOT_GAP, DOT_Y, DOT_R));
    const dotsB = Array.from({ length: COUNT_B }, (_, i) => api.circle(CARD_X[1] + DOT_PAD + i * DOT_GAP, DOT_Y, DOT_R));
    const sumA = api.text(CARD_X[0] + CARD_W / 2, 270, { pl: '45 min = 3 × 15 min → 3 pkt karne', en: '45 min = 3 × 15 min → 3 penalty pts' }, 'ha-label--small ha-label--center');
    const sumB = api.text(CARD_X[1] + CARD_W / 2, 270, '', 'ha-label--small ha-label--center');
    const bottom = api.text(320, 322, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.tone(gate, step === 0 ? 'good' : null);
      api.tone(cardA, step === 1 ? 'accent' : (step === 3 ? 'good' : (step === 4 ? 'dim' : null)));
      api.tone(cardB, step === 2 ? 'accent' : (step === 3 ? 'dim' : (step === 4 ? 'good' : null)));
      dotsA.forEach(node => api.visible(node, step >= 1));
      const countB = step === 4 ? COUNT_B_CHEAP : COUNT_B;
      dotsB.forEach((node, i) => api.visible(node, step >= 2 && i < countB));
      api.visible(sumA, step >= 1);
      api.visible(sumB, step >= 2);
      api.setText(sumB, step === 4
        ? { pl: 'brak 1 osoby × 2 = 2 pkt karne', en: 'missing 1 member × 2 = 2 penalty pts' }
        : { pl: 'brak 1 osoby × 5 = 5 pkt karnych', en: 'missing 1 member × 5 = 5 penalty pts' });
      const foot = [null, null, null, { pl: 'A wygrywa: 3 < 5', en: 'A wins: 3 < 5' }, { pl: 'Przy cenie 2 wygrywa B: 2 < 3', en: 'At a price of 2, B wins: 2 < 3' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
    };
  }
});
