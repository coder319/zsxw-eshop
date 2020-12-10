<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="cm_content">
      <div class="cm_main clearfix">
<!--        顶部轮播图-->
        <a-carousel class="home_carousel" autoplay>
          <div class="slide">1</div>
          <div class="slide">2</div>
          <div class="slide">3</div>
          <div class="slide">4</div>
        </a-carousel>
<!--        左侧列表-->
        <div class="lf lf_box">
          <p class="title">
            重点推荐
          </p>
          <ul lf_list>
            <li v-for="i in lf_list1" class="list_item">{{i.text}}</li>
          </ul>
          <p class="title">
            排行榜
          </p>
          <ul lf_list>
            <li v-for="i in lf_list2" class="list_item">{{i.text}}</li>
          </ul>
        </div>
<!--        主体右侧盒子-->
        <div class="lf rt_box">
          <div class="title">
            特价专区
          </div>
          <div class="content">
            <book></book>
          </div>
        </div>
      </div>
    </div>
    <cm_footer></cm_footer>
  </div>
</template>

<script>
import navBar from "../../assets/component/NavBar"
import cm_footer from "../../assets/component/Footer"
import Book from "../../assets/component/Book"
import { Carousel } from "ant-design-vue"
export default {
  name: 'Home',
  components: {
    navBar,
    cm_footer,
    Book,
    ACarousel:Carousel
  },
  data() {
    return {
      lf_list1:[
        {
          text: '打折书目',
          path: ''
        },
        {
          text: '预售专区',
          path: ''
        },
        {
          text: '电子书专区',
          path: ''
        },
        {
          text: '新书上架',
          path: ''
        }
      ],
      lf_list2:[
        {
          text: '新书畅销排行',
          path: ''
        },
        {
          text: '网络小说排行',
          path: ''
        },
        {
          text: '原创小说排行',
          path: ''
        }
      ]
    }
  },
  computed: {
  },
  methods:{
  }
}
</script>

<style lang="less">
.home_carousel{
  margin-bottom: 20px;
  padding-top: 20px;
  .slide{
    height: 320px;
    background-color: pink;
  }
}
.lf_box{
  border-right: 1px solid #dddddd;
  width: 189px;
  min-height: 200px;
  .title{
    margin: 10px 0;
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    font-weight: bold;
  }
  .list_item{
    padding-left: 1rem;
    height: 25px;
    line-height: 25px;
    cursor: pointer;
  }
  .list_item:hover{
    color: #1e85e9;
  }
}
.rt_box{
  width: 950px;
  padding: 10px 20px;
  .title{
    font-size: 21px;
    font-weight: bold;
    color: #111111;
    cursor: pointer;
  }
  .title:hover{
    color: #1e85e9;
  }
  .content{
    margin-top: 10px;
    width: 100%;
    border-top: 1px solid #dddddd;
  }
}
</style>
