import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import dotenvPlugin from 'cypress-dotenv';

export default defineConfig({
  e2e: {
    specPattern: "**/**/*.feature",
    baseUrl: "https://www.beatstars.com",
    supportFile: "cypress/support/e2e.js",
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config)

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )

      dotenvPlugin(on, config)

      return config;
    },
  },
})