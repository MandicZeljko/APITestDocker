const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
 
  e2e: {
    setupNodeEvents(on, config) {

      video: false
      
      // implement node event listeners here
    },
  },
});
