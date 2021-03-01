<!--
 * @Description: 商品项样式二
 * @Author: Wangtr
 * @Date: 2020-12-11 14:06:46
 * @LastEditTime: 2021-03-01 15:18:10
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div class="cm_book2 clearfix">
        <img class="link lf" :src="data.cover" alt="cover" @click="toDetail()" />
        <div class="describe lf">
            <div
                class="name link"
                @click="toDetail()"
            >{{ data.name }}</div>
            <div class="desc f-oh2">{{ data.desc }}</div>
            <div class="author">
                <span>作者：</span>
                <span class="link" @click="search(data.author)">
                    {{ data.author }}
                </span>
            </div>
            <a-tag color="cyan" class="tag">
                {{ data.tag }}
            </a-tag>
            <div class="price">￥{{ data.price.toFixed(2) }}</div>
        </div>
        <div class="opts lf">
            <a-button shape="circle" icon="star"></a-button>
            <a-button shape="circle" icon="shopping"></a-button>
        </div>
    </div>
</template>

<script>
import { Button, Tag } from 'ant-design-vue';
export default {
    name: 'Book2',
    components: {
        AButton: Button,
        ATag: Tag
    },
    props: {
        // 接收到的书本数据
        data: {
            type: Object,
            default: () => {
                return {
                    cover: require('../../assets/image/test_cover1.jpg'),
                    name: '书名',
                    desc: '简介',
                    author: '作者',
                    tag: '标签',
                    price: 0.00
                };
            }
        }
    },
    methods: {
        toDetail() {
            this.$router.push({
                name: 'Detail',
                query: {
                    cid: this.data.cid
                }
            });
        },
        search(str) {
            this.$emit('searchAuthor', str);
        }
    }
};
</script>

<style lang="less" scoped>
.cm_book2{
    padding: 20px;
    border-bottom: 1px solid #dddddd;
    //左侧封面
    img{
        width: 145px;
    }
    // 中间书本信息
    .describe{
        margin-left: 20px;
        width: 835px;
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
        .tag{
            margin-top: 10px;
        }
        .price{
            margin-top: 10px;
            font-size: 20px;
            color: #b12704;
        }
    }
    // 右侧按钮布局样式
    .opts{
        margin-top: 40px;
        width: 100px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .btn{
            height: 100px;
        }
    }
}
</style>
