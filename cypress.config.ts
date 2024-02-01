import { defineConfig } from "cypress";
import dotenvPlugin from 'cypress-dotenv';

export default defineConfig({
  e2e: {
    baseUrl: "https://www.beatstars.com",
    supportFile: "cypress/support/e2e.ts",
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {

      config = dotenvPlugin(config)

      return config;
    },
  },
})