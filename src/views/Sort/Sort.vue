<!--
 * @Description: 分类页
 * @Author: Wangtr
 * @Date: 2021-02-03 14:03:36
 * @LastEditTime: 2021-02-03 14:57:34
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div class="home">
        <nav-bar></nav-bar>
        <div class="cm_content sort_content">
            <div class="cm_main sort_main clearfix">
                <section class="tag_bar">

                </section>
            </div>
        </div>
        <cm-footer></cm-footer>
    </div>
</template>

<script>
import navBar from 'components/FixedNav';
import cmFooter from 'components/Footer';
export default {
    name: 'Sort',
    components: {
        navBar,
        cmFooter
    },
    data() {
        return {
        };
    }
};
</script>

<style lang="less" scoped>
.sort_content{
    padding: 0;
}
.sort_main{
    width: 100vw;
    min-height: calc(100vh - @navHeight - @footerHeight);
    box-sizing: border-box;
    background-color: #fff;
}
</style>
