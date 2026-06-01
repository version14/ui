import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  SliderControl,
  SliderLabel,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValueText,
} from "./Slider";

const meta: Meta = {
  title: "Base/Slider",
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    min: { control: { type: "number" }, description: "Minimum value" },
    max: { control: { type: "number" }, description: "Maximum value" },
    step: { control: { type: "number" }, description: "Step size" },
    disabled: { control: "boolean", description: "Disable the slider" },
  },
  args: { min: 0, max: 100, step: 1, disabled: false },
};
export default meta;

type Story = StoryObj<{ min: number; max: number; step: number; disabled: boolean }>;

export const Default: Story = {
  render: (args) => (
    <SliderRoot
      defaultValue={[40]}
      min={args.min}
      max={args.max}
      step={args.step}
      disabled={args.disabled}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SliderLabel>CPU limit</SliderLabel>
        <SliderValueText />
      </div>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
    </SliderRoot>
  ),
};

export const Range: Story = {
  render: () => (
    <SliderRoot defaultValue={[20, 70]} min={0} max={100}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SliderLabel>Memory range</SliderLabel>
        <SliderValueText />
      </div>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
        <SliderThumb index={1} />
      </SliderControl>
    </SliderRoot>
  ),
};
