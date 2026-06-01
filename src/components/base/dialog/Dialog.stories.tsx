import type { Meta, StoryObj } from "@storybook/react-vite";
import { Close } from "pixelarticons/react/Close";
import { Button } from "../button/Button";
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogHeaderActions,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const meta: Meta = {
  title: "Base/Dialog",
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="primary">Delete build #1428</Button>
      </DialogTrigger>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent>
          <DialogHeader>
            <DialogHeaderActions>
              <DialogCloseTrigger asChild>
                <Button variant="ghost" size="iconSm">
                  <Close width={14} height={14} />
                </Button>
              </DialogCloseTrigger>
            </DialogHeaderActions>
            <DialogTitle>Delete build #1428?</DialogTitle>
            <DialogDescription>
              This permanently removes the build and its logs. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogCloseTrigger asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogCloseTrigger>
            <Button variant="danger">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  ),
};

export const WithBody: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit settings</Button>
      </DialogTrigger>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent>
          <DialogHeader>
            <DialogHeaderActions>
              <DialogCloseTrigger asChild>
                <Button variant="ghost" size="iconSm">
                  <Close width={14} height={14} />
                </Button>
              </DialogCloseTrigger>
            </DialogHeaderActions>
            <DialogTitle>Project settings</DialogTitle>
            <DialogDescription>Configure your deployment preferences.</DialogDescription>
          </DialogHeader>
          <DialogBody>Settings content goes here.</DialogBody>
          <DialogFooter>
            <DialogCloseTrigger asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogCloseTrigger>
            <Button variant="primary">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  ),
};
