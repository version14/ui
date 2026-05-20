import type { Meta, StoryObj } from "@storybook/react";
import { CopyButton } from "./copy-button";

const meta: Meta<typeof CopyButton> = {
	title: "Components/CopyButton",
	component: CopyButton,
	parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
	args: { value: "npm install @version14/ui" },
};
