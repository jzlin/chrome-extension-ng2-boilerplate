import { provideRouter, RouterConfig } from '@angular/router';

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
    component: PopupComponent,
    index: true
  },
  {
    path: '/options',
    component: OptionsComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
