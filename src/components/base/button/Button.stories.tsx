import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger", "link", "link-arrow"],
    },
    size: { control: "select", options: ["sm", "md", "lg", "icon"] },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary", children: "Deploy" } };
export const Secondary: Story = { args: { variant: "secondary", children: "Cancel" } };
export const Outline: Story = { args: { variant: "outline", children: "View logs" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Settings" } };
export const Danger: Story = { args: { variant: "danger", children: "Delete build" } };
export const Link: Story = { args: { variant: "link", children: "Learn more" } };
export const LinkArrow: Story = { args: { variant: "link-arrow", children: "Explore docs" } };
export const Disabled: Story = {
  args: { variant: "primary", children: "Disabled", disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      {(["primary", "secondary", "outline", "ghost", "danger", "link"] as const).map((v) => (
        <Button key={v} variant={v}>
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button variant="secondary" size="sm">
        Small
      </Button>
      <Button variant="secondary" size="md">
        Default
      </Button>
      <Button variant="secondary" size="lg">
        Large
      </Button>
    </div>
  ),
};
