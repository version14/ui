import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  external: ["react", "react-dom", "@ark-ui/react"],
  esbuildOptions(options) {
    options.alias = {
      "@": path.resolve(import.meta.dirname, "src"),
      "@styled-system": path.resolve(import.meta.dirname, "src/styled-system"),
    };
  },
});
