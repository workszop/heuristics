/* Scheme 33 – List cases systematically and eliminate impossibilities.
   Branches by the last digit; odd endings are crossed out, the rest are listed and filtered with a reason. */
HeurAnim.register(33, {
  steps: [
    { pl: 'Kod ma cyfry 1, 2, 3, 4, każdą raz. Reguły: ostatnia parzysta, pierwsza mniejsza od drugiej. Dzielimy według ostatniej cyfry.', en: 'The code uses 1, 2, 3, 4 once each. Rules: last digit even, first smaller than second. We split by the last digit.' },
    { pl: 'Zakończenia 1 i 3 skreślamy od razu: te cyfry są nieparzyste.', en: 'Endings 1 and 3 are crossed out at once: those digits are odd.' },
    { pl: 'Pod „…2” jest 6 kolejności cyfr 1, 3, 4. Skreślamy 3, które łamią regułę „pierwsza < druga”; zostają 3.', en: 'Under "...2" there are 6 orders of 1, 3, 4. We cross out 3 that break "first < second"; 3 stay.' },
    { pl: 'Pod „…4” robimy to samo z cyframi 1, 2, 3: znów 3 skreślone i 3 ocalałe.', en: 'Under "...4" we do the same with 1, 2, 3: again 3 crossed out and 3 left.' },
    { pl: 'Gałęzie się nie nakładają i obejmują każde dozwolone zakończenie, więc kodów jest dokładnie 3 + 3 = 6.', en: 'The branches do not overlap and cover every allowed ending, so there are exactly 3 + 3 = 6 codes.' }
  ],
  build(api) {
    // ─── Layout ───
    const COL_X = [80, 240, 400, 560];
    const ENDINGS = ['1', '2', '3', '4'];
    const ITEM_W = 76, ITEM_H = 28, ITEM_Y0 = 126, ITEM_STEP = 31;
    const LISTS = {
      1: [['1342', true, ''], ['1432', true, ''], ['3142', false, '3 > 1'], ['3412', true, ''], ['4132', false, '4 > 1'], ['4312', false, '4 > 3']],
      3: [['1234', true, ''], ['1324', true, ''], ['2134', false, '2 > 1'], ['2314', true, ''], ['3124', false, '3 > 1'], ['3214', false, '3 > 2']]
    };
    const LIST_COL = { 1: 1, 3: 3 };

    // ─── Scene ───
    const root = api.box(60, 6, 520, 58, null);
    api.text(320, 28, { pl: 'cyfry 1, 2, 3, 4, każda raz', en: 'digits 1, 2, 3, 4, once each' }, 'ha-label--small ha-label--center', root);
    api.text(320, 52, { pl: 'ostatnia parzysta, pierwsza < druga', en: 'last even, first < second' }, 'ha-label--small ha-label--center', root);
    const branches = COL_X.map((cx, i) => {
      api.line(320, 64, cx, 78, 'ha-line--thin');
      return api.box(cx - 55, 78, 110, 34, { pl: 'koniec …' + ENDINGS[i], en: 'ends …' + ENDINGS[i] });
    });
    const reasons = [0, 2].map(i => api.text(COL_X[i], 138, { pl: 'ostatnia\nnieparzysta', en: 'last digit\nis odd' }, 'ha-label--small ha-label--center'));
    const columns = Object.keys(LISTS).map(key => LISTS[key].map(([code, ok, why], r) => {
      const cx = COL_X[LIST_COL[key]];
      const group = api.box(cx - 70, ITEM_Y0 + r * ITEM_STEP, ITEM_W, ITEM_H, null);
      api.text(cx - 70 + ITEM_W / 2, ITEM_Y0 + r * ITEM_STEP + ITEM_H / 2, code, 'ha-label--center', group);
      const reason = api.text(cx + 12, ITEM_Y0 + r * ITEM_STEP + ITEM_H / 2 + 5, why, 'ha-label--small');
      return { group, reason, ok };
    }));
    const bottom = api.text(320, 340, '', 'ha-label--center ha-label--strong');

    // ─── Show (absolute state per step) ───
    return function show(step) {
      [0, 2].forEach(i => api.tone(branches[i], step >= 1 ? 'dim' : null));
      reasons.forEach(node => api.visible(node, step >= 1));
      columns.forEach((items, c) => {
        const shownFrom = c === 0 ? 2 : 3;
        items.forEach(item => {
          api.visible(item.group, step >= shownFrom);
          api.visible(item.reason, step >= shownFrom && !item.ok);
          let name = item.ok ? 'good' : 'bad';
          if (step === 4) name = item.ok ? 'good' : 'dim';
          api.tone(item.group, step >= shownFrom ? name : null);
        });
      });
      const foot = [null, null, { pl: 'zostają 1342, 1432, 3412', en: '1342, 1432, 3412 remain' }, { pl: 'zostają 1234, 1324, 2314', en: '1234, 1324, 2314 remain' }, { pl: '3 + 3 = 6 kodów', en: '3 + 3 = 6 codes' }][step];
      api.visible(bottom, Boolean(foot));
      api.setText(bottom, foot || '');
      api.tone(bottom, step === 4 ? 'good' : null);
    };
  }
});
