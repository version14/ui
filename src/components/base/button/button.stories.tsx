import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../icon/icon";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
	title: "Base/Button",
	component: Button,
	parameters: { layout: "centered" },
	argTypes: {
		variant: { control: "select", options: ["primary", "ghost", "outline"] },
		size: { control: "select", options: ["sm", "md", "lg"] },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: { variant: "primary", children: "Get started" },
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
			<Button variant="primary">Primary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
			<Button size="sm">Small</Button>
			<Button size="md">Medium</Button>
			<Button size="lg">Large</Button>
		</div>
	),
};

export const Loading: Story = {
	args: { isLoading: true, children: "Submitting" },
};

export const IconOnly: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
			<Button isIconOnly size="sm">
				<Icon name="Plus" size="sm" />
			</Button>
			<Button isIconOnly size="md">
				<Icon name="Plus" size="md" />
			</Button>
			<Button isIconOnly size="lg">
				<Icon name="Plus" size="lg" />
			</Button>
		</div>
	),
};

export const Disabled: Story = {
	args: { disabled: true, children: "Disabled" },
};
