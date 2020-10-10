<template>
<div class="wrap">
  <div class="headerWrap">
    <div class="img">
      <img src="https://image.hongbeibang.com/Fm8ItfvW_G-VoT7XyqdeiIFFqEwL?1280X719" alt="">
    </div>
    <div class="teacher">
      <a href="https://www.hongbeibang.com/lesson?contentId=10533">新手烘焙专题: 从入门到精通</a>
      <div>讲师:陈权</div>
    </div>
  </div>
  <div class="priceWrap">
    <div class="price">
      <p>小计:</p>
      <p>￥ 29</p>
    </div>
    <div class="div"></div>
    <div class="total">
      <p class="heji">合计:</p>
      <p class="money">￥ 29</p>
    </div>
    <div class="learn"><img src="https://image.hongbeibang.com/FtxphXt4PqYG1Ev17CPrMfbmtM3V?imageMogr2/strip/thumbnail/640x640" alt="">学堂服务</div>
  </div>
  <nyt1></nyt1>
  <div class="pey" @click="logo">微信支付</div>
</div>
</template>

<script>
import nyt1 from '@/components/Nyt1'
export default {
  name: "buy",
  data() {
    return {};
  },
  methods: {
    logo() {
      this.$router.push("personal")
    }
  },
  components: {
    nyt1
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background: #F5F7F9;

  .headerWrap {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #fff;

    .img {
      width: 120px !important;
      height: 80px !important;
      float: left;
      margin-right: 15px;
      background-position: center center;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .teacher {
      a {
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        color: #4A4945;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: underline;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      div {
        font-size: 11px;
        line-height: 15px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 10px 0 0 0;
      }
    }
  }

  .priceWrap {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .price {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      color: #050404;
      line-height: 20px;
      background-color: #fff;

    }

    .div {
      margin: 0 20px;
      height: 1px;
      background-color: #F5F7F9;
    }

    .total {
      background-color: #fff;
      display: flex;
      padding: 15px;
      justify-content: flex-end;

      .heji {
        text-align: right;
        display: inline-flex;
        flex: 1;
        justify-content: flex-end;
        margin-top: 10px;
        font-weight: bold;
        color: #313131;
        font-size: 18px;
        line-height: 30px;
      }

      .money {
        margin-left: 10px;
        color: #EA937B;
        text-align: right;
        justify-content: flex-end;
        margin-top: 10px;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
      }
    }

    .learn {
      background-color: #fff;
      color: #4A4945;
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
      padding: 10px 0;
      margin-left: 5px;
      display: inline-block;
      vertical-align: middle;

      img {
        width: 15px;
        height: 15px;
        display: inline-block;
        vertical-align: middle;
        font-size: 0;
        margin-right: 5px;
      }
    }
  }

  .pey {
    cursor: pointer;
    display: flex;
    background-color: #44A92F;
    justify-content: center;
    align-items: center;
    height: 49px;
    font-size: 17px;
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
