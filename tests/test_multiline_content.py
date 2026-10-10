#!/usr/bin/env python3
"""Check complete multi-paragraph fields in the linter and both browser parsers."""
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import unittest

ROOT = Path(__file__).resolve().parent.parent
sys.dont_write_bytecode = True
FIXTURE = '''### 37. Przykład testowy

**Opis:** Krótki opis.

**Przykład:** Zadanie: pierwsza część.

Rozumowanie: druga część.
2 + 2 = 4.

Sprawdzenie: ostatnia część.

**Kiedy się przydaje:** Zastosowanie.

**Procedura:**
1. Pierwszy krok.
2. Drugi krok.
3. Trzeci krok.
4. Czwarty krok.
5. Piąty krok.

**Uwaga:** Ostrzeżenie.

**Źródła:** [S1](#s1).

## Kolejna sekcja

Nie należy do źródeł heurystyki.
'''
EXAMPLE = 'Zadanie: pierwsza część.\n\nRozumowanie: druga część.\n2 + 2 = 4.\n\nSprawdzenie: ostatnia część.'


class MultilineContentTests(unittest.TestCase):
    def test_linter_keeps_all_paragraphs(self):
        spec = importlib.util.spec_from_file_location('lint_content', ROOT / 'tests/lint_content.py')
        lint = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(lint)
        entry = lint.parse(FIXTURE, lint.FILES['pl'][1])[37]
        self.assertEqual(entry['fields']['Przykład'], EXAMPLE)
        self.assertEqual(entry['fields']['Źródła'], '[S1](#s1).')
        self.assertEqual(len(entry['steps']), 5)

    def test_browser_parsers_keep_all_paragraphs_and_sources(self):
        for name in ['index.html', 'index_co.html']:
            with self.subTest(page=name):
                source = (ROOT / name).read_text()
                parser = source.split('function parseSchemes(raw) {', 1)[1].split('function parseGuide(raw)', 1)[0]
                script = 'function normalizeLineBreaks(value) { return value.replace(/\\r\\n?/g, "\\n"); }\nfunction parseSchemes(raw) {' + parser
                script += '\nprocess.stdout.write(JSON.stringify(parseSchemes(' + json.dumps(FIXTURE) + ')));'
                result = subprocess.run(['node', '-e', script], capture_output=True, text=True, check=True, timeout=5)
                entry = json.loads(result.stdout)[0]
                self.assertEqual(entry['example'], EXAMPLE)
                self.assertEqual(entry['sources'], '[S1](#s1).')
                self.assertEqual(len(entry['steps']), 5)
                self.assertRegex(source, r'\.scheme-example p\s*\{[^}]*white-space:\s*pre-line')


if __name__ == '__main__':
    unittest.main()
