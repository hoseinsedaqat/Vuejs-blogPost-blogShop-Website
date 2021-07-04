// Main Vue App
import Vue from 'vue'
import App from './App.vue'

// Vue-Router
import Vuerouter from 'vue-router'

// UI-BootstrapVue Added
import BootstrapVue from 'bootstrap-vue'

// Import Bootstarp for Use in All Component (Global)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import Router Folder
import { router } from './Router/router.js'

// Import Vuex Folder
import { store } from './Store/store.js'

// Uses Bootsratp Vue
Vue.use(BootstrapVue)

// Use VueRouter
Vue.use(Vuerouter)

const routers = new Vuerouter({
  routes: router,
  // Chnage Mode
  mode: 'history',
})

Vue.config.productionTip = false

// Render Main App-Vuex-VueRouter
new Vue({
  render: h => h(App),
  router: routers,
  store
}).$mount('#app')
