import type { Preview } from "@storybook/react-vite";
import { createElement, useEffect } from "react";
import { Version14UiProvider } from "../src/provider";
import "../src/global.css";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = (context.globals["theme"] as "dark" | "light") ?? "dark";
      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.body.style.background = theme === "light"
          ? "oklch(0.985 0.003 256)"
          : "oklch(0.165 0.006 256)";
        return () => { document.body.style.background = ""; };
      }, [theme]);
      return createElement(
        Version14UiProvider,
        { theme },
        createElement(Story),
      );
    },
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "V14 color theme",
      defaultValue: "dark",
      toolbar: {
        icon: "circlehollow",
        items: ["dark", "light"],
        showName: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { config: {} },
    backgrounds: { disable: true },
  },
};

export default preview;
