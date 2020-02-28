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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AutoSales.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
