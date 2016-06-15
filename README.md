# Install
1. run `$ git clone https://github.com/jzlin/chrome-extension-ng2-boilerplate.git`
2. run `$ cd chrome-extension-ng2-boilerplate`
3. run `$ npm install`
4. run `$ ng serve`
5. open [http://localhost:4200](http://localhost:4200)

# Test Extension in Chrome
1. Visit `chrome://extensions/` in your browser.
2. Ensure that the `Developer mode` checkbox in the top right-hand corner is checked.
3. Click Load `unpacked extension…` to pop up a file-selection dialog.
4. Navigate to the directory in which your extension files live, and select it.

# Build zip
1. run `$ ng build --prod`
2. run `$ npm run compress` (zip file will be generated in dist folder.)
