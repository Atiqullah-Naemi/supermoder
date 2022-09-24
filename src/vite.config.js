import { defineConfig } from "vite";

export default defineConfig({
  root: "",
  build: {
    outDir: "../assets",
    assetsDir: "",
    rollupOptions: {
      input: {
        index: "scripts/app.js",
      },
      output: {
        assetFileNames: "app.css",
        entryFileNames: "app.js",
      },
    },
  },
});
