# Context

Domain glossary for `@version14/ui`. This file defines the canonical terms used across code, docs, and reviews.

---

## Glossary

**Component** — a React component exported from `@version14/ui` that wraps one or more Ark UI Primitives and applies a PandaCSS Recipe for styling. Components are the only public-facing artifact of this library.

**Primitive** — an unstyled, accessible Ark UI component that provides behavior, keyboard interaction, and ARIA attributes. Primitives are implementation details; they are never exported directly.

**Recipe** — a PandaCSS `sva()` (slot variant) or `cva()` (component variant) definition that encodes the visual Variants of a Component. Recipes live inside the component file, not in a separate directory.

**Slot** — a named part of a multi-slot Component (e.g. `root`, `label`, `icon`). Slots are defined in an `sva()` Recipe and correspond to individual rendered elements.

**Variant** — a named visual alternative of a Component exposed as a prop (e.g. `size`, `intent`). Variants are defined in the Recipe and documented in Storybook.

**Styled System** — the auto-generated code in `src/styled-system/` produced by `panda codegen`. It exposes typed utilities (`css`, `cva`, `sva`, patterns) derived from the design tokens in `panda.config.mjs`. Never edited manually.

**Design Token** — a named value in `panda.config.mjs` (color, spacing, typography, etc.) that is the single source of truth for all visual decisions. Accessed via Styled System utilities.

**Story** — a Storybook file (`*.stories.tsx`) that demonstrates a Component in one or more states. Stories are the primary tool for visual review and are co-located with the Component.
