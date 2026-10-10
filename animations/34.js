/* Scheme 34 – Find only the quantity the question asks for.
   Fence of 28 m gives length + width = 14 without knowing the sides; 6 x 8 and 5 x 9 share the sum, but not the area. */
HeurAnim.register(34, {
  steps: [
    { pl: 'Działka-prostokąt ma 28 m siatki. Pytanie: ile wynoszą razem długość i szerokość?', en: 'A rectangular garden has 28 m of fence. The question: how long are length and width together?' },
    { pl: 'Siatka biegnie wzdłuż 2 długości i 2 szerokości, więc jedna długość i jedna szerokość to połowa: 14 m.', en: 'The fence runs along 2 lengths and 2 widths, so one of each is half: 14 m.' },
    { pl: 'Działka 6 na 8 pasuje do danych: 6 + 8 = 14.', en: 'A 6 by 8 garden fits the data: 6 + 8 = 14.' },
    { pl: 'Działka 5 na 9 też pasuje: 5 + 9 = 14. Boków nie znamy, a suma jest ta sama.', en: 'A 5 by 9 garden fits too: 5 + 9 = 14. The sides are unknown, the sum is the same.' },
    { pl: 'Gdyby pytanie dotyczyło pola, wyniki się różnią (48 i 45 m²): na takie pytanie brakuje danych.', en: 'If the question were about the area, the results differ (48 and 45 m²): the data would not be enough.' }
  ],
  build(api) {
    // ─── Layout ───
    const SCALE = 20;
    const A = { x: 50, y: 50, w: 8 * SCALE, h: 6 * SCALE };
    const B = { x: 350, y: 60, w: 9 * SCALE, h: 5 * SCALE };
    const Q = { x: 220, y: 60, w: 200, h: 120 };

    // ─── Scene ───
    const unknown = api.box(Q.x, Q.y, Q.w, Q.h, null, 'ha-box--ghost');
    const unknownTop = api.text(Q.x + Q.w / 2, Q.y - 16, { pl: 'długość ?', en: 'length ?' }, 'ha-label--small ha-label--center');
    const unknownSide = api.text(Q.x - 10, Q.y + Q.h / 2, { pl: 'szer. ?', en: 'width ?' }, 'ha-label--small ha-label--end');
    const gardenA = api.box(A.x, A.y, A.w, A.h, { pl: '6 na 8', en: '6 by 8' });
    const gardenB = api.box(B.x, B.y, B.w, B.h, { pl: '5 na 9', en: '5 by 9' });
    const sumA = api.text(A.x + A.w / 2, A.y + A.h + 28, '6 + 8 = 14', 'ha-label--center');
    const sumB = api.text(B.x + B.w / 2, B.y + B.h + 28, '5 + 9 = 14', 'ha-label--center');
    const areaA = api.text(A.x + A.w / 2, A.y + A.h + 28, { pl: 'pole 48 m²', en: 'area 48 m²' }, 'ha-label--small ha-label--center');
    const areaB = api.text(B.x + B.w / 2, B.y + B.h + 28, { pl: 'pole 45 m²', en: 'area 45 m²' }, 'ha-label--small ha-label--center');
    const line1 = api.text(320, 268, '', 'ha-label--center ha-label--strong');
    const line2 = api.text(320, 308, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      const early = step <= 1;
      api.visible(unknown, early);
      api.visible(unknownTop, early);
      api.visible(unknownSide, early);
      api.visible(gardenA, step >= 2);
      api.visible(gardenB, step >= 3);
      api.visible(sumA, step >= 2 && step <= 3);
      api.visible(sumB, step === 3);
      api.visible(areaA, step === 4);
      api.visible(areaB, step === 4);
      api.tone(gardenA, step === 2 ? 'accent' : null);
      api.tone(gardenB, step === 3 ? 'accent' : null);
      api.tone(areaA, step === 4 ? 'bad' : null);
      api.tone(areaB, step === 4 ? 'bad' : null);
      const first = [
        { pl: 'siatka: 28 m', en: 'fence: 28 m' },
        { pl: '2 długości + 2 szerokości = 28 m', en: '2 lengths + 2 widths = 28 m' },
        { pl: 'obwód 2 · 6 + 2 · 8 = 28', en: 'perimeter 2 · 6 + 2 · 8 = 28' },
        { pl: 'obwód 2 · 5 + 2 · 9 = 28', en: 'perimeter 2 · 5 + 2 · 9 = 28' },
        { pl: 'suma stała, pole nie', en: 'the sum is fixed, the area is not' }
      ][step];
      const second = [
        { pl: 'pytanie: długość + szerokość = ?', en: 'question: length + width = ?' },
        { pl: 'długość + szerokość = 14 m', en: 'length + width = 14 m' },
        { pl: 'długość + szerokość = 14 m', en: 'length + width = 14 m' },
        { pl: 'długość + szerokość = 14 m', en: 'length + width = 14 m' },
        { pl: 'na pytanie o pole brakuje danych', en: 'for the area the data are missing' }
      ][step];
      api.setText(line1, first);
      api.setText(line2, second);
      api.tone(line2, step >= 1 && step <= 3 ? 'good' : (step === 4 ? 'bad' : null));
    };
  }
});
