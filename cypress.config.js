import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
export async function setupNodeEvents(
  on,
  config
) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  // custom plugin
  // require("./cypress/plugins/index.js")(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  video: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.feature",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
