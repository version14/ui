import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./code-block";

const meta: Meta<typeof CodeBlock> = {
	title: "Components/CodeBlock",
	component: CodeBlock,
	parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const bashCode = `npm install @version14/ui solar-icon-set`;

const tsCode = `import { ThemeProvider, Button } from '@version14/ui';

export function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Get started</Button>
    </ThemeProvider>
  );
}`;

const jsonCode = `{
  "name": "@version14/ui",
  "version": "1.0.0",
  "peerDependencies": {
    "react": ">=18"
  }
}`;

export const Bash: Story = {
	args: { code: bashCode, language: "bash", title: "Terminal" },
};

export const TypeScript: Story = {
	args: {
		code: tsCode,
		language: "typescript",
		title: "app.tsx",
		showLineNumbers: true,
	},
};

export const JsonExample: Story = {
	args: { code: jsonCode, language: "json", title: "package.json" },
};

export const NoCopyButton: Story = {
	args: { code: bashCode, language: "bash", showCopyButton: false },
};

export const NoTitle: Story = {
	args: { code: bashCode, language: "bash" },
};
