<!--
 * @Description: 上滚显示，下滚隐藏的导航栏二次封装
 * @Author: Wangtr
 * @Date: 2021-01-27 15:57:29
 * @LastEditTime: 2021-01-28 17:35:14
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <a-affix v-if="isFixed" :offset-top="top">
        <nav-bar></nav-bar>
    </a-affix>
    <nav-bar v-else></nav-bar>
</template>

<script>
import { Affix } from 'ant-design-vue';
import navBar from './NavBar';
export default {
    name: 'FixedNav',
    components: {
        AAffix: Affix,
        navBar
    },
    data() {
        return {
            isFixed: false
        };
    },
    mounted() {
        // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
        window.addEventListener('scroll', this.handleScroll, true);
    },
    methods: {
        handleScroll() {
            // 页面滚动距顶部距离
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                document.body.scrollTop;
            var scroll = scrollTop - this.i;
            this.i = scrollTop;
            if (scroll < 0) {
                // console.log('up');
                this.isFixed = true;
            } else {
                // 添加你想要的事件
                // console.log('down');
                this.isFixed = false;
            }
        }
    }
};
</script>

<style lang="less">
</style>
