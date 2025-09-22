import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteStaticCopy({
    targets: [
      {
        src: "src/assets/js/jquery.nav.js",
        dest: "assets/js",
      },
    ],
  }),],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg"],
  base: './',
  build: {    
     outDir: 'dist'
  },
  optimizeDeps: {
    include: ['wowjs']
  }
})
