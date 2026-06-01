import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea, TextareaError, TextareaField, TextareaHint, TextareaLabel } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Base/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { placeholder: "Describe the issue…" } };
export const WithValue: Story = {
  args: { defaultValue: "Electric lime on cool graphite.\nSharp corners. Hairline borders." },
};
export const Invalid: Story = { args: { defaultValue: "This field has an error", invalid: true } };
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <TextareaField>
      <TextareaLabel htmlFor="bio">Bio</TextareaLabel>
      <Textarea id="bio" placeholder="Tell us about yourself…" />
    </TextareaField>
  ),
};

export const WithHint: Story = {
  render: () => (
    <TextareaField>
      <TextareaLabel htmlFor="desc">Description</TextareaLabel>
      <Textarea id="desc" placeholder="Describe your project…" />
      <TextareaHint>Max 500 characters. Markdown is supported.</TextareaHint>
    </TextareaField>
  ),
};

export const WithError: Story = {
  render: () => (
    <TextareaField>
      <TextareaLabel htmlFor="message">Message</TextareaLabel>
      <Textarea id="message" defaultValue="x" invalid />
      <TextareaError>Message must be at least 20 characters.</TextareaError>
    </TextareaField>
  ),
};

export const WithErrorAndHint: Story = {
  render: () => (
    <TextareaField>
      <TextareaLabel htmlFor="notes">Notes</TextareaLabel>
      <Textarea id="notes" defaultValue="too short" invalid />
      <TextareaError>Notes must be at least 50 characters.</TextareaError>
      <TextareaHint>Be as detailed as possible to help us resolve your issue.</TextareaHint>
    </TextareaField>
  ),
};
