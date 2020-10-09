<template>
<div class="container">
  <div class="wrap" @click="showPopup">
    <ul class="left">
      <li v-for="item in huikan" :key="item.id"><i></i><span>{{item.title}}</span></li>
    </ul>
    <div class="right">
      <img src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8">
    </div>
  </div>
  <van-popup v-model="show" closeable position="bottom" :style="{ height: '70%' }">
    <div class="titleWrap">
      服务
    </div>
    <div class="detailWrap">
      <div class="point"></div>
      <div class="tit">永久无限次回看</div>
      <div class="des">课程视频支持永久回看，不限次数。</div>
    </div>
    <div class="detailWrap">
      <div class="point"></div>
      <div class="tit">购买后即看</div>
      <div class="des">报名后即刻观看视频，随时随地即学即做。</div>
    </div>
    <div class="detailWrap">
      <div class="point"></div>
      <div class="tit">烘焙帮自营课程</div>
      <div class="des">课程/视频/课件均为烘焙帮原创自制，品质保证。</div>
    </div>
    <div class="detailWrap">
      <div class="point"></div>
      <div class="tit">高效的学习体验</div>
      <div class="des">课程精心录制、剪辑，剔除无效内容，让学习更高效。</div>
    </div>
    <div class="detailWrap">
      <div class="point"></div>
      <div class="tit">分步骤学习</div>
      <div class="des">课程视频分步骤学习，成功率更高。</div>
    </div>
    <div class="detailWrap">
      <div class="point"></div>
      <div class="tit">专注打造唯一品类</div>
      <div class="des">每个品类只有一个课程，为你提供更好的配方与做法，持续优化迭代。</div>
    </div>
    <div class="detailWrap">
      <div class="point"></div>
      <div class="tit">图片素材下载</div>
      <div class="des">提供高清图片素材，方便私房及商用宣传。</div>
    </div>
    <div class="detailWrap">
      <div class="point"></div>
      <div class="tit">工具材料参考</div>
      <div class="des">提供工具/材料采购参考链接，让学习更便捷。</div>
    </div>
  </van-popup>
</div>
</template>

<script>
import {
  Popup
} from 'vant';
Vue.use(Popup);
export default {
  name: 'Nyt1',
  data() {
    return {
      show: false,
      huikan: [{
          id: 1,
          title: '永久回看'
        },
        {
          id: 2,
          title: '报名即学'
        },
        {
          id: 3,
          title: '自营课程'
        },
        {
          id: 4,
          title: '高效学习体验'
        },
        {
          id: 5,
          title: '分步骤学'
        },
        {
          id: 6,
          title: '唯一品类'
        },
        {
          id: 7,
          title: '图片下载'
        },
        {
          id: 8,
          title: '工具材料参考'
        }
      ]
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px 20px;
  background: #fff;
  display: flex;
  align-items: center;
  margin: 10px 0;

  .left {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    // background-color: teal;

    align-items: center;

    li {
      color: #676767;
      font-weight: 200;
      font-size: 13px;
      line-height: 25px;
      // background-color: yellowgreen;
      display: flex;
      flex-grow: 1;

      align-items: center;

      span {
        margin: 0 15px 0 5px;
      }

      i {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: pink;
      }
    }
  }

  .right {
    img {
      width: 6.75px;
      height: 11.75px;

    }
  }

}

.titleWrap {
  height: 54px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid;
  border-color: #F5F7F9;
  display: flex;
  font-size: 17px;
  color: #313131;
  font-weight: bold;
}

.detailWrap {
  margin-bottom: 15px;
  padding-left: 23px;
  position: relative;

  .point {
    position: absolute;
    left: 15px;
    top: 8.5px;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    height: 3px;
    width: 3px;
    border-radius: 1.5px;
    background-color: #E98B71;
  }

  .tit {
    font-size: 15px;
    color: #313131;
    line-height: 21px;
  }

  .des {
    margin-top: 5px;
    font-size: 14px;
    color: #999;
    line-height: 20px;
  }
}
</style>
