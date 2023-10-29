/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      //make @ = to ./src in paths in Vue components, when importing
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // This is Vitest setting
  test: {
    //make test related functions globally available
    globals: true,
    /**
     * Hey Vitest, additinal setup and config stuff can be found here, at this path. Run this file 
     * before every testing.
     */
    setupFiles: ["./tests/setup.ts"],
  },
});
