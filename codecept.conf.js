const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './src/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://google.com',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './src/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'my_first_codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}