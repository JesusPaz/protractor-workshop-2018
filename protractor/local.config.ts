import { Config, browser } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 1000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
};
