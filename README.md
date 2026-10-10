# Heuristics

A bilingual (Polish / English) reference of 37 problem-solving heuristics, published at
https://workszop.github.io/heuristics/ (GitHub Pages, built from `main`, repo root).

## Files in this repository

Everything listed here is tracked by git. Anything else in the working directory is local-only.

| Path | Role |
|---|---|
| `index.html` | Main reader (the published site). Embeds both Markdown files as JSON. |
| `index_co.html` | Alternate reader with the edulab wordmark; same logic as `index.html`. |
| `heuristics_pl.md` | Polish content, source of truth for the readers. |
| `heuristics.md` | English content, source of truth for the readers. |
| `heuristics.html` | Older 12-chapter version, kept for reference. |
| `*.docx`, `*.pdf` (3 + 2 files in the root) | Source documents S1-S5. They stay in the root because the Sources page links to them by file name. |
| `tools/sync_guide_data.py` | Re-embeds the Markdown files into both readers after content edits. |
| `tests/lint_content.py` | Structure and style checks for the Markdown content. |
| `tests/test_multiline_content.py` | Checks that multi-line fields survive embedding. |
| `.nojekyll` | Serves the site as-is on GitHub Pages. |
| `.gitignore` | Keeps local working files out of the repo. |
| `README.md` | This file. |

## Local-only files

Plans, reviews, scratch scripts, screenshots and draft illustrations live in `_local/`, which is
git-ignored. Do not put working artifacts anywhere else.

## Workflow

1. Edit `heuristics_pl.md` / `heuristics.md`.
2. Run `python3 tools/sync_guide_data.py` to update both readers (`--check` only reports).
3. Run `python3 tests/lint_content.py` and `python3 tests/test_multiline_content.py`.
4. Open a reader and run "Kontrola dokumentu" (or `App.verify()` in the console).
