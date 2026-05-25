import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    intent: { control: "select", options: ["primary", "secondary", "ghost"] },
    disabled: { control: "boolean" },
    children: { control: "text" },
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

export const Ghost: Story = {
  args: { children: "Button", intent: "ghost" },
};

export const Small: Story = {
  args: { children: "Button", size: "sm" },
};

export const Large: Story = {
  args: { children: "Button", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Button", disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
      <Button intent="primary" size="sm">
        Primary SM
      </Button>
      <Button intent="primary" size="md">
        Primary MD
      </Button>
      <Button intent="primary" size="lg">
        Primary LG
      </Button>
      <Button intent="secondary" size="sm">
        Secondary SM
      </Button>
      <Button intent="secondary" size="md">
        Secondary MD
      </Button>
      <Button intent="secondary" size="lg">
        Secondary LG
      </Button>
      <Button intent="ghost" size="sm">
        Ghost SM
      </Button>
      <Button intent="ghost" size="md">
        Ghost MD
      </Button>
      <Button intent="ghost" size="lg">
        Ghost LG
      </Button>
    </div>
  ),
};
