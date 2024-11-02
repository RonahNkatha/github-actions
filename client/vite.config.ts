import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "https://github-actions-cig4.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
