import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import { Card, CardBody, CardDescription, CardFooter, CardHead, CardTitle } from "./Card";

const meta: Meta = {
  title: "Base/Card",
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text", description: "Card title" },
    description: { control: "text", description: "Card description" },
    body: { control: "text", description: "Card body content" },
  },
  args: {
    title: "Build #1428",
    description: "Triggered by push to main · 2 minutes ago",
    body: "All 42 checks passed. Ready to deploy to production.",
  },
};
export default meta;

type Story = StoryObj<{ title: string; description: string; body: string }>;

export const Default: Story = {
  render: (args) => (
    <Card>
      <CardHead>
        <CardTitle>{args.title}</CardTitle>
        <CardDescription>{args.description}</CardDescription>
      </CardHead>
      <CardBody>{args.body}</CardBody>
      <CardFooter>
        <Button variant="primary" size="sm">
          Deploy
        </Button>
        <Button variant="ghost" size="sm">
          View logs
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Card>
      <CardBody>A simple card with just body content.</CardBody>
    </Card>
  ),
};

export const HeaderOnly: Story = {
  render: (args) => (
    <Card>
      <CardHead>
        <CardTitle>{args.title}</CardTitle>
        <CardDescription>{args.description}</CardDescription>
      </CardHead>
    </Card>
  ),
};
