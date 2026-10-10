/* Scheme 17 – Clarify the problem and challenge hidden assumptions.
   A vague question splits into Goal / Facts / Who / Rule cards; a hidden assumption is exposed and dropped, then the answer is computed. */
HeurAnim.register(17, {
  steps: [
    { pl: 'Pytanie jest mgliste: kogo obejmuje „wszyscy” i co znaczy „dotrą przed 9:00”?', en: 'The question is vague: who is ‘everyone’ and what does ‘arrive by 9:00’ mean?' },
    { pl: 'Rozłóż je na karty: cel, fakty, kto jedzie i reguła. Wychodzi 28 + 2 = 30 osób, a autobus ma 28 miejsc.', en: 'Split it into cards: goal, facts, who travels and the rule. That gives 28 + 2 = 30 people and a bus with 28 seats.' },
    { pl: 'Ukryte założenie: „dwie osoby postoją”. Sprawdź je z regułą szkoły: miejsce siedzące dla każdego.', en: 'Hidden assumption: ‘two people will stand’. Check it against the school rule: a seat for every person.' },
    { pl: 'Założenie odpada: 30 osób, 28 miejsc, więc 2 osoby nie mają miejsca. Odpowiedź: nie, choć czas (8:45) pasuje.', en: 'The assumption fails: 30 people, 28 seats, so 2 have no seat. Answer: no, even though the time (8:45) fits.' }
  ],
  build(api) {
    // ─── Layout ───
    const CARD_W = 300, CARD_H = 84;
    const CARD_XS = [15, 325];
    const CARD_YS = [96, 192];

    // ─── Scene ───
    const question = api.box(60, 14, 520, 54, { pl: 'Czy wszyscy dotrą do muzeum przed 9:00?', en: 'Can everyone get to the museum by 9:00?' }, 'ha-box--ghost');
    const cards = [
      api.box(CARD_XS[0], CARD_YS[0], CARD_W, CARD_H, { pl: 'Cel: dojazd przed 9:00\nodpowiedź „tak” albo „nie”', en: 'Goal: arrive before 9:00\nthe answer is yes or no' }),
      api.box(CARD_XS[1], CARD_YS[0], CARD_W, CARD_H, { pl: 'Fakty: odjazd 8:10, 35 min\nautobus: 28 miejsc', en: 'Facts: leaves 8:10, 35 min\nbus: 28 seats' }),
      api.box(CARD_XS[0], CARD_YS[1], CARD_W, CARD_H, { pl: 'Kto: 28 uczniów\n+ 2 nauczycieli = 30', en: 'Who: 28 students\n+ 2 teachers = 30' }),
      api.box(CARD_XS[1], CARD_YS[1], CARD_W, CARD_H, { pl: 'Reguła: miejsce\ndla każdej osoby', en: 'Rule: a seat\nfor every person' })
    ];
    const assumption = api.box(15, 288, 300, 62, { pl: 'Ukryte założenie:\ndwie osoby postoją', en: 'Hidden assumption:\ntwo people will stand' }, 'ha-box--ghost');
    const cross = api.line(30, 319, 300, 319, 'ha-line--thin');
    const answer = api.box(325, 288, 300, 62, { pl: '30 osób, 28 miejsc: nie\n2 bez miejsca', en: '30 people, 28 seats: no\n2 without a seat' });

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.tone(question, step === 0 ? 'accent' : null);
      cards.forEach(node => api.visible(node, step >= 1));
      api.visible(assumption, step === 2 || step === 3);
      api.tone(assumption, step === 2 ? 'accent' : (step === 3 ? 'dim' : null));
      api.visible(cross, step === 3);
      api.tone(cross, step === 3 ? 'bad' : null);
      api.visible(answer, step === 3);
      api.tone(answer, step === 3 ? 'bad' : null);
    };
  }
});
