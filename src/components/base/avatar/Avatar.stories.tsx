import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarFallback, AvatarImage, AvatarRoot } from "./Avatar";

const meta: Meta<typeof AvatarRoot> = {
  title: "Base/Avatar",
  component: AvatarRoot,
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Avatar size",
    },
    shape: {
      control: "select",
      options: ["square", "circle"],
      description: "Avatar shape",
    },
    accent: {
      control: "boolean",
      description: "Use accent background",
    },
  },
  args: {
    size: "md",
    shape: "square",
    accent: false,
  },
};
export default meta;

type Story = StoryObj<typeof AvatarRoot>;

export const Default: Story = {
  render: (args) => (
    <AvatarRoot {...args}>
      <AvatarFallback>MS</AvatarFallback>
    </AvatarRoot>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <AvatarRoot {...args}>
      <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User avatar" />
      <AvatarFallback>MS</AvatarFallback>
    </AvatarRoot>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <AvatarRoot size="sm">
        <AvatarFallback>S</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size="md">
        <AvatarFallback>M</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size="lg">
        <AvatarFallback>L</AvatarFallback>
      </AvatarRoot>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <AvatarRoot size="md" shape="square">
        <AvatarFallback>SQ</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot size="md" shape="circle">
        <AvatarFallback>CI</AvatarFallback>
      </AvatarRoot>
    </div>
  ),
};

export const Accent: Story = {
  render: (args) => (
    <AvatarRoot {...args} accent>
      <AvatarFallback>14</AvatarFallback>
    </AvatarRoot>
  ),
};
