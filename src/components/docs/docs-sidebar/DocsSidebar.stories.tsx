import type { Meta, StoryObj } from "@storybook/react-vite";
import { DocsSidebar } from "./DocsSidebar";

const groups = [
  {
    label: "Get started",
    items: [
      { label: "Introduction", href: "#", active: true },
      { label: "Installation", href: "#" },
      { label: "Theming", href: "#" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { label: "Color", href: "#" },
      { label: "Typography", href: "#" },
      { label: "Spacing & Grid", href: "#" },
      { label: "Motion", href: "#" },
    ],
  },
  {
    label: "Components",
    items: [
      { label: "Button", href: "#" },
      { label: "Input", href: "#" },
      { label: "Select", href: "#" },
      { label: "Dialog", href: "#", tag: "NEW" },
      { label: "Command", href: "#" },
    ],
  },
];

const meta: Meta = {
  title: "Docs/DocsSidebar",
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div style={{ width: 264 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <DocsSidebar groups={groups} />,
};
