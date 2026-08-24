# CLAUDE.md

Rules for this repo. Everything here is something the code does not imply on its own.

## The constraint

One self-contained `index.html` — no build step, no framework, no server. Keep it that way:
no bundler, no external stylesheet, no CDN script. The only permitted remote asset is the
Google Fonts `<link>`.

## Build chassis

Apply `skill-style-guide` (visual chassis) before `skill-build-educational-site` (content
architecture). Without those skills installed, match the palette, spacing scale, and single
blue accent already in `index.html`.

## Verify before reporting done

1. `npm run validate` — static rules on `index.html` and `presentation.html`. CI runs
   the same check on every push and pull request.
2. `npm run screenshots` — writes `mobile.png`, `tablet.png`, `desktop.png` to
   `screenshots/`.
3. Look at all three. Mobile is a first-class deliverable; never skip that viewport.
4. A `Stop` hook blocks completion until the validator is clean and those three files
   exist. Fix the page or the harness — do not work around it.

## Content accuracy

Commands, version numbers, and regulatory clause citations are verified against primary
sources (spec 1.2, CLI 1.47, as of July 2026). Never invent or bump a version, clause, or
command — verify it against the source or leave it alone.

## Generated files

`presentation.html` is generated from `index.html` — regenerate it rather than hand-editing.
`screenshots/` and `outline.json` are gitignored artifacts.
