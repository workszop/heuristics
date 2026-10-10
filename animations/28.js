/* Scheme 28 – Track a quantity that moves only one way.
   A pile of 12 tokens, moves take 1-3: the count drops by at least 1 and stays at 0 or above, so the game ends within 12 moves; a halved bar never reaches 0. */
HeurAnim.register(28, {
  steps: [
    { pl: 'Stos 12 żetonów. W ruchu zabierasz 1, 2 albo 3. Czy gra się skończy i ile ruchów potrwa?', en: 'A pile of 12 tokens. A move takes 1, 2 or 3. Will the game end, and how many moves can it last?' },
    { pl: 'Śledzimy liczbę żetonów. Trzy ruchy (zabrane 3, 2 i 1) zostawiają 6 żetonów.', en: 'We track the number of tokens. Three moves (taking 3, 2 and 1) leave 6 tokens.' },
    { pl: 'Każdy ruch zmniejsza liczbę o co najmniej 1, a poniżej 0 nie zejdzie.', en: 'Every move lowers the number by at least 1, and it cannot fall below 0.' },
    { pl: 'Więc po co najwyżej 12 ruchach (gdy zabierane jest po jednym) stos jest pusty i gra się kończy.', en: 'So after at most 12 moves (if only one is taken each time) the pile is empty and the game ends.' },
    { pl: 'Kontrast: liczba połowiona w każdej rundzie też maleje, ale nigdy nie dojdzie do 0.', en: 'Contrast: a number halved each round also falls, but it never reaches 0.' }
  ],
  build(api) {
    // ─── Layout ───
    const TOKEN_R = 18, TOKEN_Y = 110, TOKEN_X0 = 68, TOKEN_GAP = 46, TOKEN_COUNT = 12;
    const REMAINING = [12, 6, 6, 0];
    const BAR_X = 60, BAR_W = 360, BAR_H = 26, BAR_YS = [90, 134, 178, 222];

    // ─── Scene ───
    const tokens = [];
    for (let i = 0; i < TOKEN_COUNT; i += 1) tokens.push(api.circle(TOKEN_X0 + i * TOKEN_GAP, TOKEN_Y, TOKEN_R, 'ha-dot--hollow'));
    const counter = api.text(320, 190, '', 'ha-label--big ha-label--center');
    const trail = api.text(320, 238, '', 'ha-label--small ha-label--center');
    const floor = api.text(320, 282, { pl: 'dół: 0, niżej nie zejdzie', en: 'floor: 0, it cannot go lower' }, 'ha-label--small ha-label--center');
    const bars = BAR_YS.map((y, i) => api.box(BAR_X, y, BAR_W / Math.pow(2, i), BAR_H, null, 'ha-node'));
    const barLabels = BAR_YS.map((y, i) => api.text(BAR_X + BAR_W + 30, y + BAR_H / 2, ['1', '1/2', '1/4', '1/8'][i], 'ha-label--small'));
    const zero = api.line(BAR_X, 76, BAR_X, 262, 'ha-line--dashed ha-line--thin');
    const zeroTag = api.text(BAR_X, 64, '0', 'ha-label--small ha-label--center');
    const never = api.text(320, 300, { pl: 'maleje, ale 0 nigdy nie nadchodzi', en: 'it falls, but 0 never arrives' }, 'ha-label--center ha-label--strong');
    const bottom = api.text(320, 334, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      const pile = step <= 3;
      const left = REMAINING[Math.min(step, 3)];
      tokens.forEach((node, i) => {
        api.visible(node, pile && (i < left || (step === 1 && i < TOKEN_COUNT)));
        api.tone(node, step === 1 && i >= left ? 'accent' : null);
      });
      api.visible(counter, pile);
      api.setText(counter, { pl: 'żetonów: ' + left, en: 'tokens: ' + left });
      api.tone(counter, step === 3 ? 'good' : null);
      api.visible(trail, step >= 1 && step <= 3);
      api.setText(trail, step === 1 ? { pl: 'zabrane: 3 + 2 + 1, zostaje 6', en: 'taken: 3 + 2 + 1, 6 left' } : (step === 2 ? { pl: 'spadek co najmniej 1 w każdym ruchu', en: 'a drop of at least 1 in every move' } : { pl: '0 żetonów: nie ma już ruchu', en: '0 tokens: no move is left' }));
      api.visible(floor, step === 2 || step === 3);
      api.tone(floor, step === 2 || step === 3 ? 'info' : null);
      bars.forEach(node => { api.visible(node, step === 4); api.tone(node, 'bad'); });
      barLabels.forEach(node => api.visible(node, step === 4));
      api.visible(zero, step === 4);
      api.visible(zeroTag, step === 4);
      api.visible(never, step === 4);
      api.tone(never, 'bad');
      const foot = step === 3 ? { pl: 'najwyżej 12 ruchów', en: 'at most 12 moves' } : null;
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
      api.tone(bottom, step === 3 ? 'good' : null);
    };
  }
});
