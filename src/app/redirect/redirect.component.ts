import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'redirect',
  template: `Redirecting...`
})
export class RedirectComponent implements OnInit, OnDestroy {

  private allowPage: Array<string> = ['background', 'popup', 'options'];
  private sub: any;
  private page: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.sub = this.router.routerState.queryParams.subscribe(params => {
      if (typeof this.page !== 'undefined') {
        return;
      }
      this.page = params['page'];
      let redirectToUrl = '/';
      if (this.allowPage.indexOf(this.page) !== -1) {
        redirectToUrl += this.page;
      }
      this.router.navigateByUrl(redirectToUrl);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
