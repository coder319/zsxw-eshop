/*
 * @Description: 入口js文件
 * @Author: Wangtr
 * @Date: 2020-11-14 09:37:58
 * @LastEditTime: 2021-01-27 15:03:05
 * @LastEditors: Wangtr
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import { FormModel, Modal, Message } from 'ant-design-vue';
import http from './assets/js/http';

Vue.prototype.$http = http;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;
Vue.use(FormModel, Modal);
// Vue.use(Antd)
Vue.prototype.$error = Modal.error;
Vue.prototype.$success = Modal.success;
Vue.prototype.$warning = Modal.warning;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
