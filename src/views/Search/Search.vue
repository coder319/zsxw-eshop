<!--
 * @Description: 搜索结果页
 * @Author: Wangtr
 * @Date: 2020-12-11 13:40:08
 * @LastEditTime: 2021-02-23 14:40:26
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cm_content">
            <div class="cm_main">
                <book></book>
                <book></book>
                <book></book>
                <book></book>
                <book></book>
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
export default {
    name: 'Search',
    components: {
        navBar, cmFooter, Book
    },
    mixins: [login],
    data() {
        return {

        };
    }
};
</script>

<style scoped>

</style>
