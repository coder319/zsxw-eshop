<!--
 * @Description: 商品项样式二
 * @Author: Wangtr
 * @Date: 2020-12-11 14:06:46
 * @LastEditTime: 2021-03-02 15:07:45
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
            <div class="introduce f-oh2">{{ data.introduce }}</div>
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
            <a-button
                shape="circle"
                icon="shopping"
                @click="inCart(data.name,data.cid)"
            ></a-button>
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
                    introduce: '简介',
                    author: '作者',
                    tag: '标签',
                    price: 0.00
                };
            }
        }
    },
    methods: {
        // 跳转详情页
        toDetail() {
            this.$router.push({
                name: 'Detail',
                query: {
                    cid: this.data.cid
                }
            });
        },
        // 搜索作者
        search(str) {
            this.$emit('searchAuthor', str);
        },
        // 加入购物车
        inCart(name, cid) {
            const _this = this;
            this.$confirm({
                title: '加入购物车',
                content: `是否将${name}加入购物车?`,
                okText: '加入',
                cancelText: '取消',
                onOk() {
                    _this.$http.changeCart({
                        cid: cid,
                        newNum: 1
                    }).then(res => {
                        console.log(res);
                    });
                }
            });
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
        .introduce{
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
