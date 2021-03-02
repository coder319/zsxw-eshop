<!--
 * @Description: 购物车商品组件
 * @Author: Wangtr
 * @Date: 2021-01-28 15:06:44
 * @LastEditTime: 2021-03-02 14:55:54
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div>
        <div class="commodity clearfix">
            <img class="lf" :src="data.cover" alt="cover" />
            <section class="describe lf">
                <div class="name">{{ data.name }}</div>
                <div class="desc f-oh2">{{ data.desc }}</div>
                <div class="author">{{ data.author }}</div>
                <div class="tag">{{ data.tag }}</div>
                <div class="seller f-otw">{{ data.seller }}</div>
            </section>
            <section class="price lf">￥{{ data.price.toFixed(2) }}</section>
            <section class="input_number num lf">
                <a-input-number
                    v-model="commodityNum"
                    size="large"
                    :precision="0"
                    :min="1"
                ></a-input-number>
            </section>
            <section class="item_price lf">
                ￥{{ total.toFixed(2) }}
            </section>
        </div>
    </div>
</template>

<script>
import { InputNumber } from 'ant-design-vue';
export default {
    name: 'Commodity',
    components: {
        AInputNumber: InputNumber
    },
    props: {
        // 商品信息
        data: {
            type: Object,
            default: () => {
                return {
                    cid: 9999,
                    cover: require('@/assets/image/test_cover1.jpg'),
                    name: '书名',
                    desc: '简介',
                    author: '作者',
                    tag: '标签',
                    num: 1,
                    price: 28.90,
                    seller: '商家'
                };
            }
        }
    },
    data() {
        return {
            commodityNum: 1
        };
    },
    computed: {
        total() {
            return this.data.price * this.commodityNum;
        }
    },
    watch: {
        commodityNum(newVal) {
            // console.log('aaaa', this.data.cid);
            this.$emit('changeTotal', this.data.cid, this.total);
        }
    },
    created() {
        // console.log(this.commodityNum, this.data.num);
        this.commodityNum = this.data.num;
    }
};
</script>

<style lang="less" scoped>
.commodity{
    padding: 20px 0;
    //左侧封面
    img{
        width: 145px;
    }
    // 中间书本信息
    .describe{
        margin-left: 20px;
        width: 35vw;
        div{
            margin-top: 15px;
        }
        div:nth-child(1){
            margin-top: 0;
        }
        .name{
            font-size: 24px;
            font-weight: bold;
        }
        .desc{
            height: 56px;
            font-size: 18px;
            color: #888888;
            text-indent: 2rem;
        }
    }
    .price,.item_price{
        margin-top: 80px;
        font-size: 20px;
        color: #b12704;
    }
    .input_number{
        margin-top: 75px;
    }
}
</style>
