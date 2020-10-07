<template>
  <div class="lessonModule">
    <!-- 视频播放 -->
    <!-- <div class="videoConter">
      <video controls class="videoItem">
        <source :src="lessonInfo.playURL || lessonInfo.playURL2">
		  </video>
    </div> -->
    <video-player v-if="playerOptions.sources[0].src"  class="video-player vjs-custom-skin"
      ref="videoPlayer" 
      :playsinline="true" 
      :options="playerOptions"
    >
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
    <div class="zhanwei"></div>
    <!-- 学习专区 -->
    <div class="mainContainer">
      <!-- 学员作业 -->
      <div class="studentsHomework" v-if="homeworkList">
        <div class="title">
          <div class="text">学员作业</div>
          <div class="more">查看更多</div>
        </div>
        <div class="showImg">
          <div class="showItem" v-for="item in homeworkList" :key="item.contentId">
            <img :src="item.image[0]" alt="">
          </div>
        </div>
      </div>
      <cLine />
      <!-- 你将学会 -->
      <div class="Learn">
        <div class="title" v-if='lessonInfo.introduces'>{{lessonInfo.introduces[0].title}}</div>
        <div class="content" v-html="lessonInfo.introduces[0].introduce" v-if="lessonInfo.introduces" ref='change1'></div>
      </div>
      <cLine />
      <!-- 课程介绍 -->
      <div class="introduce">
        <div class="title" v-if='lessonInfo.introduces'>{{lessonInfo.introduces[1].title}}</div>
        <div class="content" v-html="lessonInfo.introduces[1].introduce" v-if="lessonInfo.introduces" ref='change2'></div>
      </div>
      <cLine />
      <!-- 如何学习 -->
      <div class="howToLearn">
        <div class="title" v-if='lessonInfo.introduces'>{{lessonInfo.introduces[2].title}}</div>
        <div class="content" v-html="lessonInfo.introduces[2].introduce" v-if="lessonInfo.introduces" ref='change3'></div>
      </div>
      <cLine />
      <!-- 导师介绍 -->
      <div class="teacher">
        <div class="title">导师介绍</div>
        <div class="teacherInfo">
          <img :src="lessonInfo.teacherImage" alt="">
          <div class="teacherName">{{lessonInfo.teacherName}}</div>
        </div>
        <div class='content' v-html="lessonInfo.teacherIntroduce" ref="change4"></div>
      </div>
    </div>
    <!-- 组长组件 -->
    <div class="liwenxing"></div>
    <!-- 烘培帮学堂 -->
    <Introduce />
    <!-- 购买课程 -->
    <BuyCourse :preDiscountPrice="lessonInfo.preDiscountPrice" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import cLine from '../../components/Line'
import Introduce from '../../components/Introduce'
import BuyCourse from '../../components/BuyCourse'
export default {
  name: 'Lesson',
  data () {
    return {
      contentId:10559,
      date:Date.now(),
      pageIndex:0,
      pageSize:4,
      lessonInfo:{},
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src:'' //url地址
        }],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }
    }
  },
  watch: {
    lessonInfo(){
      this.$nextTick(()=>{
        this.$refs.change1.querySelectorAll('p').forEach(item=>{
          item.style.margin = 0
          item.style.lineHeight = 25.5 + 'px'
          item.style.color = '#313131'
          item.style.marginBottom = 16 + 'px'
          item.querySelectorAll('span').forEach(element => {
            element.style.fontSize = 16 + 'px';
          });
        }),
        this.$refs.change2.querySelectorAll('p').forEach(item=>{
          item.style.margin = 0
          item.style.lineHeight = 25.5 + 'px'
          item.style.color = '#313131'
          item.style.marginBottom = 16 + 'px'
          item.querySelectorAll('span').forEach(element => {
            element.style.fontSize = 16 + 'px';
          });
        }),
        this.$refs.change3.querySelectorAll('p').forEach(item=>{
          item.style.margin = 0
          item.style.lineHeight = 25.5 + 'px'
          item.style.color = '#313131'
          item.style.marginBottom = 16 + 'px'
          item.querySelectorAll('span').forEach(element => {
            element.style.fontSize = 16 + 'px';
          });
        }),
        this.$refs.change4.querySelectorAll('p').forEach(item=>{
          item.style.margin = 0
          item.style.lineHeight = 25.5 + 'px'
          item.style.color = '#313131'
          item.style.marginBottom = 16 + 'px'
          item.querySelectorAll('span').forEach(element => {
            element.style.fontSize = 16 + 'px';
          });
        })
        
      })
    }

  },
  components: {
    cLine,
    Introduce,
    BuyCourse
  },
  computed: {
    ...mapState({
      // lessonInfo:state => state.lesson.lessonInfo,
      homeworkList:state => state.lesson.homeworkList
    })
  },
  mounted () {
    this.getLessonInfo(),
    this.getHomeworkList()
  },
  methods: {
    // getLessonInfo(){
    //   const { contentId , date } = this
    //   this.$store.dispatch('getLessonInfo',{contentId,date})
    // },
    async getLessonInfo(){
      const { contentId , date } = this
      const {data} = await this.$API.reqLessonModule(contentId, date)
      this.lessonInfo = data
      this.playerOptions.sources[0].src = data.playURL
      this.playerOptions.poster = data.image
    },
    getHomeworkList(){
      const { contentId , date , pageIndex , pageSize } = this
      this.$store.dispatch('getHomeworkList',{contentId,date,pageIndex,pageSize})
    }
  }
}
</script>

<style lang="scss" scoped>
  .lessonModule{
    background: #F5F7F9;
    width: 100%;
    padding-bottom:50px;
    .lessonTitle{
      background: #fff;
      width: 100%;
      height: 125px;
      padding:12px 20px 15px;
      .title{
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #313131;
      }
      .learning{
        margin-top: 15px;
        display:flex;
        justify-content: space-between;
        .people{
          line-height:0;
          img{
            vertical-align: top;
            width: 27px ;
            height: 27px ;
          }
          .content{
            .buyNum{
              font-size: 13px;
              line-height: 26.5px;
              color: #E98B71;
            }
            .text{
              font-size: 13px;
              line-height: 26.5px;
              color: #313131;
            }
          }
        }
        .trySeeVideo{
          width: 82.5px;
          height: 29px;
          border-radius: 4px;
          border: 1px solid #E98B71;
          display: flex;
          align-items: center;
          img{
            margin-top:2px;
            margin-left: 2px;
            width: 19px;
            height: 19px;
            line-height:29px;
          }
          div{
            line-height:29px;
            font-size: 13px;
            color: #E98B71
          }
        }
      }
    }
    // 占位区
    .zhanwei{
      margin:10px 0;
      width: 100%;
      height: 62.3px;
      background:#fff
    }
    .mainContainer{
      width: 100%;
      background:#fff;
      .studentsHomework{
        padding:15px 17.5px 20px 20px;
        .title{
          display: flex;
          flex-direction: row;
          height: 34px;
          align-items: center;
          margin-top: 10px;
          padding: 0 0 12px 0;
          justify-content: space-between;
          .text{
            font-size: 17px;
            line-height: 24px;
            color: #313131;
            vertical-align: middle;
            font-weight: bold
          }
          .more{
            font-size: 15px;
            color: #999;
            line-height: 15px;
            font-weight: normal
          }
        }
        .showImg{
          width: 100%;
          display: flex;
          justify-content: space-between;
          .showItem{
            width: 82px;
            height: 82px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 4px;
            }
          }
        }
      }
      .Learn{
        width: 100%;
        padding:20px 17.5px 20px 20px;
        .title{
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          color: #313131;
          margin-bottom: 10px;
        }
      }
      .introduce{
        width: 100%;
        padding:20px 17.5px 20px 20px;
        .title{
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          color: #313131;
          margin-bottom: 10px;
        }
      }
      .howToLearn{
        width: 100%;
        padding:20px 17.5px 20px 20px;
        .title{
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          color: #313131;
          margin-bottom: 10px;
        }
      }
      .teacher{
        width: 100%;
        padding:20px 17.5px 20px 20px;
        .title{
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          color: #313131;
          margin-bottom: 10px;
        }
        .teacherInfo{
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 15px 0 11.5px;
          img{
            width: 50px;
            height: 50px;
            background: none
          }
          .teacherName{
            font-size: 17px;
            color: #313131;
            display: inline-block;
            margin-left: 12px;
          }
        }
      }
    }
    .liwenxing{
      width: 100%;
      height: 334px;
      margin: 10px 0;
      background-color:#fff
    }
  }
</style>
