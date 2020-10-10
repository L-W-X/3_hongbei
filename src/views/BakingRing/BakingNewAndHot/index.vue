<template>
  <div>
    <div class="hot_new">
      <div class="hot_new_top">
        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="">
        <span>#备战中秋#</span>
      </div>
      <div class="hot_new_nav">
        <router-link class="link" :to="{name:'baking-hot'}">最热</router-link>
        <router-link class="link" :to="{name:'baking-new'}">最新</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BakingNewAndHot',
  
}
</script>

<style lang="scss" scoped>
  .hot_new{
    .hot_new_top{
      width: 100%;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 27px;
        height: 27px;
        position: absolute;
        left: 15px;
      }
      span{
        font-size: 18px;
        color: #4a4945;
        font-weight: bold;
      }
    }
    .hot_new_nav{
      width: 100%;
      height: 46px;
      text-align: center;
      .link{
        display: inline-block;
        text-align: center;
        line-height: 30px;
        width: 90px;
        height: 30px;
        text-decoration: none;
        font-size: 14px;
        color: #999;
        margin: 8px 0;
      }
    }
  }
</style>
