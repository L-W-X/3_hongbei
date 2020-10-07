<template>
<div>
  <div class="CourseWrap">
    <div style="background-color: #fff;
    padding-top: 15px;"></div>
    <a href="#"></a>
    <div class="specWrap">
      <div class="title" v-if="newCourse.introduces" v-html="newCourse.introduces[0].title">
        {{newCourse.introduces[0].title}}
      </div>
      <div class="con" v-if="newCourse.introduces" v-html="newCourse.introduces[0].introduce">
        {{newCourse.introduces[0].introduce}}
      </div>
    </div>
    <div class="container">
      <div class="tit" v-if="newCourse.introduces" v-html="newCourse.introduces[1].title">
        {{newCourse.introduces[1].title}}
      </div>
      <div ref='changep' v-if="newCourse.introduces" v-html="newCourse.introduces[1].introduce">
        {{newCourse.introduces[1].introduce}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState,
} from 'vuex'
export default {
  name: 'CourseInduce',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      newCourse: state => state.newcourse.newCourse,
    })
  },
  watch: {
    newCourse(value) {
      this.$nextTick(() => {
        this.$refs.changep.querySelectorAll("ul").forEach(item => {
          item.style.paddingLeft = '16px'
        })
        this.$refs.changep.querySelectorAll("strong").forEach(item => {
          item.style.lineHeight = '25.5px'
        })
        this.$refs.changep.querySelectorAll('li').forEach(item => {
          item.style.listStyle = 'disc'
          item.style.lineHeight = '25.5px'
          item.style.marginBottom = "16px"

        })

      })
    }
  },

}
</script>

<style lang="scss" scoped>
.CourseWrap {
  padding: 12px 20px 15px 20px;
  background-color: #fff;

  .specWrap {
    padding-right: 17.5px;
    list-style-type: normal;

    .title {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      color: #313131;
      margin-bottom: 10px;
    }

    .con {
      color: #313131;
      background-color: #fff;
      text-indent: 0;
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 25.5px;
      letter-spacing: 0.5px;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .container {
    .tit {
      font-weight: bold;
      font-size: 17px;
      line-height: 24px;
      color: #313131;
      margin-bottom: 10px;
    }
  }
}
</style>
