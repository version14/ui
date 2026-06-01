import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Base/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  argTypes: {
    intent: {
      control: "select",
      options: ["default", "accent", "success", "warning", "danger", "info", "solid"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "stable", intent: "default" } };
export const Accent: Story = { args: { children: "v1.4.0", intent: "accent" } };
export const Success: Story = { args: { children: "deployed", intent: "success" } };
export const Warning: Story = { args: { children: "pending", intent: "warning" } };
export const Danger: Story = { args: { children: "failed", intent: "danger" } };
export const Info: Story = { args: { children: "queued", intent: "info" } };
export const Solid: Story = { args: { children: "new", intent: "solid" } };

export const AllIntents: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {(["default", "accent", "success", "warning", "danger", "info", "solid"] as const).map(
        (i) => (
          <Badge key={i} intent={i}>
            {i}
          </Badge>
        ),
      )}
    </div>
  ),
};
