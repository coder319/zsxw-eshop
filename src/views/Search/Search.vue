<!--
 * @Description: 搜索结果页
 * @Author: Wangtr
 * @Date: 2020-12-11 13:40:08
 * @LastEditTime: 2021-03-01 15:55:53
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cm_content">
            <div class="cm_main">
                <book
                    v-for="(item,i) in data"
                    :key="i"
                    :data="item"
                    @searchAuthor="searchAuthor"
                ></book>
            </div>
        </div>
        <cm-footer></cm-footer>
    </div>
</template>

<script>
import navBar from 'components/FixedNav';
import cmFooter from 'components/Footer';
import Book from 'components/Book2';
import login from '@/mixin/login';
import bus from '@/assets/js/bus.js';
export default {
    name: 'Search',
    components: {
        navBar, cmFooter, Book
    },
    mixins: [login],
    data() {
        return {
            data: []
        };
    },
    created() {
        this.queryList(sessionStorage.getItem('zsxw-eshop-search'));
    },
    mounted() {
        bus.$on('search', str => {
            // console.log(str);
            this.queryList(str);
        });
    },
    methods: {
        queryList(val) {
            this.$http.queryGoods({
                search: val,
                pageSize: 25,
                currentPage: 1
            }).then(res => {
                this.data = [];
                this.$nextTick(() => {
                    this.data = res.data.list;
                });
            });
        },
        searchAuthor(str) {
            console.log(2, str);
            sessionStorage.setItem('zsxw-eshop-search', str);
            this.queryList(str);
        }
    }

};
</script>

<style lang="less" scoped>

</style>
