import { defineConfig } from "vite";
export default defineConfig({
  build: {
    outDir: "../assets/",
    rollupOptions: {
      input: {
        index: "scripts/app.js",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
