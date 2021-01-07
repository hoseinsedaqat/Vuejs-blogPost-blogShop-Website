import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { router } from './Router/router.js'
import { store } from './Store/store.js'
Vue.use(BootstrapVue)
Vue.use(Vuerouter)
const routers = new Vuerouter({
  routes: router,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routers,
  store
}).$mount('#app')
