import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'intro',
  templateUrl: 'app/intro/intro.component.html',
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class IntroComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}
