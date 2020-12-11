import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载页面组件
const Cart = () => import('../views/Cart/Cart.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile/Profile')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search/Search')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
