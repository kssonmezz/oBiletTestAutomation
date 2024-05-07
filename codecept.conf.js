const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize: "maximize"
    }
  },
  include: {
    I: './steps_file.js',
    mainPagePage: "./pages/mainPage.js",
    registerPagePage: "./pages/registerPage.js"
  },
  name: 'oBilet Test Automation Project'
}