/* Scheme 9 – Temporarily remove a difficult constraint.
   A 5-day duty rota: drop "nobody two days in a row", fill the table at once, restore the rule, see two collisions, fix them with one swap. */
HeurAnim.register(9, {
  steps: [
    { pl: 'Grafik dyżurów: 5 dni, po 2 osoby, każdy z A–E dyżuruje 2 razy i nikt dwa dni z rzędu. Wszystko naraz trudno pogodzić.', en: 'Duty rota: 5 days, 2 people each, each of A–E on duty twice and nobody two days in a row. Hard to fit all at once.' },
    { pl: 'Na chwilę zdejmij tę jedną regułę. Reszta wymagań zostaje, cel się nie zmienia.', en: 'Drop that one rule for a moment. The other requirements stay and the goal does not change.' },
    { pl: 'Bez niej tabelę da się wypełnić od razu. To tylko szkic.', en: 'Without it the table can be filled at once. It is only a draft.' },
    { pl: 'Reguła wraca. Szkic łamie ją w dwóch miejscach: A dyżuruje w Pn i Wt, a E dyżuruje w Śr i Cz. Tu jest trudność.', en: 'The rule is back. The draft breaks it in two places: A works Mon and Tue, E works Wed and Thu. That is the difficulty.' },
    { pl: 'Zamiana A (Wt) z E (Śr) naprawia oba miejsca. Reszta tabeli została bez zmian, wszystkie reguły są spełnione.', en: 'Swapping A (Tue) with E (Wed) fixes both places. The rest is unchanged and every rule holds.' }
  ],
  build(api) {
    // ─── Layout ───
    const COL_X = 100, COL_W = 96, COL_GAP = 6;
    const ROW_YS = [118, 176], CELL_H = 52;
    const DAYS = [{ pl: 'Pn', en: 'Mon' }, { pl: 'Wt', en: 'Tue' }, { pl: 'Śr', en: 'Wed' }, { pl: 'Cz', en: 'Thu' }, { pl: 'Pt', en: 'Fri' }];
    const DRAFT = [['A', 'B'], ['A', 'C'], ['D', 'E'], ['E', 'B'], ['C', 'D']];
    const FIXED = [['A', 'B'], ['E', 'C'], ['D', 'A'], ['E', 'B'], ['C', 'D']];
    const clashKey = (day, slot) => [[0, 0], [1, 0], [2, 1], [3, 0]].some(item => item[0] === day && item[1] === slot);
    const colX = day => COL_X + day * (COL_W + COL_GAP);

    // ─── Scene ───
    const ruleBox = api.box(COL_X, 14, 5 * COL_W + 4 * COL_GAP, 48, { pl: 'Reguła: nikt dwa dni z rzędu', en: 'Rule: nobody two days in a row' }, 'ha-box--ghost');
    DAYS.forEach((label, day) => api.text(colX(day) + COL_W / 2, 94, label, 'ha-label--small ha-label--center'));
    const cells = DAYS.map((_, day) => ROW_YS.map(y => api.box(colX(day), y, COL_W, CELL_H, '?', 'ha-box--ghost')));
    api.text(COL_X - 12, ROW_YS[0] + CELL_H / 2, '1', 'ha-label--small ha-label--end');
    api.text(COL_X - 12, ROW_YS[1] + CELL_H / 2, '2', 'ha-label--small ha-label--end');
    api.text(320, 262, { pl: 'Wymagania: 2 osoby dziennie, każdy dokładnie 2 dni', en: 'Requirements: 2 people a day, each exactly 2 days' }, 'ha-label--small ha-label--center');
    const status = api.text(320, 310, '', 'ha-label--center ha-label--strong');

    const STATUS = [
      null,
      { pl: 'reguła zdjęta tylko w szkicu', en: 'rule dropped in the draft only' },
      { pl: 'szkic gotowy od razu', en: 'draft ready at once' },
      { pl: '2 kolizje: A (Pn, Wt) i E (Śr, Cz)', en: '2 clashes: A (Mon, Tue) and E (Wed, Thu)' },
      { pl: 'jedna zamiana: wszystko się zgadza', en: 'one swap: everything fits' }
    ];

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.tone(ruleBox, step === 1 || step === 2 ? 'dim' : (step === 3 ? 'accent' : (step === 4 ? 'good' : null)));
      ruleBox.classList.toggle('ha-box--ghost', step !== 4);
      cells.forEach((column, day) => column.forEach((cell, slot) => {
        const filled = step >= 2;
        const plan = step === 4 ? FIXED : DRAFT;
        api.setText(cell.querySelector('text'), filled ? plan[day][slot] : '?');
        cell.classList.toggle('ha-box--ghost', !filled);
        let tone = null;
        if (step === 3 && clashKey(day, slot)) tone = 'bad';
        else if (step === 4) tone = 'good';
        api.tone(cell, tone);
      }));
      const note = STATUS[step];
      api.visible(status, Boolean(note));
      api.setText(status, note || '');
      api.tone(status, step === 3 ? 'bad' : (step === 4 ? 'good' : null));
    };
  }
});
