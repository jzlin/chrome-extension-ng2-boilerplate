import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { BackgroundComponent } from './background/background.component';
import { PopupComponent } from './popup/popup.component';
import { OptionsComponent } from './options/options.component';

@Component({
  moduleId: module.id,
  selector: 'chrome-extension-ng2-boilerplate-app',
  templateUrl: 'chrome-extension-ng2-boilerplate.component.html',
  styleUrls: ['chrome-extension-ng2-boilerplate.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
@Routes([
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
  }
])
export class ChromeExtensionNg2BoilerplateAppComponent implements OnInit {
  title = 'chrome-extension-ng2-boilerplate works!';

  ngOnInit() {
    console.log(location);
  }
}
