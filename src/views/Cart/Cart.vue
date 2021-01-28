<!--
 * @Description: 购物车
 * @Author: Wangtr
 * @Date: 2021-01-27 16:28:10
 * @LastEditTime: 2021-01-28 17:40:49
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cm_content cart_content clearfix">
            <div class="content_side lf"></div>
            <div class="content_main lf">
                <section class="table_header">
                    <span class="check_box">
                        <a-checkbox></a-checkbox>
                    </span>
                    <span class="commodity">商品</span>
                    <span class="price">单价</span>
                    <span class="num">数量</span>
                    <span class="item_price">小结</span>
                    <!-- <span class="total_price">总价</span> -->
                </section>
                <a-checkbox-group>
                    <section v-for="i in 10" :key="i" class="list_item">
                        <span class="check_box">
                            <a-checkbox></a-checkbox>
                        </span>
                        <span class="commodity">
                            <commodity></commodity>
                        </span>
                    </section>
                </a-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from 'components/NavBar';
import Commodity from './components/Commodity';
import { Checkbox } from 'ant-design-vue';
export default {
    name: 'Cart',
    components: {
        navBar,
        Commodity,
        ACheckbox: Checkbox
    },
    data() {
        return {
        };
    }
};
</script>

<style lang="less" scoped>
span{
    display: table-cell;
}
.cart_content{
    padding: 0;
}
.content_side, .content_main{
    height: calc( 100vh - @navHeight );
    overflow-y: scroll;
    background-color: #fff;
}

.content_side{
    box-sizing: border-box;
    width: 20vw;
    border-right: 3px solid #f6f6f6;
}

.content_main{
    width: 80vw;
    .check_box{
        width: 40px;
        vertical-align: middle;
    }

    /deep/.price,/deep/.item_price{
        width: 10vw;
        vertical-align: middle;
    }
    /deep/.num{
        width: 140px;
        vertical-align: middle;
    }
    .table_header{
        padding: 20px;
        line-height: 60px;
        border-bottom: 1px solid #dddddd;
        .commodity{
            padding: 0 20px;
            width: calc( 35vw + 185px);
        }
    }
    .list_item{
        display: inline-block;
        padding: 0 20px;
        border-bottom: 1px solid #dddddd;
        .commodity{
            vertical-align: middle;
            padding: 0 20px;
            width: calc( 80vw - 40px );
        }
    }
}
</style>
