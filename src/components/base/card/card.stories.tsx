import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
	title: "Base/Card",
	component: Card,
	parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Padding: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "16px",
				width: "320px",
			}}
		>
			<Card padding="sm">Small padding</Card>
			<Card padding="md">Medium padding (default)</Card>
			<Card padding="lg">Large padding</Card>
		</div>
	),
};

export const Composed: Story = {
	render: () => (
		<Card padding="md" style={{ width: "320px" }}>
			<h3 style={{ margin: "0 0 8px", color: "var(--colors-fg-DEFAULT)" }}>
				Feature Card
			</h3>
			<p style={{ margin: 0, color: "var(--colors-fg-muted)" }}>
				Cards impose no internal structure. Compose freely.
			</p>
		</Card>
	),
};
