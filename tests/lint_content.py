#!/usr/bin/env python3
"""Structural and style checks for heuristics.md and heuristics_pl.md.

Usage: python3 tests/lint_content.py [--base REF] [--strict]
Fails (exit 1) on structure errors; prints warnings that a reviewer must read.
--base REF compares protected fields with git REF (default: main).
--strict also fails on style warnings (redundant "For example" opener).
--allow-polish-edits permits intentional Polish editorial changes except sources.
"""
import re
import subprocess
import sys
import pathlib

# ─── Constants ───
ROOT = pathlib.Path(__file__).resolve().parent.parent
FILES = {
    'en': ('heuristics.md', ['Description', 'Example', 'Useful for', 'Procedure', 'Watch out', 'Sources']),
    'pl': ('heuristics_pl.md', ['Opis', 'Przykład', 'Kiedy się przydaje', 'Procedura', 'Uwaga', 'Źródła']),
}
LIMITS = {'en': {'d': (45, 100), 'e': (45, 120)}, 'pl': {'d': (45, 115), 'e': (45, 150)}}
SCHEME_COUNT = 37
EM_DASH = '\u2014'
STRICT = '--strict' in sys.argv[1:]
ALLOW_POLISH_EDITS = '--allow-polish-edits' in sys.argv[1:]

errors = []
warnings = []


# ─── Helpers ───
def parse(text, names):
    schemes = {}
    for match in re.finditer(r'^### (\d+)\. (.+)\n([\s\S]*?)(?=^### |^## |\Z)', text, re.M):
        sid, title, body = int(match.group(1)), match.group(2).strip(), match.group(3)
        fields = {}
        for name in names:
            found = re.search(r'^\*\*' + re.escape(name) + r':\*\*[ \t]*([\s\S]*?)(?=^\*\*[^\n]+:\*\*|\Z)', body, re.M)
            fields[name] = found.group(1).strip() if found else None
        proc = re.search(r'^\*\*' + re.escape(names[3]) + r':\*\*\s*\n((?:\d+\..*\n?)+)', body, re.M)
        steps = re.findall(r'^\d+\.\s+(.+)$', proc.group(1), re.M) if proc else []
        schemes[sid] = {'title': title, 'fields': fields, 'steps': steps}
    return schemes


def numbers(text):
    return sorted(re.findall(r'\d+(?:[.,]\d+)?', text.replace(',', '.')))


def git_show(ref, name):
    try:
        return subprocess.run(['git', '-C', str(ROOT), 'show', f'{ref}:{name}'], capture_output=True, text=True, check=True).stdout
    except (subprocess.CalledProcessError, FileNotFoundError):
        return None


def main():
    base = 'main'
    if '--base' in sys.argv:
        base = sys.argv[sys.argv.index('--base') + 1]
    parsed = {}
    for lang, (name, names) in FILES.items():
        text = (ROOT / name).read_text(encoding='utf-8')
        if EM_DASH in text:
            errors.append(f'{name}: contains an em dash')
        schemes = parse(text, names)
        parsed[lang] = schemes
        if sorted(schemes) != list(range(1, SCHEME_COUNT + 1)):
            errors.append(f'{name}: scheme ids are {sorted(schemes)}')
        for sid, scheme in schemes.items():
            for field, value in scheme['fields'].items():
                if not value and field != names[3]:
                    errors.append(f'{name} #{sid}: missing {field}')
            if len(scheme['steps']) != 5:
                errors.append(f'{name} #{sid}: procedure has {len(scheme["steps"])} steps')
            for key, field in (('d', names[0]), ('e', names[1])):
                value = scheme['fields'].get(field) or ''
                words = len(value.split())
                low, high = LIMITS[lang][key]
                if not low <= words <= high:
                    errors.append(f'{name} #{sid}: {field} has {words} words (allowed {low}-{high})')
                if re.match(r'(For example|Na przykład)\b', value):
                    (errors if STRICT else warnings).append(f'{name} #{sid}: {field} starts with a redundant "for example"')
                if lang == 'pl':
                    if '"' in value or '“' in value:
                        errors.append(f'{name} #{sid}: {field} uses non-Polish quotes')
                    if value.count('„') != value.count('”'):
                        errors.append(f'{name} #{sid}: {field} has unbalanced „” quotes')
        old_text = git_show(base, name)
        if old_text is None:
            warnings.append(f'cannot read {base}:{name}; protected-field check skipped')
            continue
        old = parse(old_text, names)
        for sid in schemes:
            if sid not in old:
                continue
            allow_edit = lang == 'pl' and ALLOW_POLISH_EDITS
            if not allow_edit and schemes[sid]['title'] != old[sid]['title']:
                errors.append(f'{name} #{sid}: title changed')
            if not allow_edit and schemes[sid]['steps'] != old[sid]['steps']:
                errors.append(f'{name} #{sid}: procedure changed')
            for field in names[2:]:
                if allow_edit and field != names[5]:
                    continue
                if field != names[3] and schemes[sid]['fields'].get(field) != old[sid]['fields'].get(field):
                    errors.append(f'{name} #{sid}: protected field {field} changed')
    for sid in range(1, SCHEME_COUNT + 1):
        en, pl = parsed['en'].get(sid), parsed['pl'].get(sid)
        if en and pl and numbers(en['fields']['Example'] or '') != numbers(pl['fields']['Przykład'] or ''):
            warnings.append(f'#{sid}: numbers differ between EN and PL example (check translation)')
    for line in warnings:
        print('WARN  ' + line)
    for line in errors:
        print('FAIL  ' + line)
    print(f'{len(errors)} errors, {len(warnings)} warnings')
    return 1 if errors else 0


# ─── Init ───
if __name__ == '__main__':
    sys.exit(main())
