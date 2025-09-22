import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/js/jquery.nav.js",
          dest: "assets/js",
        },
        {
          src: "src/assets/js/validator.min.js",
          dest: "assets/js",
        },
        {
          src: "src/assets/js/init.js",
          dest: "assets/js",
        },
        {
          src: "src/assets/js/jquery.sticky.js",
          dest: "assets/js",
        },
        {
          src: "src/assets/js/modernizr.js",
          dest: "assets/js",
        },
        {
          src: "src/assets/js/jquery.fancybox.pack.js",
          dest: "assets/js",
        },
      ],
    }),
  ],
  assetsInclude: [
    "**/*.png",
    "**/images/png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
    "**/js/jquery.nav.js",
    "**/js/validator.min.js",
    "**/js/init.js",
    "**/js/jquery.sticky.js",
    "**/js/jquery.fancybox.pack.js",
    "**/js/modernizr.js",
  ],
  base: "./",
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    include: ["wowjs"],
  },
});
