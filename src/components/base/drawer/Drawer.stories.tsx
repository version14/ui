import type { Meta, StoryObj } from "@storybook/react-vite";
import { Close } from "pixelarticons/react/Close";
import { Button } from "../button/Button";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderActions,
  DrawerPositioner,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";

const meta: Meta = {
  title: "Base/Drawer",
  parameters: { layout: "centered" },
  argTypes: {
    placement: { control: "select", options: ["right", "left", "top", "bottom"] },
  },
};
export default meta;

type Story = StoryObj<{ placement: "right" | "left" | "top" | "bottom" }>;

export const Right: Story = {
  render: (args) => (
    <DrawerRoot placement={args.placement ?? "right"}>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open drawer</Button>
      </DrawerTrigger>
      <DrawerBackdrop />
      <DrawerPositioner>
        <DrawerContent>
          <DrawerHeader>
            <DrawerHeaderActions>
              <DrawerCloseTrigger asChild>
                <Button variant="ghost" size="iconSm">
                  <Close width={14} height={14} />
                </Button>
              </DrawerCloseTrigger>
            </DrawerHeaderActions>
            <DrawerTitle>Deployment settings</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            Configure environment variables, build commands, and deploy targets.
          </DrawerBody>
          <DrawerFooter>
            <DrawerCloseTrigger asChild>
              <Button variant="ghost">Cancel</Button>
            </DrawerCloseTrigger>
            <Button variant="primary">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPositioner>
    </DrawerRoot>
  ),
  args: { placement: "right" },
};
