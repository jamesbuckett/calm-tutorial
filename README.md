# CALM Tutorial

[![License](https://img.shields.io/github/license/jamesbuckett/calm-tutorial)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jamesbuckett/calm-tutorial?style=social)](https://github.com/jamesbuckett/calm-tutorial/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/jamesbuckett/calm-tutorial)](https://github.com/jamesbuckett/calm-tutorial/commits)
[![Open issues](https://img.shields.io/github/issues/jamesbuckett/calm-tutorial)](https://github.com/jamesbuckett/calm-tutorial/issues)

> A FINOS CALM primer for architects in regulated financial environments.

![CALM Tutorial hero — the Common Architecture Language Model](assets/hero.png)

## About

Introduces the FINOS Common Architecture Language Model (CALM) for architects working in regulated industries — banking, payments, and capital markets. Ships as a single self-contained `index.html` file with no build step, no framework, and no server. Covers the core primitives (nodes, interfaces, relationships, controls, flows), regulatory evidence mapping (DORA, PCI DSS, MAS TRM, APRA CPS 234, HKMA TM-G-1, OSFI B-13, SWIFT CSCF), an Ubuntu 26.04 install guide, the official conference-signup tutorial with a self-hosted CALM Hub, and a glossary. Commands, versions, and clause citations were verified against primary sources as of July 2026 (spec release 1.2, CLI 1.47).

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
