import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import TransitionLoader from "./loader";
import TransitionOverlay from "./overlay";
import { PageTransitionProvider } from "./provider";
import TransitionTrigger from "./trigger";
import type { LoaderVariant, TransitionVariant } from "./types";

interface DemoArgs {
  variant: TransitionVariant;
  loaderVariant: LoaderVariant;
  tileSize: number;
  color: string;
  duration: number;
}

function TransitionDemo({ variant, loaderVariant, tileSize, color, duration }: DemoArgs) {
  const pages = ["/home", "/about", "/work"];
  const [index, setIndex] = useState(0);
  const currentPath = pages[index] ?? "/home";
  const nextPath = pages[(index + 1) % pages.length] ?? "/about";

  const router = {
    push: (href: string) => {
      setTimeout(() => {
        const i = pages.indexOf(href);
        if (i !== -1) setIndex(i);
      }, 80);
    },
  };

  return (
    <PageTransitionProvider router={router}>
      <TransitionOverlay
        pathName={currentPath}
        variant={variant}
        tileSize={tileSize}
        color={color}
        duration={duration}
      />
      <TransitionLoader
        loaderVariant={loaderVariant}
        tileSize={tileSize}
        color={color}
        duration={duration}
      />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#fff",
          fontFamily: "monospace",
          userSelect: "none",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            opacity: 0.4,
            textTransform: "uppercase",
          }}
        >
          current route
        </p>
        <h1 style={{ fontSize: 56, fontWeight: 700, margin: 0 }}>{currentPath}</h1>
        <TransitionTrigger href={nextPath}>
          <button
            type="button"
            style={{
              padding: "12px 28px",
              background: "#fff",
              color: "#000",
              border: "none",
              cursor: "pointer",
              fontFamily: "monospace",
              fontSize: 13,
              letterSpacing: "0.08em",
            }}
          >
            navigate → {nextPath}
          </button>
        </TransitionTrigger>
        <p style={{ fontSize: 11, opacity: 0.25 }}>
          loader: {loaderVariant} · tile: {tileSize}px
        </p>
      </div>
    </PageTransitionProvider>
  );
}

const meta: Meta<DemoArgs> = {
  title: "Landing/Transition",
  parameters: { layout: "fullscreen" },
  argTypes: {
    variant: { control: "select", options: ["random"] },
    loaderVariant: { control: "select", options: ["pulse", "cycle"] },
    tileSize: { control: { type: "range", min: 10, max: 120, step: 5 } },
    color: { control: "color" },
    duration: { control: { type: "range", min: 200, max: 2000, step: 100 } },
  },
};
export default meta;

type Story = StoryObj<DemoArgs>;

const render = (args: DemoArgs) => <TransitionDemo {...args} />;

export const Default: Story = {
  render,
  args: {
    variant: "random",
    loaderVariant: "pulse",
    tileSize: 40,
    color: "#ffffff",
    duration: 600,
  },
};
