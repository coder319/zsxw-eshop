/*
 * @Description: axios拦截器
 * @Author: Wangtr
 * @Date: 2020-12-05 00:46:28
 * @LastEditTime: 2021-03-01 13:27:56
 * @LastEditors: Wangtr
 * @Reference:
 */
// import { Spin } from 'ant-design-vue';
import axios from 'axios';
import store from '../../store/index';
// 请求拦截器
axios.interceptors.request.use(config => {
    store.commit('LOADING_START');
    // if (store.state.LOADING_NUM > 0) {
        // Spin.setDefaultIndicator({
        //     indicator: h => {
        //         return <i class="anticon anticon-loading anticon-spin ant-spin-dot"></i>;
        //     },
        // });
    // }
    return config;
});
// 添加响应拦截器
axios.interceptors.response.use(response => {
    store.commit('LOADING_END');
    // 二次处理返回值，只保留三个属性
    if (response.data.code === 3003) {
        store.commit('LOGOUT');
        alert('token过期，请重新登陆');
    }
    const res = {
        success: response.data.success,
        data: response.data.data,
        msg: response.data.msg
    };
    return res;
});
export default axios;
