# ADR 0001 — Foundation: Ark UI + PandaCSS

**Date:** 2026-05-24
**Status:** Accepted

---

## Context

`@version14/ui` needs a component foundation that is:

1. **Accessible** — ARIA patterns, keyboard navigation, and focus management handled out of the box
2. **Unstyled** — full design control without fighting library-owned CSS
3. **Type-safe** — strict TypeScript throughout the component API
4. **Token-integrated** — visual variants defined in terms of design tokens, not raw CSS values

The main candidates evaluated were:

| Option | Behavior | Styling |
|--------|----------|---------|
| Radix UI + Tailwind | Headless primitives | Utility classes |
| shadcn/ui | Radix UI | Tailwind CVA |
| Ark UI + PandaCSS | Headless primitives | CSS-in-JS codegen |
| Headless UI + custom CSS | Partial primitives | Manual |

---

## Decision

Use **Ark UI** for headless primitives and **PandaCSS** for styling.

---

## Rationale

**Ark UI** covers a broader set of complex components than Radix (Date Picker, Combobox, Color Picker) under a single, consistent API surface. The `ark.*` factory and `HTMLArkProps` type make it straightforward to create typed wrappers without reimplementing any behavior.

**PandaCSS** generates static utility classes at build time (no runtime), produces typed helpers (`css()`, `cva()`, `sva()`) from design tokens, and integrates with the token system without a separate runtime dependency. The `sva()` (slot variant) API maps naturally onto multi-slot Ark UI components.

The combination means:
- Zero runtime CSS-in-JS overhead
- Full type safety on both behavior (Ark) and style (PandaCSS)
- A single place (`panda.config.mjs`) to manage all design tokens

---

## Trade-offs

- **PandaCSS requires codegen** — contributors must run `pnpm prepare` after editing `panda.config.mjs`. The generated `src/styled-system/` is committed to the repository.
- **Ark UI is less widely known** than Radix — onboarding cost is slightly higher; the [Ark UI docs](https://ark-ui.com) are the reference.
- **No drop-in shadcn/ui components** — all components must be written from scratch following the pattern in [component-architecture.md](../guidelines/component-architecture.md).

---

## Consequences

- `@ark-ui/react` and `@pandacss/dev` are peer dependencies.
- `src/styled-system/` is checked into git and regenerated on `pnpm install` via the `prepare` script.
- All component styling is done through `sva()` or `cva()` — raw CSS strings in component files are not permitted.
