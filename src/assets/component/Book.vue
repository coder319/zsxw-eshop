<template>
  <div class="cm_book" :style="{width:width,height:height}">
    <div class="top link">
      <img src="../image/test_cover1.jpg" alt="cover">
      <div class="f-oh2">
        人类群星闪耀时,这是一本很有意思的书,这是一本很有意思的书,这是一本很有意思的书,这是一本很有意思的书,这是一本很有意思的书,这是一本很有意思的书
      </div>
    </div>
    <div class="bottom">
      <p>作者名字</p>
      <p>标签</p>
      <p>
        ￥20.00
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Book",
    props:{
      width:{
        type: String,
        default: '184px'
      },
      height:{
        type: String,
        default: '350px'
      }
    }
  }
</script>

<style lang="less" scoped>
.cm_book{
  .top{
    img{
      width: 144px;
      margin: 10px 20px;
    }
  }
}
</style>
