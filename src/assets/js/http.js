/*
 * @Description: 请求API
 * @Author: Wangtr
 * @Date: 2020-12-09 23:29:09
 * @LastEditTime: 2021-01-27 17:06:49
 * @LastEditors: Wangtr
 * @Reference:
 */
import axios from './axios';
axios.defaults.baseURL = 'http://118.31.229.85:9999';
axios.defaults.headers = {};
export default {
    getVerificationCode() {
        return axios({
            url: '/api/verificationCode'
        });
    },
    login(data) {
        return axios({
            url: '/api/login',
            method: 'post',
            data: data
        });
    }
};
