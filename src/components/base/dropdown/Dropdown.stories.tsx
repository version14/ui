import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import {
  DropdownContent,
  DropdownItem,
  DropdownItemGroup,
  DropdownItemShortcut,
  DropdownItemText,
  DropdownLabel,
  DropdownPositioner,
  DropdownRoot,
  DropdownSeparator,
  DropdownTrigger,
} from "./Dropdown";

const meta: Meta = {
  title: "Base/Dropdown",
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DropdownRoot>
      <DropdownTrigger asChild>
        <Button variant="secondary">Actions</Button>
      </DropdownTrigger>
      <DropdownPositioner>
        <DropdownContent>
          <DropdownItemGroup id="build-actions">
            <DropdownLabel htmlFor="build-actions">Build</DropdownLabel>
            <DropdownItem id="redeploy" value="redeploy">
              <DropdownItemText>Redeploy</DropdownItemText>
              <DropdownItemShortcut>⌘R</DropdownItemShortcut>
            </DropdownItem>
            <DropdownItem id="view-logs" value="view-logs">
              <DropdownItemText>View logs</DropdownItemText>
            </DropdownItem>
          </DropdownItemGroup>
          <DropdownSeparator />
          <DropdownItemGroup id="danger-zone">
            <DropdownItem id="delete" data-variant="danger" value="delete">
              <DropdownItemText>Delete build</DropdownItemText>
            </DropdownItem>
          </DropdownItemGroup>
        </DropdownContent>
      </DropdownPositioner>
    </DropdownRoot>
  ),
};
