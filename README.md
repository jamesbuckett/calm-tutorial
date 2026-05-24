# CALM Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jamesbuckett/calm-tutorial?style=social)](https://github.com/jamesbuckett/calm-tutorial/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/jamesbuckett/calm-tutorial)](https://github.com/jamesbuckett/calm-tutorial/commits)
[![Open issues](https://img.shields.io/github/issues/jamesbuckett/calm-tutorial)](https://github.com/jamesbuckett/calm-tutorial/issues)

> A FINOS CALM primer for architects in regulated financial environments.

## About

Introduces the FINOS Common Architecture Language Model (CALM) for architects working in regulated industries — banking, payments, and capital markets. Ships as a single self-contained `index.html` file with no build step, no framework, and no server. Covers core concepts, regulatory mapping (DORA, MAS TRM, APRA CPS 234, SWIFT CSCF), Ubuntu installation, a hands-on tutorial, and a glossary.

## Usage

```bash
# open directly
xdg-open index.html        # Linux
open index.html            # macOS

# or serve over HTTP
python3 -m http.server 8080
```

## Project Structure

```
.
├── CLAUDE.md          # frontend rules + screenshot loop the AI assistant follows
├── index.html         # the entire site
├── screenshot.mjs     # Playwright capture harness (mobile / tablet / desktop)
├── scripts/           # one-shot helpers (e.g. capture-hero.mjs)
├── assets/            # committed images referenced from the README
└── package.json       # one dependency: playwright
```

## Contributing

Issues and pull requests welcome. Please open an issue first to discuss substantial changes.

## License

[MIT](LICENSE) © 2026 James Buckett
