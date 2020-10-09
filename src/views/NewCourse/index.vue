<template>
<div class="newCourseWrap">
  <div class="headerImage" v-for="(item,index) in newCourse.images" :key="index">
    <img :src="item"></img>
  </div>
  <div class="titleWrap">
    <div class="title">{{newCourse.title}}</div>
    <div class="peopleWrap">
      <img src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54">
      <div class="numWrap">
        <span class="peopleNum">{{newCourse.buyNum>1000?'1000+':newCourse.buyNum}}</span>
        <span class="study">人在学</span>
      </div>
    </div>
  </div>
  <nyt1 @click="showPopup"></nyt1>
  <!--tab栏-->
  <div class="tabWrap">
    <div :class="active==0?'active':''" @click="change(0)">课程介绍</div>
    <div :class="active==1?'active':''" @click="change(1)">课程目录</div>
    <div :class="active==2?'active':''" @click="change(2)">学员作业</div>
  </div>
  <div>
    <CourseInduce v-show="active===0"></CourseInduce>
    <CourseList v-show="active===1"></CourseList>
    <StudentWork v-show="active===2"></StudentWork>
  </div>

</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import nyt1 from "@/components/Nyt1"
import CourseInduce from "./CourseInduce"
import CourseList from "./CourseList"
import StudentWork from "./StudentWork"
import Vue from "vue"
import {
  Popup
} from 'vant';

Vue.use(Popup);
export default {
  name: 'NewCourse',
  data() {
    return {
      show: false,
      active: 0
    }
  },
  computed: {
    ...mapState({
      newCourse: state => state.newcourse.newCourse,
     

    })
  },
  
  mounted() {
    this.getReqNewCourse_nyt()
    this.getReqNewCourseItem_nyt()
    this.getReqNewStudentWork_nyt()
    this.getReqClient_Name_nyt()
  },
  methods: {
    ...mapActions(['getReqNewCourse_nyt', 'getReqNewCourseItem_nyt', 'getReqNewStudentWork_nyt', 'getReqClient_Name_nyt']),
    change(i) {
      this.active = i
    },
    showPopup() {
      this.show = true;
      console.log(111)
    }
  },
  components: {
    nyt1,
    CourseInduce,
    CourseList,
    StudentWork
  }
}
</script>

<style lang="scss" scoped>
.newCourseWrap {
  ul {
    list-style: disc;
  }

  background-color: #F5F7F9;

  .headerImage {
    width: 375px;
    height: 210px;

    img {
      width: 100%;
      height: 100%;

    }
  }

  .titleWrap {
    width: 375px;
    height: 97px;
    padding: 12px 15px 15px 15px;
    background-color: #fff;

    .title {
      font-size: 20px;
      font-weight: bold;
      height: 28px;
      line-height: 28px;
      color: #313131;
    }

    .peopleWrap {
      margin-top: 15px;
      position: relative;
      height: 27px;

      img {
        background: none;
        vertical-align: top;
        width: 27px !important;
        height: 27px !important;
      }

      .numWrap {
        display: inline-block;
        font-size: 13px;

        line-height: 26.5px;
        color: #313131;

        .peopleNum {
          color: #E98B71;
          font-size: 13px;
          line-height: 26.5px;
        }

        .study {
          font-size: 13px;
          line-height: 26.5px;
          color: #313131;
        }
      }

    }
  }

  .tabWrap {
    display: flex;
    justify-content: space-around;
    background-color: #fff;

    div {
      margin-top: 12px;
      font-size: 15px;
      line-height: 21px;
      color: #828282;
    }

    .active {
      font-weight: bold;
      color: #313131;

      &::after {
        content: "";
        display: block;
        background-color: #E98B71;
        width: 20px;
        height: 3px;
        margin-top: 5px;
        margin-left: 17px
      }
    }
  }

}
</style>
