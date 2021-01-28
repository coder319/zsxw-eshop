/*
 * @Description: 路由入口文件
 * @Author: Wangtr
 * @Date: 2020-11-14 09:37:58
 * @LastEditTime: 2021-01-28 14:57:06
 * @LastEditors: Wangtr
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
// 懒加载页面组件
// const Cart = () => import('../views/Cart/Cart.vue');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')
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
    component: () => import('../views/Cart/Cart.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
