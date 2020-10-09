<template>
  <div class="Container">
    <div class="item" v-for="(item,index) in goodOrNew" :key="index">
      <img class="showImg" v-lazy="item.image[0]">
      <div class="student">
        <img :src="item.clientImage">
        <div class="name">{{item.clientName}}</div>
      </div>
      <div class="evaluate">{{item.introduce || $route.query.title}}</div>
      <div class="like" @click="prompt">
        <img src="/image/cq_dianzan.jpg" alt="">
        <div class="text">{{item.likeNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import { Dialog } from 'vant'
export default {
  name: 'GoodOrNew',
  data () {
    return {
      // pageIndex:0,
      // pageSize:10,
      // date:Date.now()
    }
  },
  props:{
    goodOrNew:Array
  },
  computed: {
    // ...mapState({
    //   newList:state=>state.homeWork.newList
    // })
  },
  mounted () {
    // this.getNewList()
  },
  methods: {
    prompt() {
      Dialog.alert({
        title: '提示',
        message: '用户未登陆！',
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.Container{
  padding: 44px 10px 0;
  overflow: hidden;
  box-sizing: border-box;
  .item{
    width: calc(50% - 10px);
    vertical-align: top;
    overflow: hidden;
    margin: 5px;
    box-sizing: border-box;
    font-size: 0;
    border: 1px solid #F5F7F9;
    display: inline-flex;
    flex-direction: column;
    .showImg{
      width: 100%;
      height: 166px;
    }
    .student{
      display:flex;
      margin: 8px 8px 5px 8px;
      img{
        width: 20px;
        height: 20px;
        border-radius: 30px;
        margin-left: 5px;
        margin-right: 5px;
      }
      .name{
        font-size: 11px;
        color: #B5B5B5;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .evaluate{
      font-size: 13px;
      color: #313131;
      line-height: 18.5px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: normal;
      padding: 0 8px 8px 8px;
      height: 35px;
    }
    .like{
      flex: 1;
      align-items: center;
      display: flex;
      justify-content: center;
      margin-top: 7.5px;
      margin-bottom: 15px;
      img{
        width: 19px !important;
        height: 19px !important;
        font-size: 0;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
      }
      .text{
        font-size: 11px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        vertical-align: middle;
        color: #E98B71;
      }
    }
  }
}
</style>
