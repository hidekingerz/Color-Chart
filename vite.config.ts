import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";

export default defineConfig({
  appType: "spa",
  clearScreen: false,
  logLevel: "info",
  plugins: [react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } })],
  resolve: {
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
  server: {
    port: 8080,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: true, // prd では不要
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/lib/vitest/setup.ts",
  },
});
