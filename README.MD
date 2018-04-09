# Unifide Router


## Setup

run `npm install` to pull in the dependencies

Rename `/node_modules/@polymer/app-layout/app-layout.html` to `/node_modules/@polymer/app-layout/app-layout.js` and replace it's contents with:

```javascript
import './helpers/helpers.js'
import './app-drawer/app-drawer.js'
import './app-drawer-layout/app-drawer-layout.js'
import './app-grid/app-grid-style.js'
import './app-header/app-header.js'
import './app-header-layout/app-header-layout.js'
import './app-toolbar/app-toolbar.js'
import './app-box/app-box.js'
```

Next you'll need to add the firebase config file. This should be in `/config.js` and include the apikey, authdomain, etc.

## Run a development server

`npm run start`

## Build for production

This places

`npm run build`

## Technology

<img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/es6/es6.png" width="200">
<img src="https://www.polymer-project.org/images/logos/p-logo.png" width="200">
<img src="https://github.com/webpack/media/blob/master/logo/icon-square-big.png?raw=true" width="200">
<img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png" width="200" height="">
