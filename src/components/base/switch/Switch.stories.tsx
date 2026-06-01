import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwitchControl, SwitchLabel, SwitchRoot, SwitchThumb } from "./Switch";

const meta: Meta<typeof SwitchRoot> = {
  title: "Base/Switch",
  component: SwitchRoot,
  parameters: { layout: "centered" },
  argTypes: {
    defaultChecked: { control: "boolean", description: "Initially on" },
    disabled: { control: "boolean", description: "Disable the switch" },
  },
  args: { defaultChecked: false, disabled: false },
};
export default meta;

type Story = StoryObj<typeof SwitchRoot>;

export const Default: Story = {
  render: (args) => (
    <SwitchRoot {...args}>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Auto-deploy</SwitchLabel>
    </SwitchRoot>
  ),
};

export const Checked: Story = {
  args: { defaultChecked: true },
  render: (args) => (
    <SwitchRoot {...args}>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Enabled</SwitchLabel>
    </SwitchRoot>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <SwitchRoot {...args}>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Disabled</SwitchLabel>
    </SwitchRoot>
  ),
};
