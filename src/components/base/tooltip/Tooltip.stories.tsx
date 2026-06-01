import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import { TooltipContent, TooltipPositioner, TooltipRoot, TooltipTrigger } from "./Tooltip";

const meta: Meta = {
  title: "Base/Tooltip",
  parameters: { layout: "centered" },
  argTypes: {
    content: { control: "text", description: "Tooltip text" },
    openDelay: { control: "number", description: "Delay before opening (ms)" },
    closeDelay: { control: "number", description: "Delay before closing (ms)" },
  },
  args: { content: "Deploy to production", openDelay: 0, closeDelay: 0 },
};
export default meta;

type Story = StoryObj<{ content: string; openDelay: number; closeDelay: number }>;

export const Default: Story = {
  render: (args) => (
    <TooltipRoot openDelay={args.openDelay} closeDelay={args.closeDelay}>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>{args.content}</TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  ),
};

export const WithDelay: Story = {
  args: { openDelay: 400, closeDelay: 100 },
  render: (args) => (
    <TooltipRoot openDelay={args.openDelay} closeDelay={args.closeDelay}>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover (delayed)</Button>
      </TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>{args.content}</TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  ),
};
