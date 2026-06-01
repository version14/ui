import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check } from "pixelarticons/react/Check";
import { CheckboxControl, CheckboxIndicator, CheckboxLabel, CheckboxRoot } from "./Checkbox";

const Indicator = () => (
  <CheckboxIndicator>
    <Check width={11} height={11} />
  </CheckboxIndicator>
);

const meta: Meta<typeof CheckboxRoot> = {
  title: "Base/Checkbox",
  component: CheckboxRoot,
  parameters: { layout: "centered" },
  argTypes: {
    defaultChecked: { control: "boolean", description: "Initially checked" },
    disabled: { control: "boolean", description: "Disable the checkbox" },
  },
  args: { defaultChecked: false, disabled: false },
};
export default meta;

type Story = StoryObj<typeof CheckboxRoot>;

export const Default: Story = {
  render: (args) => (
    <CheckboxRoot {...args}>
      <CheckboxControl>
        <Indicator />
      </CheckboxControl>
      <CheckboxLabel>Enable notifications</CheckboxLabel>
    </CheckboxRoot>
  ),
};

export const Checked: Story = {
  args: { defaultChecked: true },
  render: (args) => (
    <CheckboxRoot {...args}>
      <CheckboxControl>
        <Indicator />
      </CheckboxControl>
      <CheckboxLabel>Auto-deploy on push</CheckboxLabel>
    </CheckboxRoot>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <CheckboxRoot {...args}>
      <CheckboxControl>
        <Indicator />
      </CheckboxControl>
      <CheckboxLabel>Disabled option</CheckboxLabel>
    </CheckboxRoot>
  ),
};

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {["Build notifications", "Deploy alerts", "Error reports"].map((label) => (
        <CheckboxRoot key={label}>
          <CheckboxControl>
            <Indicator />
          </CheckboxControl>
          <CheckboxLabel>{label}</CheckboxLabel>
        </CheckboxRoot>
      ))}
    </div>
  ),
};
