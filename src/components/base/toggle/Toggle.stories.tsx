import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextAlignCenter } from "pixelarticons/react/TextAlignCenter";
import { TextAlignLeft } from "pixelarticons/react/TextAlignLeft";
import { TextAlignRight } from "pixelarticons/react/TextAlignRight";
import { Toggle, ToggleGroupItem, ToggleGroupRoot } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Base/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  argTypes: {
    pressed: { control: "boolean", description: "Controlled pressed state" },
    disabled: { control: "boolean", description: "Disable the toggle" },
  },
  args: { pressed: false, disabled: false },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Single: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Align left">
      <TextAlignLeft width={15} height={15} />
    </Toggle>
  ),
};

export const Group: Story = {
  render: () => (
    <ToggleGroupRoot>
      {["Day", "Week", "Month"].map((label) => (
        <ToggleGroupItem key={label} value={label.toLowerCase()}>
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  ),
};

export const Alignment: Story = {
  render: () => (
    <ToggleGroupRoot>
      <ToggleGroupItem value="left" aria-label="Align left">
        <TextAlignLeft width={14} height={14} />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <TextAlignCenter width={14} height={14} />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <TextAlignRight width={14} height={14} />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};
