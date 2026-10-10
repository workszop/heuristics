/* Scheme 15 – Alternate the big plan with detailed feasibility checks.
   Top lane: plan cards. Bottom lane: a minute bar against the 20 min lab limit; a failed check feeds a specific fact back up, the plan changes, the check passes. */
HeurAnim.register(15, {
  steps: [
    { pl: 'Ogólny plan: nagrać całe doświadczenie na żywo w pracowni. Pracownię mamy tylko na 20 minut.', en: 'Big plan: film the whole experiment live in the lab. The lab is ours for only 20 minutes.' },
    { pl: 'Sprawdzamy szczegóły: przygotowanie 12 minut plus nagranie 10 to 22 minuty. To o 2 minuty za dużo.', en: 'Check the details: 12 minutes of setup plus 10 of filming is 22 minutes. That is 2 minutes too many.' },
    { pl: 'Konkretna informacja do planu: w pracowni nie mieści się samo przygotowanie. Zmieniamy plan: zestaw złożymy w domu.', en: 'A specific fact for the plan: the setup does not fit in the lab. We change the plan: assemble the set at home.' },
    { pl: 'Sprawdzamy ponownie: podłączenie 4 minuty plus nagranie 10 to 14 minut. Zostaje 6 minut na powtórkę.', en: 'Check again: 4 minutes to plug in plus 10 of filming is 14 minutes. 6 minutes remain for a retake.' },
    { pl: 'Plan i szczegóły są zgodne. Tak działa pętla: plan, sprawdzenie, poprawka planu.', en: 'Plan and details now agree. That is the loop: plan, check, fix the plan.' }
  ],
  build(api) {
    // ─── Layout ───
    const PX_PER_MIN = 26;
    const AXIS_X = 50, AXIS_Y = 268, BAR_Y = 196, BAR_H = 52;
    const LIMIT_X = AXIS_X + 20 * PX_PER_MIN;
    const xAt = minutes => AXIS_X + minutes * PX_PER_MIN;
    const CARD_X = 160, CARD_Y = 36, CARD_W = 320, CARD_H = 70;

    // ─── Scene ───
    api.text(20, 18, { pl: 'PLAN', en: 'PLAN' }, 'ha-label--small');
    api.text(20, 172, { pl: 'SZCZEGÓŁY', en: 'DETAILS' }, 'ha-label--small');
    const planOld = api.box(CARD_X, CARD_Y, CARD_W, CARD_H, { pl: 'Nagranie całości\nna żywo w pracowni', en: 'Film everything\nlive in the lab' });
    const planNew = api.box(CARD_X, CARD_Y, CARD_W, CARD_H, { pl: 'Zestaw z domu,\nw pracowni: podłączenie i nagranie', en: 'Set built at home,\nlab: plug-in and filming' });
    api.line(AXIS_X, AXIS_Y, xAt(20), AXIS_Y, 'ha-line--thin');
    [0, 10, 20].forEach(minute => api.text(xAt(minute), AXIS_Y + 22, String(minute), 'ha-label--small ha-label--center'));
    api.text(xAt(20) + 40, AXIS_Y + 22, { pl: 'min', en: 'min' }, 'ha-label--small ha-label--center');
    api.line(LIMIT_X, 150, LIMIT_X, AXIS_Y, 'ha-line--dashed ha-line--thin');
    api.text(LIMIT_X, 140, { pl: 'pracownia: 20 min', en: 'lab: 20 min' }, 'ha-label--small ha-label--center');
    const setup = api.box(xAt(0), BAR_Y, 12 * PX_PER_MIN, BAR_H, { pl: 'przygotowanie\n12 min', en: 'setup\n12 min' });
    const plug = api.box(xAt(0), BAR_Y, 4 * PX_PER_MIN, BAR_H, null);
    api.text(xAt(2), BAR_Y + BAR_H / 2, { pl: 'podłączenie\n4 min', en: 'plug-in\n4 min' }, 'ha-label--small ha-label--center', plug);
    const filmLate = api.box(xAt(12), BAR_Y, 10 * PX_PER_MIN, BAR_H, { pl: 'nagranie\n10 min', en: 'filming\n10 min' });
    const filmEarly = api.box(xAt(4), BAR_Y, 10 * PX_PER_MIN, BAR_H, { pl: 'nagranie\n10 min', en: 'filming\n10 min' });
    const feedback = api.arrow(230, 190, 230, 112, 'ha-line--dashed');
    const feedbackLabel = api.text(246, 150, { pl: 'brakuje czasu\nna przygotowanie', en: 'no time for\nthe setup' }, 'ha-label--small');
    const sumLabel = api.text(320, 318, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(planOld, step <= 2);
      api.tone(planOld, step === 0 ? 'accent' : (step === 2 ? 'dim' : null));
      api.visible(planNew, step >= 2);
      api.tone(planNew, step === 2 ? 'accent' : (step === 4 ? 'good' : null));
      api.visible(setup, step === 1 || step === 2);
      api.visible(filmLate, step === 1 || step === 2);
      api.tone(setup, step === 2 ? 'dim' : null);
      api.tone(filmLate, step === 1 ? 'bad' : (step === 2 ? 'dim' : null));
      api.visible(plug, step >= 3);
      api.visible(filmEarly, step >= 3);
      api.tone(plug, step >= 3 ? 'good' : null);
      api.tone(filmEarly, step >= 3 ? 'good' : null);
      api.visible(feedback, step === 2);
      api.visible(feedbackLabel, step === 2);
      const foot = [null, { pl: '12 + 10 = 22 min > 20 min', en: '12 + 10 = 22 min > 20 min' }, null, { pl: '4 + 10 = 14 min ≤ 20 min', en: '4 + 10 = 14 min ≤ 20 min' }, { pl: '4 + 10 = 14 min ≤ 20 min', en: '4 + 10 = 14 min ≤ 20 min' }][step];
      api.visible(sumLabel, Boolean(foot));
      api.setText(sumLabel, foot || '');
      api.tone(sumLabel, step === 1 ? 'bad' : (step >= 3 ? 'good' : null));
    };
  }
});
