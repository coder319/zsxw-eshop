/*
 * @Description: 请求API
 * @Author: Wangtr
 * @Date: 2020-12-09 23:29:09
 * @LastEditTime: 2021-03-01 16:54:13
 * @LastEditors: Wangtr
 * @Reference:
 */
import axios from './axios';
// axios.defaults.baseURL = 'http://118.31.229.85:9999';
axios.defaults.baseURL = 'http://49.235.226.27:9999';
// axios.defaults.withCredentials = true;
axios.defaults.headers = {};

const userInfo = localStorage.getItem('zsxw_eshop_user_info');
if (userInfo) {
    const xAccessToken = JSON.parse(userInfo).xaccessToken;
    axios.defaults.headers = {
        'x-access-token': xAccessToken
    };
}
export default {
    // 设置请求头
    setHeaders(obj) {
        axios.defaults.headers = obj;
    },
    // 获取验证码
    getVerificationCode() {
        return axios({
            url: '/api/verificationCode'
        });
    },
    // 登陆
    login(data) {
        return axios({
            url: '/api/login',
            method: 'post',
            data: data
        });
    },
    // 获取用户购物车信息
    queryCart() {
        return axios({
            url: '/api/eshop/shoppingcar',
            method: 'get'
        });
    },
    // 获取指定商品信息
    queryGoods(data) {
        return axios({
            url: '/api/eshop/goods',
            method: 'post',
            data: data
        });
    },
    // 根据id获取指定商品详细信息
    queryDetail(data) {
        return axios({
            url: '/api/eshop/goods' + data,
            method: 'get'
        });
    },
    // 推荐商品
    queryRecommend() {
        return axios({
            url: '/api/eshop/goods',
            method: 'get'
        });
    },
    // 折线图数据
    getLineData() {
        return axios({
            url: '/api/history/week',
            method: 'get'
        });
    },
    // 雷达图数据
    getRadarData() {
        return axios({
            url: '/api/history/category',
            method: 'get'
        });
    }
};
