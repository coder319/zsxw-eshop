<!--
 * @Description: 购物车
 * @Author: Wangtr
 * @Date: 2021-01-27 16:28:10
 * @LastEditTime: 2021-01-27 17:26:52
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cm_content cart_content clearfix">
            <div class="content_side lf"></div>
            <div class="content_main lf">
            </div>
        </div>
    </div>
</template>

<script>
import navBar from 'components/FixedNav';
// import cmFooter from 'components/Footer';
export default {
    name: 'Cart',
    components: {
        navBar
    },
    data() {
        return {
        };
    }
};
</script>

<style lang="less">
.cart_content{
    padding: 0;
}
.content_side, .content_main{
    min-height: calc( 100vh - @navHeight );
    background-color: #fff;
}

.content_side{
    width: 20vw;
    border-right: 3px solid #f6f6f6;
}

.content_main{
    width: 80vw;
}
</style>
