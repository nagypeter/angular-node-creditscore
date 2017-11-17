exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['$WERCKER_ROOT/test/creditscore.spec.js'],
  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    }
  }
};