#!/usr/bin/env python3
"""Static checks for animations/ and the reader pages that load them.

Usage: python3 tests/lint_animations.py [--ids 1,26,27]
Without --ids every scheme 1-37 must have a real animation.
"""
import re
import sys
import pathlib

# ─── Constants ───
ROOT = pathlib.Path(__file__).resolve().parent.parent
ANIM = ROOT / 'animations'
PAGES = ['index.html', 'index_co.html']
SCHEME_COUNT = 37
COLOR_LITERAL = re.compile(r'#[0-9a-fA-F]{3}\b|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{8}\b|\brgba?\(|\bhsla?\(')
FORBIDDEN_IN_SCHEME = ['document.', 'innerHTML', 'setTimeout', 'setInterval', 'eval(', '.style.', 'rotate(', 'scale(', 'font-size', 'fontSize']
PARTIAL_BORDER = re.compile(r'border-(?:top|bottom|left|right)(?:-color)?\s*:[^;]*var\(--(?:yellow|blue|green|red|anim-accent|anim-good|anim-bad|anim-info)')

errors = []


# ─── Helpers ───
def check_runtime():
    for name in ['runtime.js', 'animations.css']:
        path = ANIM / name
        if not path.exists():
            errors.append(f'missing animations/{name}')
            continue
        text = path.read_text(encoding='utf-8')
        if '\u2014' in text:
            errors.append(f'animations/{name}: em dash')
        if name.endswith('.css'):
            body = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
            if COLOR_LITERAL.search(body):
                errors.append('animations/animations.css: colour literal (use page tokens)')
            if PARTIAL_BORDER.search(body):
                errors.append('animations/animations.css: partial coloured border')


def check_scheme(sid, required):
    path = ANIM / f'{sid:02d}.js'
    if not path.exists():
        errors.append(f'missing animations/{sid:02d}.js')
        return
    text = path.read_text(encoding='utf-8')
    registered = re.findall(r'HeurAnim\.register\(\s*(\d+)\s*,', text)
    if not registered:
        if required:
            errors.append(f'animations/{sid:02d}.js: no HeurAnim.register call')
        return
    if registered != [str(sid)]:
        errors.append(f'animations/{sid:02d}.js: registers {registered}, expected [{sid}]')
    if COLOR_LITERAL.search(text):
        errors.append(f'animations/{sid:02d}.js: colour literal')
    if '\u2014' in text:
        errors.append(f'animations/{sid:02d}.js: em dash')
    for token in FORBIDDEN_IN_SCHEME:
        if token in text:
            errors.append(f'animations/{sid:02d}.js: forbidden token {token!r}')


def check_pages():
    expected = ['animations/runtime.js'] + [f'animations/{sid:02d}.js' for sid in range(1, SCHEME_COUNT + 1)]
    for name in PAGES:
        html = (ROOT / name).read_text(encoding='utf-8')
        if '<link rel="stylesheet" href="animations/animations.css">' not in html:
            errors.append(f'{name}: missing animations.css link')
        found = re.findall(r'<script src="(animations/[^"]+)"></script>', html)
        if found != expected:
            errors.append(f'{name}: animation scripts are not runtime + 01..37 in order')
        main_script = html.find('<script>\n/* ─── Constants ─── */')
        if main_script < 0 or any(html.find(f'src="{src}"') > main_script for src in expected):
            errors.append(f'{name}: animation scripts must load before the main inline script')


def main():
    ids = list(range(1, SCHEME_COUNT + 1))
    full = '--ids' not in sys.argv
    if not full:
        ids = [int(x) for x in sys.argv[sys.argv.index('--ids') + 1].split(',')]
    check_runtime()
    for sid in range(1, SCHEME_COUNT + 1):
        check_scheme(sid, required=full or sid in ids)
    check_pages()
    for line in errors:
        print('FAIL  ' + line)
    print(f'{len(errors)} errors')
    return 1 if errors else 0


# ─── Init ───
if __name__ == '__main__':
    sys.exit(main())
