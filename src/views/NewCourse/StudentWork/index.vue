<template>
<div class="workWrap">
  <div class="workItem" v-for="item in workList" :key="item.clientId">
    <div class="PicWrap" v-if="item.image" @click="showDetail(item.clientId,item.educationCourseId)">
      <img :src="item.image[0]">
    </div>
    <div class="nameWrap">
      <img :src="item.clientImage">
      <div>{{item.clientName}}</div>
    </div>
    <div class="discWrap">
      {{item.introduce?item.introduce:"新手烘焙专题：从入门到精通"}}
    </div>
    <div class="admireWrap" @click="tellUS">
      <img src="https://image.hongbeibang.com/Fj4ZDoVywR5b3huYgsOzfnPalXRt">
      <span>{{item.likeNum}}</span>
    </div>
    <van-popup v-model="flag" position="top" :style="{ height: '100%' }">
      <div class="detailWrap">
        <div class="namePicWrap">
          <div class="pic">
            <img :src="item.clientImage">
          </div>
          <div class="name">
            <p>{{item.clientName}}</p>
            <p>{{item.createTime}}</p>
          </div>
        </div>

      </div>
    </van-popup>

  </div>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'

import {
  Dialog,
  Popup
} from 'vant'

export default {
  name: 'StudentWork',
  data() {
    return {
      flag: false
    }
  },
  computed: {
    ...mapState({
      workList: state => state.newcourse.workList,
      client: state => state.newcourse.client,
    })

  },
  methods: {
    ...mapActions(["getReqStudent_Detail_nyt"]),
    tellUS() {
      Dialog.alert({
        title: '提示',
        message: '用户未登陆！',
      })
    },
    showDetail(clientId, educationCourseId) {
      this.flag = true
      this.getReqStudent_Detail_nyt(clientId, educationCourseId)
    }
  },
  mounted() {

  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
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

    // 弹出层样式
    .detailWrap {
      font-size: 20px;
      color: rgb(7, 0, 0);
    }
  }

}
</style>
