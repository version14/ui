import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check } from "pixelarticons/react/Check";
import { ChevronDown } from "pixelarticons/react/ChevronDown";
import {
  createListCollection,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectRoot,
  SelectTagsDisplay,
  SelectTrigger,
  SelectValueText,
} from "./Select";

const collection = createListCollection({
  items: [
    { label: "Production", value: "prod" },
    { label: "Staging", value: "staging" },
    { label: "Development", value: "dev" },
  ],
});

const meta: Meta = {
  title: "Base/Select",
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ width: 280, minHeight: 200 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj;

const multiCollection = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
});

export const Multiple: Story = {
  render: () => (
    <SelectRoot collection={multiCollection} multiple>
      <SelectLabel>Frameworks</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <SelectTagsDisplay placeholder="Select frameworks…" />
          <SelectIndicator>
            <ChevronDown width={14} height={14} />
          </SelectIndicator>
        </SelectTrigger>
      </SelectControl>
      <SelectPositioner>
        <SelectContent>
          {multiCollection.items.map((item) => (
            <SelectItem key={item.value} item={item}>
              <SelectItemText>{item.label}</SelectItemText>
              <SelectItemIndicator>
                <Check width={14} height={14} />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPositioner>
    </SelectRoot>
  ),
};

export const Default: Story = {
  render: () => (
    <SelectRoot collection={collection}>
      <SelectLabel>Environment</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <SelectValueText placeholder="Select environment…" />
          <SelectIndicator>
            <ChevronDown width={14} height={14} />
          </SelectIndicator>
        </SelectTrigger>
      </SelectControl>
      <SelectPositioner>
        <SelectContent>
          {collection.items.map((item) => (
            <SelectItem key={item.value} item={item}>
              <SelectItemText>{item.label}</SelectItemText>
              <SelectItemIndicator>
                <Check width={14} height={14} />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPositioner>
    </SelectRoot>
  ),
};
