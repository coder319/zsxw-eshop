/*
 * @Description: 
 * @Author: Wangtr
 * @Date: 2020-12-05 00:46:28
 * @LastEditTime: 2021-01-08 23:31:22
 * @LastEditors: Wangtr
 * @Reference: 
 */
import { Spin } from 'ant-design-vue'
import axios from 'axios'
import store from '../../store/index'
// 请求拦截器
axios.interceptors.request.use(config => {
    store.commit('LOADING_START')
    if (store.state.LOADING_NUM > 0) {
        // Spin.setDefaultIndicator({
        //     indicator: h => {
        //         return <i class="anticon anticon-loading anticon-spin ant-spin-dot"></i>;
        //     },
        // });
    }
    return config
})
// 添加响应拦截器
axios.interceptors.response.use(response => {
    store.commit('LOADING_END')
    return response.data.data
})
export default axios
