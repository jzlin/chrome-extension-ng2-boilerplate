import { ChromeExtensionNg2BoilerplatePage } from './app.po';

describe('chrome-extension-ng2-boilerplate App', function() {
  let page: ChromeExtensionNg2BoilerplatePage;

  beforeEach(() => {
    page = new ChromeExtensionNg2BoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('chrome-extension-ng2-boilerplate works!');
  });
});
