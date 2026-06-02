import { defineConfig } from "@pandacss/dev";
import { v14Preset } from "./src/preset";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  presets: [v14Preset],
  outdir: "src/styled-system",
  jsxFramework: "react",
});
