<!--
 * @Description: 
 * @Author: Wangtr
 * @Date: 2020-12-05 01:03:36
 * @LastEditTime: 2020-12-31 11:06:21
 * @LastEditors: Wangtr
 * @Reference: 
-->
<template>
  <div class="cm_nav clearfix">
    <div class="logo lf"></div>
    <div class="search lf">
      <a-input
        v-model="search_value"
        placeholder="输入想要搜索的商品"
      >
        <a-icon slot="suffix" type="search" />
      </a-input>
    </div>
    <ul class="nav_items lf clearfix">
      <li v-for="item in items" class="nav_item lf">
        {{item}}
      </li>
    </ul>
    <a-avatar
      icon="user"
      size="large"
      class="rt nav_avatar"
      @click="goto('/login')"
    ></a-avatar>
  </div>
</template>

<script>
import { Input,Icon,Avatar } from 'ant-design-vue'
export default {
  name: "NavBar",
  components:{
      AInput:Input,
      AIcon:Icon,
      AAvatar: Avatar
  },
  data () {
    return {
      items: ['首 页','分 类','数 据'],
      search_value: '',
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less">
.cm_nav{
  height: 64px;
  line-height: 64px;
  width: 100%;
  min-width: 1200px;
  // border-bottom: 2px solid #1e85e9;
  box-shadow: 0px 2px 3px #eaeaea;
}
.logo{
  height: 54px;
  margin: 5px 40px;
  width: 202px;
  background-color: pink;
}
.search{
  width: 25%;
}
.nav_items{
  margin: 0 35px;
  .nav_item{
    padding: 0 25px;
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    font-weight: bold;
    color: #999999;
  }
  .cur,.nav_item:hover{
    font-weight: bold;
    color: #1e85e9;
    border-bottom: 2px solid #1e85e9;
  }
}
.nav_avatar{
  margin: 12px 15px 12px 12px;
}
</style>
