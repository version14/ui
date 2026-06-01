import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRight } from "pixelarticons/react/ChevronRight";
import {
  AccordionContent,
  AccordionContentText,
  AccordionIndicator,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "./Accordion";

const items = [
  {
    value: "q1",
    trigger: "What is Version 14?",
    content:
      "An instrument-grade design system: graphite, electric lime, sharp corners, a visible grid.",
  },
  {
    value: "q2",
    trigger: "Which fonts does it use?",
    content: "Geist for the interface, Geist Mono for labels, metadata, and code.",
  },
  {
    value: "q3",
    trigger: "Is there a light theme?",
    content: 'Yes — a light "drafting-paper" theme driven by the Version14UiProvider.',
  },
];

const meta: Meta<typeof AccordionRoot> = {
  title: "Base/Accordion",
  component: AccordionRoot,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 460 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    multiple: { control: "boolean", description: "Allow multiple items open at once" },
    collapsible: { control: "boolean", description: "Allow closing the open item" },
  },
  args: { multiple: false, collapsible: true },
};
export default meta;

type Story = StoryObj<typeof AccordionRoot>;

export const Default: Story = {
  render: (args) => (
    <AccordionRoot {...args} defaultValue={["q1"]}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>
            {item.trigger}
            <AccordionIndicator>
              <ChevronRight width={14} height={14} />
            </AccordionIndicator>
          </AccordionTrigger>
          <AccordionContent>
            <AccordionContentText>{item.content}</AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  ),
};

export const Multiple: Story = {
  args: { multiple: true },
  render: (args) => (
    <AccordionRoot {...args} defaultValue={["q1", "q2"]}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>
            {item.trigger}
            <AccordionIndicator>
              <ChevronRight width={14} height={14} />
            </AccordionIndicator>
          </AccordionTrigger>
          <AccordionContent>
            <AccordionContentText>{item.content}</AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  ),
};
