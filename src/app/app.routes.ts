import { provideRouter, RouterConfig } from '@angular/router';

import { RedirectComponent } from './redirect/redirect.component';
import { IntroComponent } from './intro/intro.component';
import { BackgroundComponent } from './background/background.component';
import { PopupComponent } from './popup/popup.component';
import { OptionsComponent } from './options/options.component';

const routes: RouterConfig = [
  {
    path: '/background',
    component: BackgroundComponent
  },
  {
    path: '/popup',
    component: PopupComponent
  },
  {
    path: '/options',
    component: OptionsComponent
  },
  {
    path: '/index.html',
    component: RedirectComponent
  },
  {
    path: '/',
    component: IntroComponent,
    index: true
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
