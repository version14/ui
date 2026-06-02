import { defineConfig } from "tsup";
import path from "path";

const root = import.meta.dirname;
const styledSystem = path.resolve(root, "src/styled-system");

export default defineConfig({
  entry: ["src/index.ts", "src/preset.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  tsconfig: "tsconfig.build.json",
  external: ["react", "react-dom", "@ark-ui/react", "@pandacss/dev"],
  esbuildOptions(options) {
    options.alias = {
      // Styled-system sub-paths — map explicitly to .mjs indexes
      // because esbuild does not look for index.mjs in directories by default.
      "@styled-system/css": `${styledSystem}/css/index.mjs`,
      "@styled-system/patterns": `${styledSystem}/patterns/index.mjs`,
      "@styled-system/tokens": `${styledSystem}/tokens/index.mjs`,
      "@styled-system/jsx": `${styledSystem}/jsx/index.mjs`,
      "@styled-system": styledSystem,
      "@": path.resolve(root, "src"),
    };
  },
});
