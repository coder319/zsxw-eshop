/*
 * @Description: 
 * @Author: Wangtr
 * @Date: 2020-11-14 09:37:58
 * @LastEditTime: 2020-12-31 14:53:28
 * @LastEditors: Wangtr
 * @Reference: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import { FormModel, Modal } from 'ant-design-vue'
import http from './assets/js/http'

Vue.prototype.$http = http

Vue.config.productionTip = false
Vue.use(FormModel, Modal)
// Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
