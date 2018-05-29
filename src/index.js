import SquareSpinner from './components/SquareSpinner.vue'
import TileSpinner from './components/TileSpinner.vue'
import PulseSpinner from './components/PulseSpinner.vue'
import FoldSpinner from './components/FoldSpinner.vue'
import CubeSpinner from './components/CubeSpinner.vue'
import BounceSpinner from './components/BounceSpinner.vue'
import CircleSpinner from './components/CircleSpinner.vue'

// Install the components
export function install (Vue) {
  Vue.component('square', SquareSpinner)
  Vue.component('tile', TileSpinner)
  Vue.component('pulse', PulseSpinner)
  Vue.component('fold', FoldSpinner)
  Vue.component('cube', CubeSpinner)
  Vue.component('bounce', BounceSpinner)
  Vue.component('circle-spin', CircleSpinner)
}

// Expose the components
export {
  SquareSpinner,
  TileSpinner,
  PulseSpinner,
  FoldSpinner,
  CubeSpinner,
  BounceSpinner,
  CircleSpinner,
  /* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
