import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载页面组件
const Home = () => import('../views/Home/Home.vue')
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
    component: Home
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
