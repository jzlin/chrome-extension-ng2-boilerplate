import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ChromeExtensionNg2BoilerplateAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ChromeExtensionNg2BoilerplateAppComponent);

