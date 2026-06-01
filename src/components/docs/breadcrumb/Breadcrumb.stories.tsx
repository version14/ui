import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  BreadcrumbCurrent,
  BreadcrumbLink,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from "./Breadcrumb";

const meta: Meta = {
  title: "Docs/Breadcrumb",
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <BreadcrumbRoot>
      <BreadcrumbLink href="#">Version 14</BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbLink href="#">Components</BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbCurrent>Button</BreadcrumbCurrent>
    </BreadcrumbRoot>
  ),
};

export const Deep: Story = {
  render: () => (
    <BreadcrumbRoot>
      <BreadcrumbLink href="#">Docs</BreadcrumbLink>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbLink href="#">Base</BreadcrumbLink>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbLink href="#">Form</BreadcrumbLink>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbCurrent>Input</BreadcrumbCurrent>
    </BreadcrumbRoot>
  ),
};
