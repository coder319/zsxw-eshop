<!--
 * @Description: 首页
 * @Author: Wangtr
 * @Date: 2020-11-14 09:37:58
 * @LastEditTime: 2021-02-23 13:11:57
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div class="home">
        <nav-bar></nav-bar>
        <div class="cm_content">
            <div class="cm_main clearfix">
                <!--        顶部轮播图-->
                <a-carousel class="home_carousel" autoplay>
                    <div class="slide"><img src="../../assets/image/home_banner_slide1.jpg" alt="1" /></div>
                    <div class="slide"><img src="../../assets/image/home_banner_slide1.jpg" alt="2" /></div>
                    <div class="slide"><img src="../../assets/image/home_banner_slide1.jpg" alt="3" /></div>
                    <div class="slide"><img src="../../assets/image/home_banner_slide1.jpg" alt="4" /></div>
                </a-carousel>
                <!--        左侧列表-->
                <div class="lf lf_box">
                    <p class="title">
                        重点推荐
                    </p>
                    <ul lf_list>
                        <li v-for="(i,index) in lf_list1" :key="index" class="list_item">{{ i.text }}</li>
                    </ul>
                    <p class="title">
                        排行榜
                    </p>
                    <ul lf_list>
                        <li v-for="(i,index) in lf_list2" :key="index" class="list_item">{{ i.text }}</li>
                    </ul>
                </div>
                <!--        主体右侧盒子-->
                <div class="lf rt_box">
                    <span class="title">
                        特价专区
                    </span>
                    <div class="content clearfix">
                        <book class="lf tjzq_book"></book>
                        <book class="lf tjzq_book"></book>
                        <book class="lf tjzq_book"></book>
                        <book class="lf tjzq_book"></book>
                    </div>
                    <span class="title">
                        畅销书籍
                    </span>
                    <div class="content clearfix">
                        <book class="lf tjzq_book"></book>
                        <book class="lf tjzq_book"></book>
                        <book class="lf tjzq_book"></book>
                        <book class="lf tjzq_book"></book>
                    </div>
                    <span class="title">
                        新书上架
                    </span>
                    <div class="content clearfix">
                        <book class="lf tjzq_book"></book>
                        <book class="lf tjzq_book"></book>
                        <book class="lf tjzq_book"></book>
                        <book class="lf tjzq_book"></book>
                    </div>
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
import { Carousel } from 'ant-design-vue';
import login from '@/mixin/login';
export default {
    name: 'Home',
    components: {
        navBar,
        cmFooter,
        Book,
        ACarousel: Carousel
    },
    mixins: [login],
    data() {
        return {
            lf_list1: [
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
            lf_list2: [
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
        };
    },
    computed: {
    },
    methods: {
    }
};
</script>

<style lang="less">
.home_carousel{
  margin-bottom: 20px;
  padding-top: 20px;
  .slide{
    height: 320px;
    background-color: pink;
    img{
      height: 320px;
    }
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
    color: @linkColor;
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
    color: @linkColor;
  }
  .content{
    margin-top: 10px;
    width: 100%;
    border-top: 1px solid #dddddd;
  }
}
.tjzq_book{
  margin: 10px 20px;
}
</style>
