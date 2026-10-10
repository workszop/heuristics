/* Scheme 22 – Map interactions and incentives.
   Four students send slides to an editor before a deadline; the "point per slide" incentive floods the editor, a trial rule relieves the bottleneck. */
HeurAnim.register(22, {
  steps: [
    { pl: 'Mapa: czworo uczniów wysyła slajdy do redaktorki, która składa prezentację na termin.', en: 'The map: four students send slides to the editor, who assembles the presentation by the deadline.' },
    { pl: 'Zachęta: nauczyciel daje punkt za każdy slajd, więc uczniowie wysyłają ich coraz więcej.', en: 'The incentive: the teacher gives a point per slide, so students send more and more.' },
    { pl: 'Redaktorka to wąskie gardło: za dużo slajdów, termin przepada.', en: 'The editor is the bottleneck: too many slides, the deadline is missed.' },
    { pl: 'Próba: ocena całej prezentacji i najwyżej 3 slajdy na osobę, czyli 4 × 3 = 12.', en: 'The trial: grade the whole presentation and at most 3 slides per student, so 4 × 3 = 12.' },
    { pl: '12 slajdów bez powtórzeń i termin dotrzymany. To próba, nie dowód, że reguła spowodowała wszystko.', en: '12 slides without repeats and the deadline is met. A trial, not proof that the rule caused everything.' }
  ],
  build(api) {
    // ─── Layout ───
    const ST_X = 30, ST_W = 100, ST_H = 40, ST_YS = [60, 120, 180, 240];
    const ED_X = 270, ED_Y = 120, ED_W = 120, ED_H = 100;
    const DL_X = 500, DL_Y = 140, DL_W = 110, DL_H = 60;

    // ─── Scene ───
    const students = ST_YS.map((y, i) => api.box(ST_X, y, ST_W, ST_H, { pl: 'Uczeń ' + (i + 1), en: 'Student ' + (i + 1) }, 'ha-node'));
    const editor = api.box(ED_X, ED_Y, ED_W, ED_H, { pl: 'Redaktorka', en: 'Editor' }, 'ha-node');
    const deadline = api.box(DL_X, DL_Y, DL_W, DL_H, { pl: 'Termin', en: 'Deadline' }, 'ha-node');
    const flows = ST_YS.map(y => api.arrow(ST_X + ST_W + 6, y + ST_H / 2, ED_X - 6, ED_Y + ED_H / 2 + (y - 150) / 6, 'ha-line--thin'));
    const toDeadline = api.arrow(ED_X + ED_W + 6, ED_Y + ED_H / 2, DL_X - 6, DL_Y + DL_H / 2);
    const incentive = api.text(ST_X, 28, { pl: 'nauczyciel: 1 pkt za slajd', en: 'teacher: 1 pt per slide' }, 'ha-label--small');
    const rule = api.text(ST_X, 28, { pl: 'nowa reguła: oceniamy całość, max 3 na osobę', en: 'new rule: grade the whole, max 3 per student' }, 'ha-label--small');
    const slides = api.text(ED_X + ED_W / 2, ED_Y + ED_H + 24, '', 'ha-label--center ha-label--strong');
    const verdict = api.text(DL_X + DL_W / 2, DL_Y + DL_H + 24, '', 'ha-label--small ha-label--center');
    const bottom = api.text(320, 334, '', 'ha-label--center');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      students.forEach(node => api.tone(node, null));
      api.tone(editor, step === 2 ? 'bad' : (step === 4 ? 'good' : null));
      api.tone(deadline, step === 2 ? 'bad' : (step === 4 ? 'good' : null));
      flows.forEach(node => { api.visible(node, true); api.tone(node, step === 1 ? 'info' : null); });
      api.tone(toDeadline, step === 2 ? 'bad' : (step === 4 ? 'good' : null));
      api.visible(incentive, api.between(step, 1, 2));
      api.tone(incentive, step === 1 ? 'accent' : null);
      api.visible(rule, step >= 3);
      api.tone(rule, step >= 3 ? 'info' : null);
      const count = [null, null, { pl: '18 slajdów', en: '18 slides' }, { pl: '4 × 3 = 12 slajdów', en: '4 × 3 = 12 slides' }, { pl: '12 slajdów', en: '12 slides' }][step];
      api.visible(slides, Boolean(count));
      api.setText(slides, count || '');
      api.tone(slides, step === 2 ? 'bad' : (step === 4 ? 'good' : null));
      const dl = [null, null, { pl: 'za późno', en: 'too late' }, null, { pl: 'na czas', en: 'on time' }][step];
      api.visible(verdict, Boolean(dl));
      api.setText(verdict, dl || '');
      api.tone(verdict, step === 2 ? 'bad' : 'good');
      const foot = [null, null, { pl: 'wąskie gardło: jedna osoba i za dużo slajdów', en: 'bottleneck: one person and too many slides' }, null,
        { pl: 'próba, nie dowód', en: 'a trial, not proof' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
    };
  }
});
