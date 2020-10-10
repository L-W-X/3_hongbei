<template>
<div class="lessonModule">
  <!-- 视频播放 -->
  <!-- <div class="videoConter">
      <video controls class="videoItem">
        <source :src="lessonInfo.playURL || lessonInfo.playURL2">

  </video>
    </div> -->
  <video-player v-if="playerOptions.sources[0].src" class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
  </video-player>
  <!-- 视频区内容 -->
  <div class="lessonTitle">
    <div class="title">{{lessonInfo.title}}</div>
    <div class="learning">
      <div class="people">
        <img src="/image/cq_xiaoren.jpg">
        <span class="content">
          <span class="buyNum">{{lessonInfo.buyNum > 1000 ? '1000+' : lessonInfo.buyNum }}</span>
          <span class="text">人在学</span>
        </span>
      </div>
      <div class="trySeeVideo" v-if="lessonInfo.hasTrySeeVideo">
        <img src="/image/cq_play.jpg" alt="">
        <div>试看课程</div>
      </div>
    </div>
  </div>
  <!-- 公共区域占位 -->
  <Nyt1 />
  <!-- 学习专区 -->
  <div class="mainContainer">
    <!-- 学员作业 -->
    <div class="studentsHomework" v-if="homeworkList">
      <div class="title">
        <div class="text">学员作业</div>
        <div class="more" @click="seeMore">查看更多</div>
      </div>
      <div class="showImg" @click="seeMore">
        <div class="showItem" v-for="item in homeworkList" :key="item.contentId">
          <img :src="item.image[0]" alt="">
        </div>
      </div>
    </div>
    <cLine />

    <template v-for="(item,index) in lessonInfo.introduces">
      <div class="Learn">
        <div class="title">{{item.title}}</div>
        <div class="content" v-html="item.introduce"></div>
      </div>
      <cLine />
    </template>

    <!-- 导师介绍 -->
    <div class="teacher">
      <div class="title">导师介绍</div>
      <div class="teacherInfo">
        <img :src="lessonInfo.teacherImage" alt="">
        <div class="teacherName">{{lessonInfo.teacherName}}</div>
      </div>
      <div class='content' v-html="lessonInfo.teacherIntroduce"></div>
    </div>
  </div>
  <!-- 组长组件 -->
  <LessonScroll class="LessonScroll" :arraylist="arraylist" :title="title" :moreLink="moreLink" :clientId="clientId"></LessonScroll>
  <!-- 烘培帮学堂 -->
  <Introduce />
  <!-- 购买课程 -->
  <BuyCourse :preDiscountPrice="lessonInfo.preDiscountPrice" v-if="this.$route.query.isHideBottom !== 1" />
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import cLine from '../../components/Line'
import Introduce from '../../components/Introduce'
import BuyCourse from '../../components/BuyCourse'
import LessonScroll from '../../components/LessonScroll'
import Nyt1 from '../../components/Nyt1'
export default {
  name: 'Lesson',
  data() {
    return {
      date: Date.now(),
      pageIndex: 0,
      pageSize: 4,
      TpageSize:10,
      lessonInfo: {},
      clientId:null,
      title:"导师的其他课程",
      moreLink:"/all",
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: '' //url地址
        }],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    }
  },
  watch: {

  },
  components: {
    cLine,
    Introduce,
    BuyCourse,
    Nyt1,
    LessonScroll
  },
  computed: {
    ...mapState({
      // lessonInfo:state => state.lesson.lessonInfo,
      homeworkList: state => state.lesson.homeworkList,
      arraylist: state => state.lesson.arraylist
    })
  },
  mounted() {
    this.getLessonInfo(),
    this.getHomeworkList(),
    this.getClientOtherCourse()
  },
  methods: {
    //学员作业查看更多
    seeMore(){
      const title = this.lessonInfo.title
      const contentId = this.$route.query.contentId
      this.$router.push({ path: 'university/dishrank', 
      query: { 
        contentId,
        title
        }
      })
    },
    // getLessonInfo(){
    //   const { contentId , date } = this
    //   this.$store.dispatch('getLessonInfo',{contentId,date})
    // },
    async getLessonInfo() {
      const {date} = this
      const {contentId} = this.$route.query
      const { data } = await this.$API.reqLessonModule(contentId, date)
      this.lessonInfo = data
      this.clientId = data.clientId
      this.playerOptions.sources[0].src = data.playURL||data.trySeeUrl
      this.playerOptions.poster = data.image
    },
    getHomeworkList() {
      const {
        contentId
      } = this.$route.query
      const {
        date,
        pageIndex,
        pageSize
      } = this
      this.$store.dispatch('getHomeworkList', {
        contentId,
        date,
        pageIndex,
        pageSize
      })
    },
    getClientOtherCourse() {
      const {
        contentId
      } = this.$route.query
      const {
        date,
        TpageSize,
        pageIndex,
        clientId
      } = this
      this.$store.dispatch('getClientOtherCourse', {pageIndex,pageSize:TpageSize,clientId,educationCourseId:contentId,date})
    }
  }
}
</script>

<style lang="scss">
.lessonModule {
  background: #F5F7F9;
  width: 100%;
  padding-bottom: 50px;

  .lessonTitle {
    background: #fff;
    width: 100%;
    height: 125px;
    padding: 12px 20px 15px;

    .title {
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;
      color: #313131;
    }

    .learning {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;

      .people {
        line-height: 0;

        img {
          vertical-align: top;
          width: 27px;
          height: 27px;
        }

        .content {
          .buyNum {
            font-size: 13px;
            line-height: 26.5px;
            color: #E98B71;
          }

          .text {
            font-size: 13px;
            line-height: 26.5px;
            color: #313131;
          }
        }
      }

      .trySeeVideo {
        width: 82.5px;
        height: 29px;
        border-radius: 4px;
        border: 1px solid #E98B71;
        display: flex;
        align-items: center;

        img {
          margin-top: 2px;
          margin-left: 2px;
          width: 19px;
          height: 19px;
          line-height: 29px;
        }

        div {
          line-height: 29px;
          font-size: 13px;
          color: #E98B71
        }
      }
    }
  }

  .mainContainer {
    width: 100%;
    background: #fff;

    .studentsHomework {
      padding: 15px 17.5px 20px 20px;

      .title {
        display: flex;
        flex-direction: row;
        height: 34px;
        align-items: center;
        margin-top: 10px;
        padding: 0 0 12px 0;
        justify-content: space-between;

        .text {
          font-size: 17px;
          line-height: 24px;
          color: #313131;
          vertical-align: middle;
          font-weight: bold
        }

        .more {
          font-size: 15px;
          color: #999;
          line-height: 15px;
          font-weight: normal
        }
      }

      .showImg {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .showItem {
          width: 82px;
          height: 82px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }
      }
    }

    .Learn {
      width: 100%;
      padding: 20px 17.5px 20px 20px;

      .content {
        // color: yellow;
        p{
          margin : 0 !important;
          line-height:25.5px !important;
          color : #313131 !important;
          margin-bottom : 16px !important;
        }

        span {
          // color: red !important;
          line-height:25.5px !important;
          letter-spacing: 0.2px !important;
          color : #313131 !important;
          font-size: 16px !important;
        }

      }

      .title {
        font-weight: bold;
        font-size: 17px;
        line-height: 24px;
        color: #313131;
        margin-bottom: 10px;
      }
    }

    .introduce {
      width: 100%;
      padding: 20px 17.5px 20px 20px;

      .title {
        font-weight: bold;
        font-size: 17px;
        line-height: 24px;
        color: #313131;
        margin-bottom: 10px;
      }
    }

    .howToLearn {
      width: 100%;
      padding: 20px 17.5px 20px 20px;

      .title {
        font-weight: bold;
        font-size: 17px;
        line-height: 24px;
        color: #313131;
        margin-bottom: 10px;
      }
    }

    .teacher {
      width: 100%;
      padding: 20px 17.5px 20px 20px;
      .content{
         p{
          margin : 0 !important;
          line-height:25.5px !important;
          color : #313131 !important;
          margin-bottom : 16px !important;
        }

        span {
          // color: red !important;
          line-height:25.5px !important;
          letter-spacing: 0.2px !important;
          color : #313131 !important;
          font-size: 16px !important;
        }
      }
      .title {
        font-weight: bold;
        font-size: 17px;
        line-height: 24px;
        color: #313131;
        margin-bottom: 10px;
      }

      .teacherInfo {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0 11.5px;

        img {
          width: 50px;
          height: 50px;
          background: none
        }

        .teacherName {
          font-size: 17px;
          color: #313131;
          display: inline-block;
          margin-left: 12px;
        }
      }
    }
  }

  .LessonScroll{
    background: #fff;
    margin:10px 0;
  }
}
</style>
