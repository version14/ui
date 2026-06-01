import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./Separator";

const meta: Meta<typeof Separator> = {
  title: "Base/Separator",
  component: Separator,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Separator direction",
    },
    accent: { control: "boolean", description: "Use accent color" },
  },
  args: { orientation: "horizontal", accent: false },
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (args) => <Separator {...args} />,
};

export const Accent: Story = {
  args: { accent: true },
  render: (args) => <Separator {...args} />,
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", height: 40, gap: 12 }}>
      <span style={{ fontSize: 13 }}>Builds</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 13 }}>Deployments</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: 13 }}>Logs</span>
    </div>
  ),
};
