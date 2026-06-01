import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import { createToaster, Toaster } from "./Toast";

const toaster = createToaster({ placement: "bottom-end", gap: 8 });

const meta: Meta = {
  title: "Base/Toast",
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <>
      <div style={{ display: "flex", gap: 8 }}>
        <Button
          variant="primary"
          onClick={() =>
            toaster.create({
              title: "Deployed",
              description: "Build #1428 is live.",
              type: "success",
            })
          }
        >
          Success
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toaster.create({
              title: "Build queued",
              description: "Waiting for a runner.",
              type: "info",
            })
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toaster.create({
              title: "Rate limited",
              description: "Too many requests.",
              type: "warning",
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="danger"
          onClick={() =>
            toaster.create({
              title: "Build failed",
              description: "Exit code 1 on step 3.",
              type: "error",
            })
          }
        >
          Error
        </Button>
      </div>
      <Toaster toaster={toaster} />
    </>
  ),
};
