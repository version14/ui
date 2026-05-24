# @v14/ui

[![CI](https://github.com/v14/ui/actions/workflows/ci.yml/badge.svg)](https://github.com/v14/ui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

V14's internal React component library — accessible, headless primitives from [Ark UI](https://ark-ui.com) styled with [PandaCSS](https://panda-css.com).

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Development](#development)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

`@v14/ui` provides a curated set of React components used across V14 products. Components are built on top of Ark UI for accessibility and behavior, styled through PandaCSS recipes for full design-token integration.

**Key properties:**

- Fully typed — strict TypeScript throughout
- Accessible — ARIA compliance via Ark UI primitives
- Themeable — all visual variants are PandaCSS `sva()` recipes
- Tree-shakeable — dual ESM/CJS build, `sideEffects: false`

---

## Getting Started

### Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node | >= 20 | [nodejs.org](https://nodejs.org) |
| pnpm | >= 10 | `npm i -g pnpm` |

### Installation

```bash
git clone https://github.com/v14/ui.git
cd ui

git config core.hooksPath .githooks

pnpm install
```

See [docs/getting-started/README.md](docs/getting-started/README.md) for the full setup guide.

---

## Development

```bash
# Generate PandaCSS styled-system
pnpm prepare

# Start Storybook (component explorer)
pnpm storybook

# Type-check without emitting
pnpm check-types

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Build the library
pnpm build
```

---

## Architecture

```
.
├── src/
│   ├── components/        # UI components (one folder per component)
│   ├── styled-system/     # PandaCSS generated output — do not edit
│   ├── test/              # Vitest setup and shared test utilities
│   ├── global.css         # PandaCSS layer declarations
│   └── index.ts           # Public API barrel export
├── .storybook/            # Storybook configuration
├── docs/                  # Developer documentation
├── tsconfig.json          # TypeScript — strict mode + path aliases
├── tsup.config.ts         # Library build (dual ESM + CJS)
├── vite.config.ts         # Vite for Storybook
├── vitest.config.ts       # Test runner
└── panda.config.mjs       # PandaCSS configuration
```

Path aliases available everywhere (IDE, build, tests, Storybook):

| Alias | Resolves to |
|-------|-------------|
| `@/*` | `src/*` |
| `@styled-system/*` | `src/styled-system/*` |

---

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

---

## License

Distributed under the [MIT License](LICENSE).
