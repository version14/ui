# Code Style Guide

Consistency matters more than any individual rule. When in doubt, follow existing patterns.

---

## Tooling

```bash
# Type-check the entire project
pnpm check-types 

# Run all tests
pnpm test
```

Both must pass before pushing. CI enforces this automatically.

---

## TypeScript

- **Always write explicit return types** on exported functions and components.
- **Never use `any`.** Use `unknown` and narrow it, or `never` for exhaustive checks.
- **Prefer `interface` for component props**, `type` for unions and mapped types.
- **Use `import type`** for type-only imports (`import type { FC } from "react"`).
- `exactOptionalPropertyTypes` is on — do not assign `undefined` to an optional prop to "unset" it; simply omit it.

---

## Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Files | `PascalCase` for components, `camelCase` for utilities | `Button.tsx`, `mergeRefs.ts` |
| Component | `PascalCase` | `IconButton` |
| Props interface | `ComponentNameProps` | `IconButtonProps` |
| Hooks | `useCamelCase` | `useControllableState` |
| PandaCSS recipe | `componentNameRecipe` | `buttonRecipe` |
| Constants | `UPPER_SNAKE_CASE` | `DEFAULT_TRANSITION` |

---

## Component Structure

Every component lives in its own folder:

```
src/components/Button/
├── Button.tsx          ← implementation
├── Button.test.tsx     ← unit + a11y tests
├── Button.stories.tsx  ← Storybook stories
└── index.ts            ← public re-export
```

Component file order:

1. Imports
2. Types / interfaces
3. PandaCSS recipe (`sva()` / `cva()`)
4. Component function
5. `displayName` assignment
6. Named export

---

## PandaCSS Conventions

- Use `sva()` for multi-slot components, `cva()` for single-root ones.
- Co-locate the recipe with the component — do not create a separate `recipes/` folder.
- Name recipe slots after their semantic role, not their HTML element: `root`, `label`, `icon`, `indicator`.
- Only expose variants that consumers actually need. Internals that never vary are not variants.

```ts
const buttonRecipe = sva({
  slots: ["root", "icon"],
  base: {
    root: { display: "inline-flex", alignItems: "center" },
    icon: { flexShrink: 0 },
  },
  variants: {
    size: {
      sm: { root: { px: "3", h: "8" } },
      md: { root: { px: "4", h: "10" } },
    },
    intent: {
      primary: { root: { bg: "blue.500", color: "white" } },
      secondary: { root: { bg: "gray.100", color: "gray.900" } },
    },
  },
  defaultVariants: { size: "md", intent: "primary" },
});
```

---

## Imports

Order, separated by blank lines:

1. React and built-ins
2. Third-party packages (`@ark-ui/react`, etc.)
3. Internal via `@/` alias
4. Internal via `@styled-system/` alias
5. Relative imports

---

## Formatting

- **Indentation**: 2 spaces
- **Max line length**: 100 characters
- **Quotes**: double
- **Trailing commas**: all
- **Semicolons**: yes

---

## Error Handling

- Never swallow errors silently.
- Validate at component boundaries (prop types), not inside helpers.
- Prefer descriptive thrown errors over returning `null` in utilities.

---

## Running the Full Validation Suite

```bash
pnpm check-types   # TypeScript
pnpm test        # Vitest
pnpm build       # tsup (catches tree-shaking / export issues)
```

All three must pass before pushing.
