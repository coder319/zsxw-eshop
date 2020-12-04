<template>
  <div class="cm_nav clearfix">
    <div class="logo lf"></div>
    <div class="search lf">
      <a-input></a-input>
    </div>
    <ul class="nav_items lf clearfix">
      <li v-for="item in items" class="nav_item lf">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data () {
    return {
      items: ['首 页','分 类','数 据']
    };
  }
}
</script>

<style lang="less">
.cm_nav{
  height: 64px;
  line-height: 64px;
  width: 100%;
  // border-bottom: 2px solid #1e85e9;
  box-shadow: 0px 2px 3px #eaeaea;
}
.logo{
  height: 64px;
  width: 20%;
}
.search{
  width: 30%;
}
.nav_items{
  margin: 0 20px;
  .nav_item{
    padding: 0 15px;
    height: 64px;
    line-height: 64px;
  }
  .cur,.nav_item:hover{
    font-weight: bold;
    color: #1e85e9;
    border-bottom: 2px solid #1e85e9;
  }
}
</style>