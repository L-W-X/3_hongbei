<template>
<div class="CourseListWrap">
  <div class="CourseItem" v-for="item in courseItem" :key="item.educationCourseId">

    <img :src="item.image" alt="">

    <div class="rightWrap">
      <p class="title">{{item.title}}</p>
      <p class="freeLook">{{item.title?"免费试看":""}}</p>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  name: 'CourseList',
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      courseItem: state => state.newcourse.courseItem,
    })
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.CourseListWrap {
  background-color: rgb(255, 255, 255);

  .CourseItem {
    display: flex;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    flex-direction: row;

    &:first-child {
      padding-top: 20px;
    }

    img {
      width: 130px;
      height: 73px;
      border-radius: 2px;
      background: none;

    }

    .rightWrap {
      display: flex;
      margin-left: 15px;
      flex: 1;
      flex-direction: column;

      .title {
        color: #313131;
        font-size: 15px;
        line-height: 21px;
        flex: 1;
      }

      .freeLook {
        color: #E98B71;
        font-size: 13px;
        line-height: 18.5px;
      }
    }
  }
}
</style>
