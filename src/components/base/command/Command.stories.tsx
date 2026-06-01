import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import { CommandRoot, useCommandPalette } from "./Command";

const groups = [
  {
    label: "Navigation",
    items: [
      { id: "home", label: "Home", category: "Page" },
      { id: "components", label: "Components", category: "Page" },
      { id: "foundations", label: "Foundations", category: "Page" },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "button", label: "Button", category: "Base" },
      { id: "input", label: "Input", category: "Base" },
      { id: "dialog", label: "Dialog", category: "Overlay" },
      { id: "tabs", label: "Tabs", category: "Display" },
    ],
  },
];

function CommandDemo() {
  const { open, setOpen, close } = useCommandPalette();
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open palette{" "}
        <span style={{ fontFamily: "monospace", fontSize: 11, opacity: 0.6, marginLeft: 4 }}>
          ⌘K
        </span>
      </Button>
      <CommandRoot open={open} onClose={close} groups={groups} placeholder="Search components…" />
    </>
  );
}

const meta: Meta = {
  title: "Base/Command",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj = { render: () => <CommandDemo /> };
