<!--
 * @Description: 垂直方向的fixed推荐广告
 * @Author: Wangtr
 * @Date: 2021-03-01 13:13:53
 * @LastEditTime: 2021-03-01 14:25:27
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div class="fixed_list">
        <p>喜欢这本书的人还喜欢：</p>
        <book
            v-for="(item,i) in data"
            :key="i"
            :data="item"
        ></book>
    </div>
</template>

<script>
import Book from 'components/Book';

export default {
    name: 'VerticalRecommend',
    components: {
        Book
    },
    data() {
        return {
            data: []
        };
    },
    created() {
        this.$http.queryRecommend().then(res => {
            this.data = res.data;
        });
    }
};
</script>

<style lang="less" scoped>
.fixed_list{
    position: absolute;
    right: 5px;
    top: calc( @navHeight + 20px);
}
</style>
