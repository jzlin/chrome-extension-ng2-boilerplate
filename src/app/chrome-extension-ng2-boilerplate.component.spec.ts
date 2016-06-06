import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ChromeExtensionNg2BoilerplateAppComponent } from '../app/chrome-extension-ng2-boilerplate.component';

beforeEachProviders(() => [ChromeExtensionNg2BoilerplateAppComponent]);

describe('App: ChromeExtensionNg2Boilerplate', () => {
  it('should create the app',
      inject([ChromeExtensionNg2BoilerplateAppComponent], (app: ChromeExtensionNg2BoilerplateAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'chrome-extension-ng2-boilerplate works!\'',
      inject([ChromeExtensionNg2BoilerplateAppComponent], (app: ChromeExtensionNg2BoilerplateAppComponent) => {
    expect(app.title).toEqual('chrome-extension-ng2-boilerplate works!');
  }));
});
