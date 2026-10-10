/* Scheme 7 – Estimate from parts and comparable cases.
   Four 15 min clips plus 30 min shared work give 90 min; the gap to the 120 min whole gets a reason; two tracks show effort vs elapsed time. */
HeurAnim.register(7, {
  steps: [
    { pl: 'Pierwsza droga: cztery wywiady, każdy około 15 minut montażu. Razem 4 × 15 = 60 minut.', en: 'First route: four interviews, about 15 minutes of editing each. Together 4 × 15 = 60 minutes.' },
    { pl: 'Dodaj pracę wspólną: wstęp i wysyłka, 30 minut. Razem 90 minut pracy.', en: 'Add the shared work: introduction and upload, 30 minutes. Together 90 minutes of effort.' },
    { pl: 'Druga droga: poprzedni odcinek zajął 120 minut. Różnica 30 minut ma przyczynę: wtedy były jeszcze poprawki nauczyciela.', en: 'Second route: the last episode took 120 minutes. The 30-minute gap has a reason: back then the teacher also asked for fixes.' },
    { pl: 'Dwie osoby pracują równocześnie: 90 minut pracy, ale na zegarze tylko 30 + 30 = 60 minut.', en: 'Two people work in parallel: 90 minutes of effort, but only 30 + 30 = 60 minutes on the clock.' }
  ],
  build(api) {
    // ─── Layout ───
    const PX_PER_MIN = 4.8;
    const LEFT = 32;
    const CLIP_W = 15 * PX_PER_MIN, SHARED_W = 30 * PX_PER_MIN;
    const ROW1_Y = 92, ROW2_Y = 192, TRACK2_Y = 152, ROW_H = 50;
    const SHARED_X = LEFT + 4 * CLIP_W;
    const WHOLE_W = 120 * PX_PER_MIN;
    const GAP_X = LEFT + 90 * PX_PER_MIN, GAP_W = 30 * PX_PER_MIN;

    // ─── Scene ───
    const partsTitle = api.text(LEFT, 62, { pl: 'Z części', en: 'From parts' }, 'ha-label--small');
    const clips = [0, 1, 2, 3].map(i => api.box(LEFT + i * CLIP_W, ROW1_Y, CLIP_W, ROW_H, '15'));
    const shared = api.box(SHARED_X, ROW1_Y, SHARED_W, ROW_H, { pl: 'wspólne 30', en: 'shared 30' });
    const wholeTitle = api.text(LEFT, 162, { pl: 'Podobna całość: poprzedni odcinek, 120 min', en: 'Similar whole: last episode, 120 min' }, 'ha-label--small');
    const whole = api.box(LEFT, ROW2_Y, WHOLE_W, ROW_H, null);
    const gapBox = api.box(GAP_X, ROW2_Y, GAP_W, ROW_H, null);
    api.el('rect', { x: GAP_X, y: ROW2_Y, width: GAP_W, height: ROW_H, rx: 10, class: 'ha-area is-accent' }, gapBox);
    const gapText = api.text(GAP_X + GAP_W / 2, ROW2_Y + ROW_H / 2, { pl: '+30', en: '+30' }, 'ha-label--center', gapBox);
    const reason = api.text(320, 270, { pl: 'Wtedy: jeszcze poprawki nauczyciela', en: 'Back then: teacher fixes too' }, 'ha-label--small ha-label--center');
    const track1Label = api.text(SHARED_X - 2 * CLIP_W + SHARED_W + 14, ROW1_Y + ROW_H / 2, { pl: 'osoba 1: 60 min', en: 'person 1: 60 min' }, 'ha-label--small');
    const track2Label = api.text(LEFT + 2 * CLIP_W + 14, TRACK2_Y + ROW_H / 2, { pl: 'osoba 2: 30 min', en: 'person 2: 30 min' }, 'ha-label--small');
    const bottom = api.text(320, 328, '', 'ha-label--center ha-label--strong');

    const BOTTOM = [
      { pl: '4 × 15 = 60 min', en: '4 × 15 = 60 min' },
      { pl: '60 + 30 = 90 min pracy', en: '60 + 30 = 90 min of effort' },
      { pl: '120 − 90 = 30 min różnicy', en: '120 − 90 = 30 min gap' },
      { pl: 'praca: 90 min · na zegarze: 60 min', en: 'effort: 90 min · on the clock: 60 min' }
    ];

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.visible(shared, step >= 1);
      api.tone(shared, step === 1 ? 'accent' : null);
      clips.forEach((node, i) => {
        if (step === 3 && i >= 2) api.place(node, -2 * CLIP_W, TRACK2_Y - ROW1_Y);
        else api.place(node, 0, 0);
        api.tone(node, null);
      });
      api.place(shared, step === 3 ? -2 * CLIP_W : 0, 0);
      api.visible(wholeTitle, step === 2);
      api.visible(whole, step === 2);
      api.visible(gapBox, step === 2);
      api.visible(reason, step === 2);
      api.visible(partsTitle, step <= 2);
      api.visible(track1Label, step === 3);
      api.visible(track2Label, step === 3);
      api.tone(track1Label, step === 3 ? 'accent' : null);
      api.tone(bottom, step === 3 ? 'accent' : null);
      api.setText(bottom, BOTTOM[step]);
    };
  }
});
