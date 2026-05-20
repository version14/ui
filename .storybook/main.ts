import type { StorybookConfig } from "@storybook/react-vite";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.{ts,tsx}"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          "@styled-system": path.resolve(__dirname, "../src/styled-system"),
        },
      },
      css: {
        postcss: path.resolve(__dirname, "../postcss.config.cjs"),
      },
    });
  },
};

export default config;
