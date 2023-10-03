// vite.config.js
import react from "@vitejs/plugin-react";
import { resolve } from "path";
/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./lib/tests/setup.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
      reportsDirectory: "./lib/tests/coverage",
    },
  },plugins: [react(), dts({ include: ["lib/**/*.{ts,tsx}"] })],
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/index.ts"),
      name: "react-qwhy",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
});
// https://vitejs.dev/config/
