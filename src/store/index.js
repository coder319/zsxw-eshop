/*
 * @Description: 
 * @Author: Wangtr
 * @Date: 2020-11-14 09:37:58
 * @LastEditTime: 2020-12-31 13:35:36
 * @LastEditors: Wangtr
 * @Reference: 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    LOADING_NUM: 0
  },
  mutations: {
    LOADING_START(state) {
      this.state.LOADING_NUM++;
    },
    LOADING_END(state) {
      this.state.LOADING_NUM--;
    }
  },
  actions: {
  },
  modules: {
  }
})
