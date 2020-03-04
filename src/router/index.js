import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/#dreamcar',
    name: 'findurdreamcar',
    component: Home
  },
  {
    path: '/autosales',
    name: 'AutoSales',   
    component: () => import(/* webpackChunkName: "auto-sales" */ '../views/AutoSales.vue')
  },
  {
    path: '/carro1',
    name: 'Carro1',   
    component: () => import(/* webpackChunkName: "carro1" */ '../views/Carro1.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
