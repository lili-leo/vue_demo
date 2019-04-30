// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"

import App from './App'
import router from './router'
import store from "./store"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

/*地图*/
/*import GinkgoMap from 'ginkgo-map'
Vue.use(GinkgoMap)*/

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  // components: {
  //   App
  // },
  // template: '<APP/>',
  store
})
