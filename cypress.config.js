const { defineConfig } = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

async function setupNodeEvents(
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
module.exports = defineConfig({
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
