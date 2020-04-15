import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../views/Store.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    // 初始页重定向到商城
    path: '/',
    redirect: '/store',
    component: Store
  },
  {
    path: '/cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
