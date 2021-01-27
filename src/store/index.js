/*
 * @Description: VueX
 * @Author: Wangtr
 * @Date: 2020-11-14 09:37:58
 * @LastEditTime: 2021-01-27 14:20:49
 * @LastEditors: Wangtr
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LOADING_NUM: 0,
    isLogin: false,
    USER_INFO: {
      id: 0,
      username: '',
      email: '',
      sex: '',
      headImg: '',
      eMail: '',
      exp: 0,
      introduce: '',
      level: 0,
      recommend: 0
    }
  },
  mutations: {
    LOADING_START(state) {
      this.state.LOADING_NUM++;
    },
    LOADING_END(state) {
      this.state.LOADING_NUM--;
    },
    USER_INFO_UPDATE(state, info) {
      Object.keys(state.USER_INFO).forEach(val => {
        state.USER_INFO[val] = info[val];
      });
    },
    LOGIN(state) {
      state.isLogin = true;
    },
    LOGOUT(state) {
      state.isLogin = false;
    }
  },
  actions: {
  },
  modules: {
  }
});
