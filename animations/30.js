/* Scheme 30 – Solve or count the complement.
   A 6 x 6 grid of (first roll, second roll) pairs: count the 25 pairs without a six, subtract from 36. */
HeurAnim.register(30, {
  steps: [
    { pl: 'Dwa rzuty kostką to 36 par wyników (pierwszy rzut, drugi rzut), każda tak samo możliwa.', en: 'Two rolls of a die give 36 pairs (first roll, second roll), all equally likely.' },
    { pl: 'Zamiast szukać szóstek policz przypadek przeciwny: żadnej szóstki to 5 × 5 = 25 par.', en: 'Instead of hunting for sixes, count the opposite: no six at all is 5 × 5 = 25 pairs.' },
    { pl: 'Reszta ma co najmniej jedną szóstkę: 36 − 25 = 11 par.', en: 'The rest have at least one six: 36 − 25 = 11 pairs.' },
    { pl: 'Prawdopodobieństwo to 11 z 36 jednakowo możliwych par, czyli 11/36.', en: 'The probability is 11 out of 36 equally likely pairs: 11/36.' },
    { pl: 'Pułapka: 6 + 6 = 12, bo para (6, 6) leży i w wierszu, i w kolumnie szóstek, więc policzono ją dwa razy.', en: 'Trap: 6 + 6 = 12, because the pair (6, 6) lies in both the row and the column of sixes and is counted twice.' }
  ],
  build(api) {
    // ─── Layout ───
    const CELL = 40, GX = 60, GY = 52;
    const cellX = col => GX + col * CELL;
    const cellY = row => GY + row * CELL;
    const hasSix = (row, col) => row === 5 || col === 5;

    // ─── Scene ───
    api.text(GX + 3 * CELL, 20, { pl: '2. rzut', en: '2nd roll' }, 'ha-label--small ha-label--center');
    for (let k = 0; k < 6; k += 1) {
      api.text(cellX(k) + CELL / 2, GY - 6, String(k + 1), 'ha-label--small ha-label--center');
      api.text(GX - 16, cellY(k) + CELL / 2 + 5, String(k + 1), 'ha-label--small ha-label--center');
    }
    api.text(6, GY - 6, { pl: '1. rzut', en: '1st roll' }, 'ha-label--small');
    const cells = [];
    for (let row = 0; row < 6; row += 1) {
      for (let col = 0; col < 6; col += 1) cells.push({ row, col, group: api.box(cellX(col) + 2, cellY(row) + 2, CELL - 4, CELL - 4, null) });
    }
    const side = api.text(470, 140, '', 'ha-label--center ha-label--strong');
    const sub = api.text(470, 200, '', 'ha-label--small ha-label--center');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      cells.forEach(item => {
        let name = null;
        const six = hasSix(item.row, item.col);
        if (step === 1) name = six ? null : 'dim';
        if (step === 2 || step === 3) name = six ? 'accent' : 'dim';
        if (step === 4) name = item.row === 5 && item.col === 5 ? 'bad' : (six ? 'accent' : 'dim');
        api.tone(item.group, name);
      });
      const main = [
        { pl: 'wszystkie: 36', en: 'all: 36' },
        { pl: 'bez szóstki:\n5 × 5 = 25', en: 'no six:\n5 × 5 = 25' },
        { pl: 'co najmniej\njedna szóstka:\n36 − 25 = 11', en: 'at least one six:\n36 − 25 = 11' },
        { pl: 'prawdopodobieństwo\n11/36', en: 'probability\n11/36' },
        { pl: '6 + 6 = 12,\nnie 11', en: '6 + 6 = 12,\nnot 11' }
      ][step];
      api.setText(side, main);
      const note = [null, { pl: 'przygaszone pary nie mają szóstki', en: 'faded pairs have no six' }, null, null, { pl: '(6, 6) policzona dwa razy', en: '(6, 6) counted twice' }][step];
      api.visible(sub, Boolean(note));
      api.setText(sub, note || '');
      api.tone(sub, step === 4 ? 'bad' : null);
    };
  }
});
