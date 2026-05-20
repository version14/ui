# Component Architecture

How components in `@version14/ui` are structured and why.

---

## Layers

Every component has two layers:

1. **Primitive** — the Ark UI headless component. Handles accessibility, keyboard interaction, and ARIA attributes. Never styled directly.
2. **Recipe** — a PandaCSS `sva()` definition. Encodes all visual variants. Never contains behavior logic.

The component function glues them together: it spreads the recipe classes onto the primitive slots.

---

## File Structure

```
src/components/Button/
├── Button.tsx          ← glue: primitive + recipe
├── Button.test.tsx     ← render, keyboard, a11y
├── Button.stories.tsx  ← one story per variant combination
└── index.ts            ← re-exports Button and ButtonProps
```

---

## Implementation Pattern

```tsx
import { ark } from "@ark-ui/react";
import { sva } from "@styled-system/css";
import type { HTMLArkProps } from "@ark-ui/react";

const buttonRecipe = sva({
  slots: ["root"],
  base: {
    root: { display: "inline-flex", alignItems: "center", cursor: "pointer" },
  },
  variants: {
    size: {
      sm: { root: { h: "8", px: "3", textStyle: "sm" } },
      md: { root: { h: "10", px: "4", textStyle: "md" } },
    },
    intent: {
      primary: { root: { bg: "blue.500", color: "white" } },
      secondary: { root: { bg: "transparent", borderWidth: "1px" } },
    },
  },
  defaultVariants: { size: "md", intent: "primary" },
});

export interface ButtonProps extends HTMLArkProps<"button"> {
  size?: "sm" | "md";
  intent?: "primary" | "secondary";
}

export function Button({ size, intent, className, ...props }: ButtonProps) {
  const classes = buttonRecipe({ size, intent });
  return <ark.button className={classes.root} {...props} />;
}
Button.displayName = "Button";
```

---

## Public API Rules

- **Every variant the consumer controls is a prop.** Internal states (hover, focus) are not props — they are handled by Ark UI or CSS.
- **Do not leak PandaCSS internals.** Consumers should never need to import from `@styled-system/` to use a component.
- **Accept `className`** on the root element so consumers can override if needed.
- **Forward refs** on all interactive elements (inputs, buttons, triggers).

---

## Barrel Exports

Each component's `index.ts` re-exports the component and its props type:

```ts
export { Button } from "./Button";
export type { ButtonProps } from "./Button";
```

`src/components/index.ts` re-exports all components:

```ts
export * from "./Button";
export * from "./Input";
```

`src/index.ts` is the public API entry point — it only re-exports from `src/components/index.ts`.

---

## Testing Requirements

Every component must have tests covering:

1. **Render** — mounts without throwing
2. **Props** — visual variants render the expected classes
3. **Keyboard interaction** — Tab, Enter, Space, Escape where applicable
4. **Accessibility** — `toHaveNoViolations()` or explicit ARIA assertions

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

test("renders without crashing", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
});

test("is keyboard focusable", async () => {
  const user = userEvent.setup();
  render(<Button>Click me</Button>);
  await user.tab();
  expect(screen.getByRole("button")).toHaveFocus();
});
```

---

## Storybook Requirements

Every component must have:

- A `Default` story showing the most common usage
- One story per meaningful variant combination
- Use `argTypes` to expose props in the Controls panel

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
    intent: { control: "select", options: ["primary", "secondary"] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button" },
};

export const Secondary: Story = {
  args: { children: "Button", intent: "secondary" },
};
```
