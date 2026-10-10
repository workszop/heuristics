/* Scheme 13 – Add missing restrictions as failures reveal them.
   A cloud of candidate timetables; each failure becomes a general rule that cuts off a whole region while the final candidate survives. */
HeurAnim.register(13, {
  steps: [
    { pl: 'Są 3 koła i 2 sale. Prosta wersja ma jedną regułę: w jednej sali naraz tylko jedno koło. Wybieramy plan: robotyka i szachy o 15:00.', en: 'There are 3 clubs and 2 rooms. The simple version has one rule: one club per room at a time. We pick a plan: robotics and chess at 15:00.' },
    { pl: 'Kontrola: jeden uczeń chodzi na robotykę i na szachy, a oba koła są o tej samej godzinie. Plan nie działa.', en: 'Check: one student is in both robotics and chess, and both clubs are at the same time. The plan fails.' },
    { pl: 'Reguła 1: koła ze wspólnym uczniem nie spotykają się naraz. Odcina ten plan i podobne. Nowy plan: robotyka w sali bez gniazdek.', en: 'Rule 1: clubs sharing a student never meet together. It cuts off this plan and similar ones. New plan: robotics in a room with no sockets.' },
    { pl: 'Roboty nie mają prądu. Reguła 2: robotyka tylko w pracowni. Odcina kolejne plany.', en: 'The robots have no power. Rule 2: robotics only in the lab. It cuts off more plans.' },
    { pl: 'Trzeci plan przechodzi: robotyka w pracowni o 15:00, szachy o 16:00. Reguły wynikają z zadania, więc nic poprawnego nie znika.', en: 'The third plan passes: robotics in the lab at 15:00, chess at 16:00. The rules follow from the task, so nothing valid is lost.' }
  ],
  build(api) {
    // ─── Layout ───
    const FRAME = { x: 40, y: 56, w: 560, h: 200 };
    const COLS = [90, 182, 274, 366, 458, 550];
    const ROWS = [96, 156, 216];
    const CUT1_X = 228, CUT2_Y = 126;
    const CAND = [{ col: 1, row: 0 }, { col: 3, row: 0 }, { col: 4, row: 1 }];
    const DOT_R = 7, CAND_R = 15;

    // ─── Scene ───
    api.box(FRAME.x, FRAME.y, FRAME.w, FRAME.h, null, 'ha-box--ghost');
    api.text(320, 30, { pl: 'Kropki to przykładowe plany kół', en: 'Dots stand for sample club timetables' }, 'ha-label--small ha-label--center');
    const dots = [];
    ROWS.forEach((y, row) => COLS.forEach((x, col) => dots.push({ col, row, node: api.circle(x, y, DOT_R) })));
    const cuts1 = api.line(CUT1_X, FRAME.y, CUT1_X, FRAME.y + FRAME.h, 'ha-line--dashed is-bad');
    const cuts2 = api.line(CUT1_X, CUT2_Y, FRAME.x + FRAME.w, CUT2_Y, 'ha-line--dashed is-bad');
    const cands = CAND.map(item => api.circle(COLS[item.col], ROWS[item.row], CAND_R));
    const rule1 = api.text(320, 288, { pl: 'Reguła 1: wspólny uczeń = różne godziny', en: 'Rule 1: shared student = different times' }, 'ha-label--small ha-label--center');
    const rule2 = api.text(320, 320, { pl: 'Reguła 2: robotyka tylko w pracowni', en: 'Rule 2: robotics only in the lab' }, 'ha-label--small ha-label--center');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      dots.forEach(item => {
        const cutByOne = step >= 2 && item.col <= 1;
        const cutByTwo = step >= 3 && item.row === 0 && item.col >= 2;
        api.tone(item.node, cutByOne || cutByTwo ? 'dim' : null);
      });
      api.visible(cuts1, step >= 2);
      api.visible(cuts2, step >= 3);
      api.visible(cands[0], step <= 2);
      api.visible(cands[1], step === 2 || step === 3);
      api.visible(cands[2], step === 4);
      api.tone(cands[0], step === 0 ? 'accent' : (step === 1 ? 'bad' : 'dim'));
      api.tone(cands[1], step === 2 ? 'accent' : 'bad');
      api.tone(cands[2], 'good');
      api.visible(rule1, step >= 2);
      api.visible(rule2, step >= 3);
    };
  }
});
