/* Scheme 4 – Use controlled trial and error.
   A paper bridge, a stack of books and a trial log: two attempts differ only in the number of strips, the conclusion stays modest. */
HeurAnim.register(4, {
  steps: [
    { pl: 'Przewidujemy: więcej złożonych pasków papieru da mocniejszy most.', en: 'Prediction: more folded paper strips will make a stronger bridge.' },
    { pl: 'Próba A: 3 paski. Kładziemy książki po jednej, aż most się zapadnie: wytrzymał 4. Zapisujemy wynik.', en: 'Trial A: 3 strips. Books go on one by one until the bridge collapses: it held 4. We record the result.' },
    { pl: 'Próba B: 5 pasków, ten sam most i te same książki. Wytrzymał 8 książek. Zapisujemy wynik.', en: 'Trial B: 5 strips, the same bridge and the same books. It held 8 books. We record the result.' },
    { pl: 'Zmieniła się tylko liczba pasków, więc różnica najpewniej pochodzi z pasków. Reszta została bez zmian.', en: 'Only the number of strips changed, so the difference most likely comes from the strips. Everything else stayed the same.' },
    { pl: 'Wniosek dotyczy tych mostów: w tej próbie 5 pasków utrzymało więcej niż 3. Nie wiemy, czy każdy most potrzebuje 5.', en: 'The conclusion covers these bridges: here 5 strips held more than 3. We do not know that every bridge needs 5.' }
  ],
  build(api) {
    // ─── Layout ───
    const SUP_Y = 200, DECK_Y = 190, DECK_H = 16;
    const BOOK_W = 110, BOOK_H = 14, BOOK_X = 120, MAX_BOOKS = 8;
    const STRIP_X = (i) => 62 + i * 48;
    const COLS = [395, 480, 570];
    const ROWS = [96, 140];

    // ─── Scene ───
    const ground = api.line(30, 300, 330, 300, 'ha-line--thin');
    const supportL = api.box(40, SUP_Y + DECK_H, 40, 300 - SUP_Y - DECK_H, null);
    const supportR = api.box(280, SUP_Y + DECK_H, 40, 300 - SUP_Y - DECK_H, null);
    const strips = [0, 1, 2, 3, 4].map(i => api.box(STRIP_X(i), DECK_Y + DECK_H + 8, 36, 10, null));
    const deck = api.box(40, DECK_Y, 280, DECK_H, null);
    const books = Array.from({ length: MAX_BOOKS }, (_, i) => api.box(BOOK_X, DECK_Y - (i + 1) * BOOK_H, BOOK_W, BOOK_H - 1, null));
    const stripLabel = api.text(180, 322, '', 'ha-label--small ha-label--center');
    const predict = api.text(495, 150, { pl: 'Przewidujemy:\nwięcej pasków,\nmocniejszy most', en: 'Prediction:\nmore strips,\nstronger bridge' }, 'ha-label--center');
    const heads = [{ pl: 'próba', en: 'trial' }, { pl: 'paski', en: 'strips' }, { pl: 'książki', en: 'books' }].map((label, i) => api.text(COLS[i], 62, label, 'ha-label--small ha-label--center'));
    const rule = api.line(360, 78, 620, 78, 'ha-line--thin');
    const cells = [['A', '3', '4'], ['B', '5', '8']].map((row, r) => row.map((value, c) => api.text(COLS[c], ROWS[r], value, 'ha-label--center')));
    const same = api.text(495, 214, { pl: 'bez zmian:\n20 cm, te same książki', en: 'unchanged:\n20 cm, same books' }, 'ha-label--small ha-label--center');
    const bottom = api.text(320, 324, '', 'ha-label--center');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      const trial = step === 1 ? 'A' : (step >= 2 ? 'B' : null);
      const stripCount = trial === 'A' ? 3 : (trial === 'B' ? 5 : 0);
      const bookCount = trial === 'A' ? 4 : (trial === 'B' ? 8 : 0);
      strips.forEach((node, i) => api.visible(node, i < stripCount));
      books.forEach((node, i) => api.visible(node, i < bookCount));
      api.place(deck, 0, trial === 'A' ? 10 : 0);
      books.forEach(node => api.place(node, 0, trial === 'A' ? 10 : 0));
      api.tone(deck, trial === 'A' ? 'bad' : (trial === 'B' ? 'good' : null));
      api.visible(stripLabel, Boolean(trial) && step < 4);
      api.setText(stripLabel, trial === 'A' ? { pl: '3 paski: zapada się przy 4 książkach', en: '3 strips: collapses at 4 books' } : { pl: '5 pasków: trzyma 8 książek', en: '5 strips: holds 8 books' });
      api.visible(predict, step === 0);
      heads.forEach(node => api.visible(node, step >= 1));
      api.visible(rule, step >= 1);
      cells.forEach((row, r) => row.forEach((node, c) => {
        api.visible(node, r === 0 ? step >= 1 : step >= 2);
        api.tone(node, step >= 3 && c === 1 ? 'accent' : null);
      }));
      api.tone(heads[1], step >= 3 ? 'accent' : null);
      api.visible(same, step === 3);
      const foot = step === 4 ? { pl: 'Ten wynik dotyczy tych mostów,\nnie każdego mostu', en: 'This result covers these bridges,\nnot every bridge' } : null;
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
    };
  }
});
