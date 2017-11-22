let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['/pipeline/source/test/creditscore.spec.js'],
  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      args: [ '--no-sandbox', '--headless', '--disable-gpu', '--window-size=800,600' ]
    }
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
};