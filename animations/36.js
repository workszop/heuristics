/* Scheme 36 – Check progress and change the plan deliberately.
   Plan 1 (reading notes) gives 2/10, the misses show definitions are the problem, plan 2 (flashcards + practice) gives 7/10. */
HeurAnim.register(36, {
  steps: [
    { pl: 'Plan 1: czytanie notatek przez 30 minut. Po nim próbny test z 10 pytań.', en: 'Plan 1: read the notes for 30 minutes. Then a 10-question practice test.' },
    { pl: 'Punkt kontrolny: 2 poprawne odpowiedzi z 10. Czytanie nie przyniosło dość.', en: 'Checkpoint: 2 correct answers out of 10. Reading did not bring enough.' },
    { pl: 'Diagnoza: w 6 z 8 błędów chodziło o definicje. Problemem jest przypominanie, nie czas czytania.', en: 'Diagnosis: 6 of the 8 mistakes were definitions. The problem is recalling, not reading time.' },
    { pl: 'Zmiana planu z powodem: plan 2, czyli fiszki z definicjami i zadania ćwiczeniowe.', en: 'A reasoned change: plan 2, flashcards of definitions and practice questions.' },
    { pl: 'Podobny test: 7 z 10. To nie dowód, ale nowy plan działa lepiej. Zapisz wniosek.', en: 'A similar test: 7 of 10. Not proof, but the new plan works better. Note the lesson.' }
  ],
  build(api) {
    // ─── Layout ───
    const AXIS_X = 90, TOP_Y = 100, BASE_Y = 290, UNIT = (BASE_Y - TOP_Y) / 10;
    const scoreY = score => BASE_Y - score * UNIT;
    const P1 = { x: 230, y: scoreY(2) }, P2 = { x: 500, y: scoreY(7) };

    // ─── Scene ───
    api.line(AXIS_X, TOP_Y, AXIS_X, BASE_Y, 'ha-line--thin');
    api.line(AXIS_X, BASE_Y, 600, BASE_Y, 'ha-line--thin');
    api.text(AXIS_X - 10, BASE_Y, '0', 'ha-label--small ha-label--end');
    api.text(AXIS_X - 10, TOP_Y, '10', 'ha-label--small ha-label--end');
    api.text(AXIS_X, TOP_Y - 16, { pl: 'wynik próbnego testu', en: 'practice test score' }, 'ha-label--small');
    const plan1 = api.box(130, 12, 200, 56, { pl: 'Plan 1:\nczytanie notatek', en: 'Plan 1:\nreading notes' });
    const plan2 = api.box(400, 12, 200, 56, { pl: 'Plan 2:\nfiszki i zadania', en: 'Plan 2:\nflashcards, practice' });
    const swap = api.arrow(336, 40, 394, 40);
    const dot1 = api.circle(P1.x, P1.y, 10);
    const score1 = api.text(P1.x + 18, P1.y + 2, '2/10', 'ha-label--strong');
    const diagnosis = api.text(P1.x + 18, P1.y - 36, { pl: '6 z 8 błędów: definicje', en: '6 of 8 mistakes: definitions' }, 'ha-label--small');
    const rise = api.arrow(P1.x + 10, P1.y - 8, P2.x - 12, P2.y + 8);
    const dot2 = api.circle(P2.x, P2.y, 10);
    const score2 = api.text(P2.x, P2.y - 24, '7/10', 'ha-label--strong ha-label--center');
    const lesson = api.text(320, 330, { pl: 'wniosek: po czytaniu sprawdzaj się pytaniami', en: 'lesson: after reading, test yourself with questions' }, 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      api.tone(plan1, step === 0 ? 'accent' : null);
      api.tone(plan2, step === 3 ? 'accent' : null);
      api.visible(plan2, step >= 3);
      api.visible(swap, step >= 3);
      api.visible(dot1, step >= 1);
      api.visible(score1, step >= 1);
      api.tone(dot1, step >= 1 ? 'bad' : null);
      api.visible(diagnosis, step === 2 || step === 3);
      api.tone(diagnosis, step === 2 ? 'info' : null);
      api.visible(rise, step === 4);
      api.visible(dot2, step === 4);
      api.visible(score2, step === 4);
      api.tone(dot2, step === 4 ? 'good' : null);
      api.visible(lesson, step === 4);
    };
  }
});
