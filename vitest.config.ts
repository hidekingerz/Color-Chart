import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@src", replacement: `${import.meta.dirname}/src/` }],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/lib/vitest/setup.ts",
  },
});
