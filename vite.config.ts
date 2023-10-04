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
      reporter: ["json", "html"],
      reportsDirectory: "./lib/tests/coverage",
    },
  },
  plugins: [react(), dts({ include: ["lib/**/*.{ts,tsx}"] })],
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

      external: ["react"],
      output: {

        globals: {
          react: "React",
        },
      },
    },
  },
});
// https://vitejs.dev/config/
