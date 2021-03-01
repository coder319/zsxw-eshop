/*
 * @Description: 路由入口文件
 * @Author: Wangtr
 * @Date: 2020-11-14 09:37:58
 * @LastEditTime: 2021-02-26 12:22:24
 * @LastEditors: Wangtr
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

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
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail/Detail.vue')
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('../views/Sort/Sort.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
