#!/usr/bin/env python3
"""Embed heuristics.md and heuristics_pl.md into the guide-data JSON of both reader pages.

Usage: python3 tests/tools/sync_guide_data.py [--check]
--check only reports stale pages (exit 1) without writing.
"""
import json
import pathlib
import sys

# ─── Constants ───
ROOT = pathlib.Path(__file__).resolve().parents[2]
PAGES = ['index.html', 'index_co.html']
OPEN_TAG = '<script id="guide-data" type="application/json">'


# ─── Helpers ───
def payload():
    data = {
        'en': (ROOT / 'heuristics.md').read_text(encoding='utf-8'),
        'pl': (ROOT / 'heuristics_pl.md').read_text(encoding='utf-8'),
    }
    return json.dumps(data, ensure_ascii=False, separators=(',', ':')).replace('<', '\\u003c')


def main(check_only):
    blob = payload()
    stale = []
    for name in PAGES:
        path = ROOT / name
        html = path.read_text(encoding='utf-8')
        start = html.index(OPEN_TAG) + len(OPEN_TAG)
        end = html.index('</script>', start)
        if html[start:end] == blob:
            continue
        stale.append(name)
        if not check_only:
            path.write_text(html[:start] + blob + html[end:], encoding='utf-8')
    if check_only:
        print('stale: ' + ', '.join(stale) if stale else 'guide-data up to date')
        return 1 if stale else 0
    print('updated: ' + ', '.join(stale) if stale else 'guide-data already up to date')
    return 0


# ─── Init ───
if __name__ == '__main__':
    sys.exit(main('--check' in sys.argv[1:]))
