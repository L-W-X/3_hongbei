<template>
  <div class="container">
    <div class="item">
      <img src="/image/cq_kecheng.jpg" alt="">
      <div class="text">更多课程</div>
    </div>
    <div class="item">
      <img src="/image/cq_zixun.jpg" alt="">
      <div class="text">咨询</div>
    </div>
    <div class="buyContainer">
      <div class="content" v-if="originPrice">
        <div class='originPrice'>
          <span>¥</span>
          <span>{{preDiscountPrice}}</span>
        </div>
        <span>&nbsp;¥</span>
        <span>{{preDiscountPrice}}&nbsp; </span>
        <span>&nbsp; </span>
        <span>购买专栏</span>
      </div>
      <div class="content" v-else>
        <span>&nbsp;¥</span>
        <span>{{preDiscountPrice}}&nbsp; </span>
        <span>&nbsp; </span>
        <span>购买本课程</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyCourse',
  props: {
    originPrice:Number,
    preDiscountPrice:Number
  }
}
</script>

<style lang="scss" scoped>
  .container{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 375px !important;
    height: 49px !important;
    margin: 0 auto;
    border-top: 1px solid;
    border-top-color: #F5F7F9;
    background-color: #fff;
    color: #fff;
    display: flex;
    flex-direction: row;
    z-index: 1000;
    .item{
      width: 69.5px;
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img{
        width: 20.5px;
        height: 19px;
      }
      .text{
        color: #313131;
        font-size: 11px;
        line-height: 15px;
        position: relative;
        top: 4px;
      }
    }
    .buyContainer{
      flex: 1;
      background-color: #E98B71;
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .content{
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        .originPrice{
          text-decoration: line-through;
          display: inline-block;
          opacity: 0.6;
        }
      }
    }
  }
</style>
