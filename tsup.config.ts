import path from "node:path";
import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom", "@pandacss/dev"],
    esbuildOptions(options) {
      options.alias = { "@": path.resolve(import.meta.dirname, ".") };
    },
  },
  {
    entry: { preset: "src/preset.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    external: ["@pandacss/dev"],
  },
]);
