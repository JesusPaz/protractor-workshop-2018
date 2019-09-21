import { Config, browser } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
};
