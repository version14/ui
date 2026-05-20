import { defineConfig } from "@pandacss/dev";
import { preset } from "./src/preset";

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  exclude: [],
  darkMode: { condition: "_dark", selector: ".dark" },
  outdir: "styled-system",
  jsxFramework: "react",
  layers: {
    reset: "panda_reset",
    base: "panda_base",
    tokens: "panda_tokens",
    recipes: "panda_recipes",
    utilities: "panda_utilities",
  },
});
