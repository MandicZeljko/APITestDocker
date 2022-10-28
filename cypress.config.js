const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    setupNodeEvents(on, config) {
      reporter: 'mochawesome'
      // implement node event listeners here
    },
  },
});
