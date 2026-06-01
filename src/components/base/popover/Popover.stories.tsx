import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import {
  PopoverContent,
  PopoverDescription,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "./Popover";

const meta: Meta = {
  title: "Base/Popover",
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button variant="secondary">More info</Button>
      </PopoverTrigger>
      <PopoverPositioner>
        <PopoverContent>
          <PopoverTitle>Build #1428</PopoverTitle>
          <PopoverDescription>
            Triggered by push to main 2 minutes ago. All 42 checks passed.
          </PopoverDescription>
        </PopoverContent>
      </PopoverPositioner>
    </PopoverRoot>
  ),
};
