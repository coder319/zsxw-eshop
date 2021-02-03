<!--
 * @Description:  导航栏
 * @Author: Wangtr
 * @Date: 2020-12-05 01:03:36
 * @LastEditTime: 2021-02-03 14:45:11
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div class="cm_nav clearfix">
        <div class="logo lf"></div>
        <div class="search lf">
            <a-input
                v-model="search_value"
                type="search"
                placeholder="输入想要搜索的商品"
                @search="search()"
            >
                <a-icon slot="suffix" type="search" @click="search()"></a-icon>
            </a-input>
        </div>
        <ul class="nav_items lf clearfix">
            <li
                v-for="(item,index) in items"
                :key="index"
                class="nav_item lf"
                :class="{'cur':$route.path===item.path}"
                @click="goto(item.path)"
            >
                {{ item.label }}
            </li>
        </ul>
        <a-avatar
            v-if="!$store.state.isLogin"
            icon="user"
            size="large"
            class="rt nav_avatar"
            @click="goto('/login')"
        ></a-avatar>
        <a-avatar
            v-else
            :src="$store.state.USER_INFO.headImg"
            size="large"
            class="rt nav_avatar"
            @click="goto('/profile')"
        ></a-avatar>
    </div>
</template>

<script>
import { Input, Icon, Avatar } from 'ant-design-vue';
export default {
    name: 'NavBar',
    components: {
        AInput: Input,
        AIcon: Icon,
        AAvatar: Avatar
    },
    data() {
        return {
            // items: ['首 页', '分 类', '购物车'],
            items: [
                {
                    label: '首 页',
                    path: '/home'
                }, {
                    label: '分 类',
                    path: '/sort'
                }, {
                    label: '购物车',
                    path: '/cart'
                }],
            search_value: ''
        };
    },
    methods: {
        goto(path) {
            this.$router.push(path);
        },
        search() {
            console.log(this.search_value);
        }
    }
};
</script>

<style lang="less" scoped>
.cm_nav{
    box-sizing: border-box;
    height: @navHeight;
    line-height: @navHeight;
    width: 100%;
    min-width: 1200px;
    border-bottom: 1px solid #f6f6f6;
    box-shadow: 0px 2px 3px #eaeaea;
    background-color: #fff;
}
.logo{
    height: 54px;
    margin: 5px 40px;
    width: 202px;
    background-color: pink;
}
.search{
    width: 15%;
    transition: .35s;
}
.search:focus-within{
    width: 25%;
}
.nav_items{
    margin: 0 35px;
    .nav_item{
        padding: 0 25px;
        margin: 0 5px;
        height: 64px;
        line-height: 64px;
        font-size: 18px;
        font-weight: bold;
        color: #999999;
    }
    .nav_item:hover , .cur {
        font-weight: bold;
        color: @linkColor;
        border-bottom: 2px solid @linkColor;
    }
}
.nav_avatar{
    margin: 12px 15px 12px 12px;
}
</style>
