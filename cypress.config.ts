import { defineConfig } from "cypress";
import viteConfig from "./vite.config";

export default defineConfig({
  component: {
    specPattern: "cypress/component/*.cy.jsx",
    port: 5173,
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
  },

  e2e: {
    baseUrl: "https://github-actions-cig4.onrender.com",
    specPattern: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
