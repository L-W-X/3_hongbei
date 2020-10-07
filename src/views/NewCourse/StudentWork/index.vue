<template>
<div class="workWrap">
  <div class="workItem" v-for="item in workList" :key="item.clientId">
    <div class="PicWrap" v-if="item.image">
      <img :src="item.image[0]" alt="">
    </div>
    <div class="nameWrap">
      <img :src="item.clientImage">
      <div>{{item.clientName}}</div>
    </div>
    <div class="discWrap">
      {{item.introduce?item.introduce:"新手烘焙专题：从入门到精通"}}
    </div>
    <div class="admireWrap">
      <img src="https://image.hongbeibang.com/Fj4ZDoVywR5b3huYgsOzfnPalXRt">
      <span>{{item.likeNum}}</span>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  name: 'StudentWork',
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      workList: state => state.newcourse.workList,
    })

  },
  mounted() {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.workWrap {
  padding: 0 10px;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 20px;

  .workItem {
    width: calc(50% - 10px);
    vertical-align: top;
    overflow: hidden;
    margin: 5px;
    box-sizing: border-box;
    font-size: 0;
    border: 1px solid #F5F7F9;
    display: inline-flex;
    flex-direction: column;
    border-radius: 4px;

    .PicWrap {
      background: none;
      width: 166px;
      height: 166px;
      overflow: hidden;
      font-size: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .nameWrap {
      flex: 1;
      display: inline-flex;
      margin: 8px 8px 5px 8px;

      img {
        background: none;
        width: 20px;
        height: 20px;
        border-radius: 30px;
        margin-right: 5px;
      }

      div {
        font-size: 11px;
        color: #686868;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .discWrap {
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
      padding: 0 8px 35px 8px;
      height: 28.125px;
    }

    .admireWrap {
      flex: 1;
      align-items: center;
      display: flex;
      justify-content: center;
      margin-top: 13.5px;
      margin-bottom: 15px;

      img {
        background: none;
        width: 19px !important;
        height: 19px !important;
        font-size: 0;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
      }

      span {
        font-size: 11px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        vertical-align: middle;
        color: #686868;
      }
    }
  }

}
</style>
