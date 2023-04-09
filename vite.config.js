import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    VitePWA({
      manifest: {
        name: "My Timer App",
        short_name: "Timer App",
        start_url: "/ReactTimerApp/index.html",
        scope: "https://ckhgueye.github.io/ReactTimerApp/",
        display: "standalone",
        background_color: "#e3edf7",
        theme_color: "#555",
        icons: [
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  base: "https://ckhgueye.github.io/ReactTimerApp/",
});
