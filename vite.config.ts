import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@styled-system": path.resolve(__dirname, "src/styled-system"),
    },
  },
  css: {
    postcss: "./postcss.config.cjs",
  },
});
