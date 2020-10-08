<template>
<div>
  <div class="qa_top"> 
    <div class="QATop">
      <div class="QALeft">提问</div>
      <div class="QASearch"><span>搜索问题</span></div>
      <div class="QABell"><img src="/image/bell.png" alt=""></div>
    </div>
    <div class="navTop">
      <router-link class="link" :to="{name: 'essence'}">精华问答</router-link>
      <router-link class="link" :to="{name: 'New'}">最新问答</router-link>
      <router-link class="link" :to="{name: 'hot'}">最热问答</router-link>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name:'QA'
}
</script>
<style lang="scss" scoped>
  .qa_top{
    width: 100%;
    height: 90px;
    position: fixed;
    background: #fff;
    top: 0;
    .QATop{
      width: 100%;
      height: 44px;
      display: flex;
      align-content: center;
      justify-content: space-around;
      .QALeft{
        height:30px ;
        line-height: 30px;
        font-size: 16px;
        color: #e98b71;
        margin: 7px 0;
      }
      .QASearch{
        width: 239px;
        height: 35px;
        padding: 0 10px;
        background: #f5f7f9;
        text-align: center;
        border-radius: 4px;
        margin-top: 4.5px;
        line-height: 25px;
        span{
          font-size: 14px;
          color: #4a4945;
        }
      }
      .QABell{
        margin: 9.5px 0;
        img{
          width: 27px;
          height: 27px;
        }
      }
    }
    .navTop{
      width: 100%;
      height: 46px;
      .link{
        display: inline-block;
        width: 125px;
        height: 30px;
        margin: 8px 0;
        text-decoration: none;
        color: #999;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
      }
      .active{
        color: #000;
        font-weight: bold;
      }
    }
  }
  
</style>