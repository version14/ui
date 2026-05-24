# Getting Started

This guide walks you through setting up `@v14/ui` locally for component development.

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node | >= 20 | [nodejs.org](https://nodejs.org) |
| pnpm | >= 10 | `npm i -g pnpm` |

---

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/v14/ui.git
   cd ui
   ```

2. **Activate the commit-msg hook** (one-time, after cloning)

   ```bash
   git config core.hooksPath .githooks
   ```

   This enforces [Conventional Commits](https://www.conventionalcommits.org/) on every commit.

3. **Install dependencies**

   ```bash
   pnpm install
   ```

   This also runs `panda codegen` (via the `prepare` script) to generate `src/styled-system/`.

4. **Start Storybook**

   ```bash
   pnpm storybook
   ```

   Open [http://localhost:6006](http://localhost:6006).

---

## Common Commands

```bash
# Generate PandaCSS utilities (run after editing panda.config.mjs)
pnpm prepare

# Start Storybook
pnpm storybook

# Type-check
pnpm check-types

# Run tests (single pass)
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage

# Build the library for publishing
pnpm build
```

---

## Path Aliases

Two aliases are configured across TypeScript, Vite, and Vitest:

| Alias | Resolves to | Use for |
|-------|-------------|---------|
| `@/*` | `src/*` | All internal imports |
| `@styled-system/*` | `src/styled-system/*` | PandaCSS utilities (`css`, `cva`, `sva`) |

Example:

```ts
import { css } from "@styled-system/css";
import { MyButton } from "@/components/Button";
```

---

## Adding a Component

1. Create a folder under `src/components/`:

   ```
   src/components/Button/
   ├── Button.tsx
   ├── Button.test.tsx
   ├── Button.stories.tsx
   └── index.ts
   ```

2. Export from the folder's `index.ts`:

   ```ts
   export { Button } from "./Button";
   export type { ButtonProps } from "./Button";
   ```

3. Re-export from `src/components/index.ts`:

   ```ts
   export * from "./Button";
   ```

The component is now part of the public API via `src/index.ts`.

---

## Troubleshooting

**`src/styled-system` is empty or missing**

Run `pnpm prepare` to regenerate it.

**Path alias not resolving in IDE**

Make sure your IDE uses the project's TypeScript version (not a global one). In VS Code: `TypeScript: Select TypeScript Version` → `Use Workspace Version`.

**Storybook cannot find a component**

Confirm the story file ends in `.stories.tsx` — only that extension is picked up.

For other issues, see the [FAQ](../developer-guide/faq.md) or open a Discussion.
