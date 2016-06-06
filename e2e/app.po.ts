export class ChromeExtensionNg2BoilerplatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('chrome-extension-ng2-boilerplate-app h1')).getText();
  }
}
