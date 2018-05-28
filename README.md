# Vue Spinners [![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

[![npm](https://img.shields.io/npm/v/vue-spinners.svg) ![npm](https://img.shields.io/npm/dm/vue-spinners.svg)](https://www.npmjs.com/package/vue-spinners)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A vue js component library which contains multiple spinners from [SpinKit](http://tobiasahlin.com/spinkit/) . Vue components built by Adib Mohsin. Please take a look at the [live example](https://pacifio.github.io/vue-spinners/docs/docs.html)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```bash
npm install --save vue-spinners
```

## You could use it in the browser
```html
<!-- Add these two line -->
<link rel="stylesheet" href="https://unpkg.com/vue-spinners@1.0.0/dist/vue-spinners.css">
<script src="https://unpkg.com/vue-spinners@1.0.0/dist/vue-spinners.browser.js"></script>

<!-- Import vue.js -->
<script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
```

## Default import

Install all the components:

```javascript
import Vue from 'vue'
import VueSpinners from 'vue-spinners'

Vue.use(VueSpinners)
```

Use specific components:

```javascript
import Vue from 'vue'
import { SquareSpinner } from 'vue-spinners'

Vue.component('square', SquareSpinner)
```

**⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.**

## Distribution import

Install all the components:

```javascript
import 'vue-spinners/dist/vue-spinners.css'
import VueSpinners from 'vue-spinners/dist/vue-spinners.common'

Vue.use(VueSpinners)
```

Use specific components:

```javascript
import 'vue-spinners/dist/vue-spinners.css'
import { SquareSpinner } from 'vue-spinners/dist/vue-spinners.common'

Vue.component('square', SquareSpinner)
```

**⚠️ You may have to setup your bundler to embed the css file in your page.**

## Browser

```html
<link rel="stylesheet" href="vue-spinners/dist/vue-spinners.css"/>

<script src="vue.js"></script>
<script src="vue-spinners/dist/vue-spinners.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

Install all the components:

```javascript
Vue.use(VueSpinners)
```

Use specific components:

```javascript
Vue.component('square', VueSpinners.SquareSpinner)
```

## Source import

Install all the components:

```javascript
import Vue from 'vue'
import VueSpinners from 'vue-spinners/src'

Vue.use(VueSpinners)
```

Use specific components:

```javascript
import Vue from 'vue'
import { SquareSpinner } from 'vue-spinners/src'

Vue.component('square', SquareSpinner)
```

**⚠️ You need to configure your bundler to compile `.vue` files.** More info [in the official documentation](https://vuejs.org/v2/guide/single-file-components.html).

# Usage
## This is a simple example showing the square spinner
```javascript
# main.js
import Vue from 'vue'
import VueSpinners from 'vue-spinners'

Vue.use(VueSpinners)
```
## Then use it inside your vue component (.vue) file
```jsx
<template>
  <div>
    <square></square>
  </div>
</template>
```
## You can also pass down loading prop in order to dynamically show this spinner
```jsx
<template>
  <div>
    <square v-bind:loading="isLoading"></square>
  </div>
</template>
<script>
export default{
  data(){
    return {
      isLoading: true
    }
  }
}
</script>
```


# Example

### All the live examples live in [here](https://pacifio.github.io/vue-spinners/docs/docs.html)
---

# Plugin Development

## Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm install
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run dev
```

## Use it in another project

While developping, you can follow the install instructions of your plugin and link it into the project that uses it.

In the plugin folder:

```
npm link
```

In the other project folder:

```
npm link vue-spinners
```

This will install it in the dependencies as a symlink, so that it gets any modifications made to the plugin.

## Publish to npm

You may have to login to npm before, with `npm adduser`. The plugin will be built in production mode before getting published on npm.

```
npm publish
```

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
