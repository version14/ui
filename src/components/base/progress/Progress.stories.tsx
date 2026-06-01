import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressRange, ProgressRoot, ProgressTrack } from "./Progress";

const meta: Meta = {
  title: "Base/Progress",
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Current value (null = indeterminate)",
    },
    striped: { control: "boolean", description: "Animated stripes" },
  },
  args: { value: 42, striped: false },
};
export default meta;

type Story = StoryObj<{ value: number | null; striped: boolean }>;

export const Default: Story = {
  render: (args) => (
    <ProgressRoot value={args.value} max={100}>
      <ProgressTrack>
        <ProgressRange striped={args.striped} />
      </ProgressTrack>
    </ProgressRoot>
  ),
};

export const Striped: Story = {
  args: { value: 68, striped: true },
  render: (args) => (
    <ProgressRoot value={args.value} max={100}>
      <ProgressTrack>
        <ProgressRange striped={args.striped} />
      </ProgressTrack>
    </ProgressRoot>
  ),
};

export const Indeterminate: Story = {
  args: { value: null },
  render: (args) => (
    <ProgressRoot value={args.value} max={100}>
      <ProgressTrack>
        <ProgressRange />
      </ProgressTrack>
    </ProgressRoot>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {[10, 40, 72, 100].map((v) => (
        <ProgressRoot key={v} value={v} max={100}>
          <ProgressTrack>
            <ProgressRange />
          </ProgressTrack>
        </ProgressRoot>
      ))}
    </div>
  ),
};
