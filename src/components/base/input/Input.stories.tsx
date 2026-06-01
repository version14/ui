import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, InputError, InputField, InputHint, InputLabel } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Base/Input",
  component: Input,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    mono: { control: "boolean" },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Enter a value…" } };
export const WithValue: Story = { args: { defaultValue: "build-prod-1428" } };
export const Mono: Story = { args: { placeholder: "sk-XXXXXXXXXXXX", mono: true } };
export const Invalid: Story = { args: { defaultValue: "bad@value!", invalid: true } };
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <InputField>
      <InputLabel htmlFor="name">Full name</InputLabel>
      <Input id="name" placeholder="John Doe" />
    </InputField>
  ),
};

export const WithHint: Story = {
  render: () => (
    <InputField>
      <InputLabel htmlFor="email">Email</InputLabel>
      <Input id="email" type="email" placeholder="you@example.com" />
      <InputHint>We'll never share your email with anyone.</InputHint>
    </InputField>
  ),
};

export const WithError: Story = {
  render: () => (
    <InputField>
      <InputLabel htmlFor="username">Username</InputLabel>
      <Input id="username" defaultValue="bad value!" invalid />
      <InputError>Username can only contain letters, numbers, and underscores.</InputError>
    </InputField>
  ),
};

export const WithLabelAndHint: Story = {
  render: () => (
    <InputField>
      <InputLabel htmlFor="api-key">API key</InputLabel>
      <Input id="api-key" placeholder="sk-XXXXXXXXXXXX" mono />
      <InputHint>Found in your account settings under Developer.</InputHint>
    </InputField>
  ),
};

export const WithErrorAndHint: Story = {
  render: () => (
    <InputField>
      <InputLabel htmlFor="pw">Password</InputLabel>
      <Input id="pw" type="password" defaultValue="abc" invalid />
      <InputError>Password must be at least 8 characters.</InputError>
      <InputHint>Use a mix of letters, numbers, and symbols.</InputHint>
    </InputField>
  ),
};
