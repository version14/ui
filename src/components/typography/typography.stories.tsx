import type { Meta, StoryObj } from "@storybook/react";
import { Code, Heading, Label, Text } from "./typography";

const meta: Meta = {
	title: "Components/Typography",
	parameters: { layout: "padded" },
};

export default meta;

export const Headings: StoryObj = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<Heading as="h1" size="5xl">
				Heading 5xl
			</Heading>
			<Heading as="h2" size="4xl">
				Heading 4xl
			</Heading>
			<Heading as="h3" size="3xl">
				Heading 3xl
			</Heading>
			<Heading as="h4" size="2xl">
				Heading 2xl
			</Heading>
			<Heading as="h5" size="xl">
				Heading xl
			</Heading>
			<Heading as="h6" size="lg">
				Heading lg
			</Heading>
		</div>
	),
};

export const SemanticVsVisual: StoryObj = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<Heading as="h1" size="lg">
				h1 at lg size
			</Heading>
			<Heading as="h6" size="5xl">
				h6 at 5xl size
			</Heading>
		</div>
	),
};

export const BodyText: StoryObj = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
			<Text size="lg">Body large — lorem ipsum dolor sit amet.</Text>
			<Text size="md">Body medium — lorem ipsum dolor sit amet.</Text>
			<Text size="sm">Body small — lorem ipsum dolor sit amet.</Text>
			<Text muted>Muted body text for secondary content.</Text>
		</div>
	),
};

export const Labels: StoryObj = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
			<Label size="md">Label medium</Label>
			<Label size="sm">Label small</Label>
			<Label muted>Muted label</Label>
		</div>
	),
};

export const InlineCode: StoryObj = {
	render: () => (
		<Text>
			Install with <Code>npm install @version14/ui</Code> to get started.
		</Text>
	),
};
