<!--
 * @Description:
 * @Author: Wangtr
 * @Date: 2020-12-11 14:06:46
 * @LastEditTime: 2021-01-28 15:14:11
 * @LastEditors: Wangtr
 * @Reference:
-->
<template>
    <div class="cm_book2 clearfix">
        <img class="lf" :src="book.cover" alt="cover" />
        <div class="describe lf">
            <div class="name">{{ book.name }}</div>
            <div class="des f-oh2">{{ book.des }}</div>
            <div class="author">{{ book.author }}</div>
            <div class="tag">{{ book.tag }}</div>
            <div class="price">￥{{ book.price.toFixed(2) }}</div>
        </div>
        <div class="opts lf">
            <a-button shape="circle" icon="star"></a-button>
            <a-button shape="circle" icon="shopping"></a-button>
        </div>
    </div>
</template>

<script>
import { Button } from 'ant-design-vue';
export default {
    name: 'Book2',
    components: {
        AButton: Button
    },
    props: {
        // 接收到的书本数据
        book: {
            type: Object,
            default: () => {
                return {
                    cover: require('../../assets/image/test_cover1.jpg'),
                    name: '书名',
                    des: '简介',
                    author: '作者',
                    tag: '标签',
                    price: 0.00
                };
            }
        }
    }
};
</script>

<style lang="less" scoped>
.cm_book2{
  padding: 20px;
  border-bottom: 1px solid #dddddd;
  //左侧封面
  img{
    width: 145px;
  }
  // 中间书本信息
  .describe{
    margin-left: 20px;
    width: 835px;
    div{
      margin-top: 15px;
    }
    div:nth-child(1){
      margin-top: 0;
    }
    .name{
      font-size: 24px;
      font-weight: bold;
    }
    .des{
      height: 56px;
      font-size: 18px;
      color: #888888;
      text-indent: 2rem;
    }
    .price{
      font-size: 20px;
      color: #b12704;
    }
  }
  // 右侧按钮布局样式
  .opts{
    margin-top: 40px;
    width: 100px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .btn{
      height: 100px;
    }
  }
}
</style>
