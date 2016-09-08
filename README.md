Style Outline
=============
Debug your CSS layers easily.

[![build status](https://travis-ci.org/stremann/style-outline.svg?branch=master)](https://travis-ci.org/stremann/style-outline)
[![npm version](https://img.shields.io/npm/v/style-outline.svg)](https://www.npmjs.com/package/style-outline)
[![npm downloads](https://img.shields.io/npm/dm/style-outline.svg?style=flat-square)](https://www.npmjs.com/package/style-outline)

### Installation

To install the stable version:

```
npm install --save-dev style-outline
```

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.  
If you don't, you can [access these files on unpkg](https://unpkg.com/style-outline/), download them, or point your package manager to them.

If you don't use a module bundler, it's also fine. 
The `style-outline` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/style-outline/dist/). 
They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. 
For example, you can drop a UMD build as a [`<script>` tag](https://unpkg.com/style-outline/dist/style-outline.js) on the page. 
The UMD builds make Style Outline available as a `window.StyleOutline` global variable.

```js
window.StyleOutline.default();
```

The Style Outline source code is written in ES2015 but it is precompiled both CommonJS and UMD builds to ES5 so they work in [any modern browser](http://caniuse.com/#feat=es5). 

Note that unlike Style Outline itself, packages in the Style Outline ecosystem don't provide UMD builds, so it is recommended using CommonJS module bundlers like [Webpack](http://webpack.github.io) and [Browserify](http://browserify.org/) for the most comfortable development experience.

### Gist

The only thing you need is to invoke *outline* function when page is loaded.

```js
import outline from 'style-outline';

outline();
```

That's it!

### Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the GitHub [Releases](https://github.com/stremann/style-outline/releases) page.

### License

MIT