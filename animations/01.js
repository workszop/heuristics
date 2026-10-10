/* Scheme 1 – Work backward from the goal.
   Backward arcs reveal the chain, a missing step appears, forward arrows check the plan. */
HeurAnim.register(1, {
  steps: [
    { pl: 'Zacznij od celu: plakat ma być oddany w piątek.', en: 'Start from the goal: the poster must be submitted on Friday.' },
    { pl: 'Zapytaj, co musi być gotowe tuż wcześniej: skład plakatu.', en: 'Ask what must be ready just before it: the poster layout.' },
    { pl: 'Cofaj się dalej, aż dojdziesz do czegoś, co możesz zrobić już dziś.', en: 'Keep stepping back until you reach something you can do today.' },
    { pl: 'Łańcuch odsłania lukę: w planie nie ma czasu na uwagi nauczyciela.', en: 'The chain exposes a gap: the plan has no time for teacher feedback.' },
    { pl: 'Teraz przejdź plan od początku i sprawdź, czy każdy krok umożliwia następny.', en: 'Now walk the plan forward and check that each step enables the next.' }
  ],
  build(api) {
    // ─── Layout ───
    const W = 120, H = 70, Y = 110;
    const XS = [20, 180, 340, 500];
    const LABELS = [
      { pl: 'Dziś', en: 'Today' },
      { pl: 'Szkic\ni źródła', en: 'Draft and\nsources' },
      { pl: 'Skład\nplakatu', en: 'Poster\nlayout' },
      { pl: 'Plakat\noddany', en: 'Poster\nsubmitted' }
    ];
    const FIRST_VISIBLE = [2, 2, 1, 0];
    const cx = i => XS[i] + W / 2;
    const top = Y - 4, bottom = Y + H + 4;

    // ─── Scene ───
    const backLabel = api.text(320, 36, { pl: '← pytamy wstecz', en: '← asking backward' }, 'ha-label--small ha-label--center');
    const forwardLabel = api.text(320, 334, { pl: 'sprawdzamy do przodu →', en: 'checking forward →' }, 'ha-label--small ha-label--center');
    const boxes = LABELS.map((label, i) => api.box(XS[i], Y, W, H, label));
    const back = [0, 1, 2].map(i => api.path(`M ${cx(i + 1)} ${top} Q ${(cx(i) + cx(i + 1)) / 2} ${Y - 50} ${cx(i)} ${top}`, 'ha-line--dashed', null, true));
    const gap = api.box(420, 236, W, H, { pl: 'Czas na\nuwagi', en: 'Teacher\nfeedback' }, 'ha-box--ghost');
    const forward = [
      api.path(`M ${cx(0)} ${bottom} Q ${(cx(0) + cx(1)) / 2} ${bottom + 46} ${cx(1)} ${bottom}`, '', null, true),
      api.path(`M ${cx(1)} ${bottom} Q ${(cx(1) + cx(2)) / 2} ${bottom + 46} ${cx(2)} ${bottom}`, '', null, true),
      api.path(`M ${cx(2)} ${bottom} Q ${cx(2)} 271 416 271`, '', null, true),
      api.path(`M 520 232 Q ${cx(3)} 222 ${cx(3)} ${bottom + 2}`, '', null, true)
    ];

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(backLabel, api.between(step, 1, 3));
      api.visible(forwardLabel, step === 4);
      boxes.forEach((node, i) => {
        api.visible(node, step >= FIRST_VISIBLE[i]);
        let tone = null;
        if (step === 4) tone = 'good';
        else if (i === 3 && step === 0) tone = 'accent';
        else if (i === 0 && step === 2) tone = 'accent';
        api.tone(node, tone);
      });
      back.forEach((node, i) => api.visible(node, api.between(step, i === 2 ? 1 : 2, 3)));
      api.visible(gap, step >= 3);
      api.tone(gap, step === 3 ? 'bad' : (step === 4 ? 'good' : null));
      forward.forEach(node => { api.visible(node, step === 4); api.tone(node, step === 4 ? 'good' : null); });
    };
  }
});
