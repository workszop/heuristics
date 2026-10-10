/* Scheme 25 – Focus on an extreme element.
   Five friends in a circle, each claims "the person on my right is taller"; the tallest cannot have a taller neighbor, so the claim fails. */
HeurAnim.register(25, {
  steps: [
    { pl: 'Pięć osób w kółku. Każda mówi: „Osoba po mojej prawej jest wyższa ode mnie”. Czy wszystkie mówią prawdę?', en: 'Five people in a circle. Each says: “The person on my right is taller than me.” Can all be telling the truth?' },
    { pl: 'Nie znamy wzrostów, ale wśród pięciu osób jedna jest najwyższa. Bierzemy ją.', en: 'We do not know the heights, but among five people one is the tallest. Take her.' },
    { pl: 'Jeśli mówi prawdę, jej sąsiad z prawej jest wyższy od najwyższej osoby w kółku.', en: 'If she is telling the truth, her right neighbor is taller than the tallest person in the circle.' },
    { pl: 'To niemożliwe, więc przynajmniej jedna osoba się myli. Tak samo w kółku z dowolną liczbą osób.', en: 'That is impossible, so at least one person is wrong. The same holds in a circle of any size.' }
  ],
  build(api) {
    // ─── Layout ───
    const CX = 320, CY = 178, RADIUS = 104, DOT_R = 22, COUNT = 5, TALLEST = 0;
    const pos = i => {
      const angle = -Math.PI / 2 + i * 2 * Math.PI / COUNT;
      return { x: CX + RADIUS * Math.cos(angle), y: CY + RADIUS * Math.sin(angle), angle };
    };
    const gapAngle = DOT_R / RADIUS + 0.12;

    // ─── Scene ───
    const arrows = [];
    for (let i = 0; i < COUNT; i += 1) {
      const a = pos(i).angle + gapAngle;
      const b = pos(i).angle + 2 * Math.PI / COUNT - gapAngle;
      arrows.push(api.path(`M ${CX + RADIUS * Math.cos(a)} ${CY + RADIUS * Math.sin(a)} A ${RADIUS} ${RADIUS} 0 0 1 ${CX + RADIUS * Math.cos(b)} ${CY + RADIUS * Math.sin(b)}`, 'ha-line--thin', null, true));
    }
    const dots = [];
    for (let i = 0; i < COUNT; i += 1) dots.push(api.circle(pos(i).x, pos(i).y, DOT_R));
    const centerText = api.text(CX, CY + 14, { pl: 'każdy mówi:\n„sąsiad z prawej\njest wyższy”', en: 'everyone says:\n“my right neighbor\nis taller”' }, 'ha-label--small ha-label--center');
    const tag = api.text(pos(TALLEST).x - 36, pos(TALLEST).y, { pl: 'najwyższa', en: 'tallest' }, 'ha-label--strong ha-label--end');
    const need = api.text(pos(1).x + 40, pos(1).y - 36, { pl: 'wyższy od najwyższej?', en: 'taller than the tallest?' }, 'ha-label--small');
    const bottom = api.text(320, 334, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      dots.forEach((node, i) => api.tone(node, step >= 1 && i === TALLEST ? 'accent' : null));
      arrows.forEach((node, i) => {
        let tone = null;
        if (step >= 2) tone = i === TALLEST ? 'bad' : 'dim';
        api.tone(node, tone);
      });
      api.visible(centerText, step <= 1);
      api.visible(tag, step >= 1);
      api.visible(need, step === 2);
      api.tone(need, 'bad');
      const foot = [null, null, null, { pl: 'niemożliwe: ktoś się myli', en: 'impossible: someone is wrong' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
      api.tone(bottom, step === 3 ? 'bad' : null);
    };
  }
});
