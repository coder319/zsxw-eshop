<!--
 * @Description: 购物车
 * @Author: Wangtr
 * @Date: 2021-01-27 16:28:10
 * @LastEditTime: 2021-03-02 16:34:18
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cm_content cart_content clearfix">
            <div class="content_side lf">
                <span class="recommend">推荐商品</span>
                <book
                    v-for="(item,i) in recommendData"
                    :key="i"
                    :data="item"
                    class="book"
                ></book>
            </div>
            <div class="content_main lf">
                <section class="table_header">
                    <span class="check_box">
                        <a-checkbox
                            :indeterminate="indeterminate"
                            :checked="checkAll"
                            @change="onCheckAllChange"
                        >
                        </a-checkbox>
                    </span>
                    <span class="commodity">商品</span>
                    <span class="price">单价</span>
                    <span class="num">数量</span>
                    <span class="item_price">小结</span>
                    <span class="total_price">总价:{{ allTotal }}</span>
                </section>
                <a-checkbox-group :value="checked" @change="onChange">
                    <section v-for="(item ,i) in listData" :key="i" class="list_item">
                        <span class="check_box">
                            <a-checkbox :value="item.cid"></a-checkbox>
                        </span>
                        <span class="commodity">
                            <commodity
                                :data="item"
                                @deleteItem="deleteItem"
                                @changeTotal="changeTotalList"
                            ></commodity>
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
import login from '@/mixin/login';
import Book from 'components/Book';
export default {
    name: 'Cart',
    components: {
        navBar,
        Commodity,
        Book,
        ACheckbox: Checkbox,
        ACheckboxGroup: Checkbox.Group
    },
    mixins: [login],
    data() {
        return {
            // 推荐列表
            recommendData: [],
            // 商品列表
            listData: [
                // {
                //     cid: 1,
                //     cover: require('@/assets/image/test_cover1.jpg'),
                //     name: '书名',
                //     desc: '简介',
                //     author: '作者',
                //     tag: '标签',
                //     num: 1,
                //     price: 28.90,
                //     seller: '商家'
                // }
            ],
            // 每个商品的小结金额对象key=cid,value=num*price
            totalList: {
                // 1: 123.6,
                // 2: 123.6,
                // 3: 123.6,
                // 4: 123.6,
                // 5: 123.6
            },
            checked: [],
            indeterminate: false,
            checkAll: false
        };
    },
    computed: {
        allTotal() {
            let total = 0;
            if (this.checked.length > 0) {
                this.checked.forEach(val => {
                    total += this.totalList[val];
                });
            }
            // console.log(total, total.toFixed(2));
            return total.toFixed(2);
        },
        checkedAll() {
            const arr = [];
            this.listData.forEach(val => {
                arr.push(val.cid);
            });
            return arr;
        }
    },
    created() {
        // 推荐列表
        this.$http.queryRecommend().then(res => {
            this.recommendData = res.data;
        });
        this.init();
    },
    methods: {
        // 初始化购物车列表
        init() {
            this.$http.queryCart().then(res => {
                this.listData = res.data;
                this.totalList = {};
                this.listData.forEach(val => {
                    // console.log(val.cid, val.num, val.price);
                    this.$set(this.totalList, val.cid, val.num * val.price);
                });
            });
        },
        // 单项删除
        deleteItem(name, cid) {
            const _this = this;
            this.$confirm({
                title: '移除商品',
                content: `是否将${name}从购物车移除?`,
                okText: '删除',
                cancelText: '取消',
                onOk() {
                    _this.$http.changeCart({
                        cid: cid,
                        newNum: 0
                    }).then(res => {
                        // console.log(res);
                        if (res.success) {
                            _this.$message.success('移除成功！');
                            _this.init();
                        }
                    });
                }
            });
        },
        onChange(val) {
            this.checked = val;
            if (val.length === this.listData.length) {
                this.checkAll = true;
                this.indeterminate = false;
            } else if (val.length === 0) {
                this.checkAll = false;
                this.indeterminate = false;
            } else {
                this.checkAll = false;
                this.indeterminate = true;
            }
        },
        changeTotalList() {
            // console.log(arguments, arguments[0], arguments[1]);
            this.$set(this.totalList, arguments[0], arguments[1]);
        },
        onCheckAllChange(e) {
            Object.assign(this, {
                checkedList: e.target.checked ? this.listData : [],
                indeterminate: false,
                checkAll: e.target.checked
            });
            if (this.checkAll) {
                this.checked = this.checkedAll;
            } else {
                this.checked = [];
            }
        },
        pay() {
        }
    }
};
</script>

<style lang="less" scoped>
span{
    display: table-cell;
}
.cart_content{
    width: 100vw;
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
    .recommend{
        display: inline-block;
        width: 100%;
        padding: 22px;
        text-align: center;
        color: #666;
        font-size: 25px;
    }
    .book{
        margin: 0 auto;
    }
}

.content_main{
    width: 80vw;
    box-sizing: border-box;
    .check_box{
        width: 40px;
        vertical-align: middle;
    }

    /deep/.price,/deep/.item_price{
        width: 8vw;
        vertical-align: middle;
    }
    /deep/.num{
        width: 140px;
        vertical-align: middle;
    }
    .table_header{
        padding: 20px;
        line-height: 60px;
        border-bottom: 2px solid #f6f6f6;
        .commodity{
            padding: 0 20px;
            width: calc( 35vw + 185px);
        }
    }
    .list_item{
        display: inline-block;
        padding: 0 20px;
        border-bottom: 2px solid #f6f6f6;
        .commodity{
            vertical-align: middle;
            padding: 0 20px;
            width: calc( 80vw - 40px );
        }
    }
}
</style>
