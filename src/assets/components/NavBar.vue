<!--
 * @Description:  导航栏
 * @Author: Wangtr
 * @Date: 2020-12-05 01:03:36
 * @LastEditTime: 2021-03-01 15:55:04
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
        <a-tooltip
            v-if="!$store.state.isLogin"
            placement="left"
        >
            <template slot="title" class="link">
                <span
                    class="tip"
                >
                    点击头像登陆
                </span>
            </template>
            <a-avatar
                icon="user"
                size="large"
                class="rt nav_avatar"
                @click="goto('/login')"
            ></a-avatar>
        </a-tooltip>
        <a-tooltip
            v-else
            placement="left"
        >
            <template slot="title">
                <span class="link tip" @click="logout()">
                    点击注销
                </span>
            </template>
            <a-avatar
                :src="$store.state.USER_INFO.headImg"
                size="large"
                class="rt nav_avatar"
                @click="goto('/profile')"
            ></a-avatar>
        </a-tooltip>
    </div>
</template>

<script>
import { Input, Icon, Avatar, Tooltip } from 'ant-design-vue';
import bus from '@/assets/js/bus.js';

export default {
    name: 'NavBar',
    components: {
        AInput: Input,
        AIcon: Icon,
        AAvatar: Avatar,
        ATooltip: Tooltip
    },
    data() {
        return {
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
    destroyed() {
        bus.$off('search');
    },
    methods: {
        goto(path) {
            this.$router.push(path);
        },
        search() {
            // console.log(this.search_value);
            sessionStorage.setItem('zsxw-eshop-search', this.search_value);
            console.log(0, this.$route.path);
            if (this.$route.path === '/search') {
                // this.$emit('search', this.search_value);
                bus.$emit('search', this.search_value);
            } else {
                this.$router.push({
                    name: 'Search'
                    // query: {
                    //     searchValue: this.search_value
                    // }
                });
            }
        },
        logout() {
            localStorage.setItem('zsxw_eshop_user_info', '');
            this.$store.commit('LOGOUT');
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
    margin-left: 50px;
    width: 15%;
    transition: .35s;
}
.search:focus-within{
    margin-left: 0;
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
.tip{
    padding: 3px 5px;
}
</style>
