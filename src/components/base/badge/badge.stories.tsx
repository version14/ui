import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
	title: "Base/Badge",
	component: Badge,
	parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Variants: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px" }}>
			<Badge variant="solid">Solid</Badge>
			<Badge variant="outline">Outline</Badge>
			<Badge variant="subtle">Subtle</Badge>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
			<Badge size="sm">Small</Badge>
			<Badge size="md">Medium</Badge>
		</div>
	),
};

export const WithDot: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
			<Badge dot color="success">
				Open Source
			</Badge>
			<Badge dot color="warning">
				Beta
			</Badge>
			<Badge dot color="danger">
				Deprecated
			</Badge>
			<Badge dot color="accent">
				New
			</Badge>
		</div>
	),
};
