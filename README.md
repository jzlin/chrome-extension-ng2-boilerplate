# chrome-extension-ng2-boilerplate

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.6.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Install
1. run `git clone https://github.com/jzlin/chrome-extension-ng2-boilerplate.git`
2. run `cd chrome-extension-ng2-boilerplate`
3. run `npm install`
4. run `typings install`
5. run `ng serve`
6. open [http://localhost:4200](http://localhost:4200)

## Test Extension in Chrome
1. Visit `chrome://extensions/` in your browser.
2. Ensure that the `Developer mode` checkbox in the top right-hand corner is checked.
3. Click Load `unpacked extension…` to pop up a file-selection dialog.
4. Navigate to the directory `dist`, and select it.

## Build zip
1. run `ng build --prod`
2. run `npm run compress` (zip file will be generated in dist folder.)
