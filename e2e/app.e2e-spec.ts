import { ChromeExtensionNg2BoilerplatePage } from './app.po';

describe('ChromeExtensionNg2Boilerplate App', function() {
  let page: ChromeExtensionNg2BoilerplatePage;

  beforeEach(() => {
    page = new ChromeExtensionNg2BoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
