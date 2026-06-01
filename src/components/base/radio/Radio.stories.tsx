import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroupItem, RadioGroupItemControl, RadioGroupItemText, RadioGroupRoot } from "./Radio";

const envs = ["Production", "Staging", "Development"];

const meta: Meta<typeof RadioGroupRoot> = {
  title: "Base/RadioGroup",
  component: RadioGroupRoot,
  parameters: { layout: "centered" },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Layout direction",
    },
    disabled: { control: "boolean", description: "Disable all items" },
  },
  args: { orientation: "vertical", disabled: false },
};
export default meta;

type Story = StoryObj<typeof RadioGroupRoot>;

export const Default: Story = {
  render: (args) => (
    <RadioGroupRoot {...args} defaultValue="production">
      {envs.map((env) => (
        <RadioGroupItem key={env} value={env.toLowerCase()}>
          <RadioGroupItemControl />
          <RadioGroupItemText>{env}</RadioGroupItemText>
        </RadioGroupItem>
      ))}
    </RadioGroupRoot>
  ),
};

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <RadioGroupRoot {...args} defaultValue="week" style={{ flexDirection: "row", gap: 20 }}>
      {["Day", "Week", "Month", "Year"].map((label) => (
        <RadioGroupItem key={label} value={label.toLowerCase()}>
          <RadioGroupItemControl />
          <RadioGroupItemText>{label}</RadioGroupItemText>
        </RadioGroupItem>
      ))}
    </RadioGroupRoot>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <RadioGroupRoot {...args} defaultValue="staging">
      {envs.map((env) => (
        <RadioGroupItem key={env} value={env.toLowerCase()}>
          <RadioGroupItemControl />
          <RadioGroupItemText>{env}</RadioGroupItemText>
        </RadioGroupItem>
      ))}
    </RadioGroupRoot>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <RadioGroupRoot defaultValue="staging">
      {envs.map((env) => (
        <RadioGroupItem key={env} value={env.toLowerCase()} disabled={env === "Production"}>
          <RadioGroupItemControl />
          <RadioGroupItemText>{env}</RadioGroupItemText>
        </RadioGroupItem>
      ))}
    </RadioGroupRoot>
  ),
};
