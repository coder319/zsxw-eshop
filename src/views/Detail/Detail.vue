<!--
 * @Description: 商品详情页
 * @Author: Wangtr
 * @Date: 2021-02-26 12:17:15
 * @LastEditTime: 2021-03-02 15:20:40
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cm_content">
            <div class="cm_main detail_main clearfix">
                <section class="cover lf">
                    <img :src="data.cover" alt="cover" />
                </section>
                <section class="detailBox lf">
                    <h1 class="title">{{ data.name }}</h1>
                    <a-tag color="cyan">
                        {{ data.tag }}
                    </a-tag>
                    <div class="introduce f-oh2">{{ data.introduce }}</div>
                    <div>
                        <span>作者：</span>
                        <span class="name link">{{ data.author }}</span>
                        <span>商家：</span>
                        <span class="name link">{{ data.seller }}</span>
                    </div>
                    <div class="btn">
                        <a-button size="large" icon="shopping" @click="inCart(data.name,data.cid)">加入购物车</a-button>
                    </div>
                </section>
            </div>
        </div>
        <cm-footer></cm-footer>
    </div>
</template>

<script>
import navBar from 'components/NavBar';
import cmFooter from 'components/Footer';
import login from '@/mixin/login';
import { Tag, Button } from 'ant-design-vue';
export default {
    name: 'Detail',
    components: {
        navBar,
        cmFooter,
        ATag: Tag,
        AButton: Button
    },
    mixins: [login],
    data() {
        return {
            data: {
                cid: 1,
                name: '蛙',
                cover: require('../../assets/image/test_cover1.jpg'),
                author: '莫言',
                introduce: '描述',
                tag: '标签',
                price: 64.20,
                pics: [
                    1234,
                    1111
                ],
                seller: '卖家',
                sellerId: 1234,
                stock: 12,
                monthlySales: 1,
                totalSales: 10
            }
        };
    },
    created() {
        const cid = '/' + this.$route.query.cid;
        this.$http.queryDetail(cid).then(res => {
            // console.log(res.data);
            this.data = res.data;
            // this.$set(this.data, 'cover', require('../../assets/image/test_cover1.jpg'));
        });
    },
    methods: {
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
                        // console.log(res);
                        if (res.success) {
                            _this.$message.success('加入购物车成功！');
                        }
                    });
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.detail_main{
    padding-top: 20px;
}
.cover{
    padding: 10px;
    img{
        width: 15vw;
        object-fit: fill;
    }
}
.detailBox{
    padding: 10px;
    .name{
        display: inline-block;
        padding: 0  15px 0 0;
    }
    .title{
        font-size: 36px;
        font-weight: bold;
    }
    .introduce{
        margin-top: 10px;
        line-height: 30px;
        height: 60px;
    }
    .btn{
        margin-top: 50px;
    }
}
</style>
