import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./tabs";

const meta: Meta = {
	title: "Base/Tabs",
	parameters: { layout: "padded" },
};

export default meta;

const TabsDemo = ({ variant }: { variant: "underline" | "enclosed" }) => (
	<Tabs.Root defaultValue="install" variant={variant}>
		<Tabs.List>
			<Tabs.Trigger value="install">npm</Tabs.Trigger>
			<Tabs.Trigger value="yarn">yarn</Tabs.Trigger>
			<Tabs.Trigger value="pnpm">pnpm</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="install">
			<code>npm install @version14/ui</code>
		</Tabs.Content>
		<Tabs.Content value="yarn">
			<code>yarn add @version14/ui</code>
		</Tabs.Content>
		<Tabs.Content value="pnpm">
			<code>pnpm add @version14/ui</code>
		</Tabs.Content>
	</Tabs.Root>
);

export const Underline: StoryObj = {
	render: () => <TabsDemo variant="underline" />,
};

export const Enclosed: StoryObj = {
	render: () => <TabsDemo variant="enclosed" />,
};
