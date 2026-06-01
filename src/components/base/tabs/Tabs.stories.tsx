import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from "./Tabs";

const meta: Meta<typeof TabsRoot> = {
  title: "Base/Tabs",
  component: TabsRoot,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Tab orientation",
    },
  },
  args: { orientation: "horizontal" },
};
export default meta;

type Story = StoryObj<typeof TabsRoot>;

export const Default: Story = {
  render: (args) => (
    <TabsRoot {...args} defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="overview">Build summary, status, and timing.</TabsContent>
      <TabsContent value="logs">Streaming build output, newest first.</TabsContent>
      <TabsContent value="settings">Environment variables and triggers.</TabsContent>
    </TabsRoot>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <TabsRoot defaultValue="general">
      <TabsList>
        {["General", "Security", "Billing", "Integrations", "Advanced"].map((t) => (
          <TabsTrigger key={t} value={t.toLowerCase()}>
            {t}
          </TabsTrigger>
        ))}
        <TabsIndicator />
      </TabsList>
      <TabsContent value="general">General settings content.</TabsContent>
      <TabsContent value="security">Security settings.</TabsContent>
      <TabsContent value="billing">Billing information.</TabsContent>
      <TabsContent value="integrations">Third-party integrations.</TabsContent>
      <TabsContent value="advanced">Advanced configuration.</TabsContent>
    </TabsRoot>
  ),
};
