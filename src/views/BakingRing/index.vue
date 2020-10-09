<template>
<div>
  <div class="header">
    <img class="plus" src="/image/plus.png" alt="" @click="goToDrafts">   
    <div class="navTop">
      <router-link class="link" :to="{name: 'follow'}">关注</router-link>
      <router-link class="link" :to="{name: 'new'}">最新</router-link>
      <router-link class="link" :to="{name: 'talent'}">达人</router-link>
    </div>
    <img class="bell" src="/image/bell.png" alt="" @click="logo">
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name:'BakingRing',
  methods: {
    goToDrafts(){
      this.$router.push({
        name:"backingdrafts"
      })
    },
    logo(){
      this.$router.push({
        name:"personal"
      })
    }

  }
}
</script>
<style lang="scss" scoped>
  .header{
    position: fixed;
    width: 100%;
    height: 44px;
    line-height: 44px;
    padding: 0 18px;
    display: flex;
    top: 0;
    align-items: center;
    background: #fff;
       
    .navTop{
      flex: 1;
      text-align: center;
      display: flex;
      padding: 0 44px;
      .link{
        flex: 1;
        width: 65px;
        height: 44px;
        text-decoration: none;
        color: #999;
        font-size: 16px;
      }
      .active{
        font-weight: bold;
        color: #000;
      }
    }
    .plus,.bell{
      width: 27px;
      height: 27px;
      
    }
  }
</style>