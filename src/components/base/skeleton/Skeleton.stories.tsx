import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Base/Skeleton",
  component: Skeleton,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    width: { control: "text", description: "CSS width value" },
    height: { control: "number", description: "Height in px" },
  },
  args: { width: "100%", height: 16 },
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => <Skeleton {...args} />,
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Skeleton width="100%" height={20} />
      <Skeleton width="70%" height={14} />
      <Skeleton width="100%" height={80} />
      <div style={{ display: "flex", gap: 8 }}>
        <Skeleton width={80} height={32} />
        <Skeleton width={80} height={32} />
      </div>
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} width="100%" height={40} />
      ))}
    </div>
  ),
};
