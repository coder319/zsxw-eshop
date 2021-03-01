<!--
 * @Description: 分类页
 * @Author: Wangtr
 * @Date: 2021-02-03 14:03:36
 * @LastEditTime: 2021-03-01 16:39:53
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div class="home">
        <nav-bar></nav-bar>
        <div class="cm_content sort_content">
            <div class="cm_main sort_main clearfix">
                <div class="list">
                    <recommend></recommend>
                    <section class="tag_bar">
                        <span
                            v-for="(tag,i) in tags"
                            :key="i"
                            :class="{'cur':curTag===i}"
                            class="tags"
                            @click="curChange(i)"
                        >{{ tag }}</span>
                    </section>
                    <book
                        v-for="(item,i) in data"
                        :key="i"
                        :data="item"
                        class="item lf"
                    ></book>
                </div>
            </div>
        </div>
        <cm-footer></cm-footer>
    </div>
</template>

<script>
import navBar from 'components/FixedNav';
import cmFooter from 'components/Footer';
import Book from 'components/Book';
import login from '@/mixin/login';
import Recommend from 'components/VerticalRecommend';

export default {
    name: 'Sort',
    components: {
        navBar,
        cmFooter,
        Book,
        Recommend
    },
    mixins: [login],
    data() {
        return {
            tags: ['玄幻魔法', '武侠修真', '都市言情', '历史军事', '恐怖灵异', '科幻小说', '职场校园', '美文名著'],
            curTag: 0,
            data: []
        };
    },
    created() {
        this.queryList('玄幻魔法');
    },
    methods: {
        // 变更类型标签
        curChange(cur) {
            this.curTag = cur;
            this.queryList(this.tags[cur]);
        },
        // 查询列表
        queryList(type) {
            this.$http.queryGoods({
                type: type,
                pageSize: 25,
                currentPage: 1
            }).then(res => {
                this.data = res.data.list;
            });
        }
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
.list{
    width: 1200px;
    margin: 0 auto;
    .tag_bar{
        // background-color: pink;
        margin-top: 15px;
        display: flex;
        justify-content: center;
        .tags{
            display: inline-block;
            padding: 8px 16px;
            margin: 0 5px;
            font-size: 20px;
            font-weight: bold;
            color: #666;
        }
        .tags:hover,.cur{
            background-color: rgb(138, 138, 255);
            color: #f6f6f6;
            border-radius: 5px;
        }
    }
    .item{
        margin: 10px 25px;
    }
}
</style>
