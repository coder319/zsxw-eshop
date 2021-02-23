/*
 * @Description:检测本地登陆的混入js文件
 * @Author: Wangtr
 * @Date: 2021-02-23 13:07:28
 * @LastEditTime: 2021-02-23 13:10:58
 * @LastEditors: Wangtr
 * @Reference:
 */
export default {
    created() {
        if (!this.$store.state.isLogin) {
            const userInfo = localStorage.getItem('zsxw_eshop_user_info');
            if (userInfo) {
                this.$store.commit('USER_INFO_UPDATE', JSON.parse(userInfo));
                this.$store.commit('LOGIN');
            }
        }
    }
};
