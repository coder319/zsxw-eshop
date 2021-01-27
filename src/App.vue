<!--
 * @Description:
 * @Author: Wangtr
 * @Date: 2020-11-14 09:37:58
 * @LastEditTime: 2021-01-27 17:02:03
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div id="app">
        <a-spin :spinning="this.$store.state.LOADING_NUM > 0" :delay="500" size="large" tip="loading...">
            <router-view></router-view>
        </a-spin>
    </div>
</template>

<script>
import { Spin } from 'ant-design-vue';
export default {
    components: {
        ASpin: Spin
    }
};
</script>

<style lang="less">
@import "./assets/style/common.less";
@import "./assets/style/variable.less";

</style>
