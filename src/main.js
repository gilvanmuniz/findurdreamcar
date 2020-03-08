import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCarousel)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueCarousel,
  render: h => h(App)
}).$mount('#app')
