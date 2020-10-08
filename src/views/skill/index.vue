<template>
  <div class="top">
    <div class="image">
      <img src="/image/back.png" @click="back">
    </div>
    <div class="hander" v-for="(item, index) in courseGuide" :key="index">
      <img :src="item.image" alt="" />
      <div class="item">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "skill",
  mounted() {
    this.getCourseGuide_wkx();
  },
  computed: {
    ...mapState({
      courseGuide: (state) => state.skill.courseGuide,
    }),
  },
  methods: {
    ...mapActions(["getCourseGuide_wkx"]),
    back(){
      this.$router.go(-1)
    }
  },
};
</script>

<style lang="scss" scoped>
.top {
  margin-bottom:140px;
  width: 100%;
  .image{
    width: 100%;
    height: 44px;
    line-height: 44px;
    padding:0 18px;
    img{
      width: 27px;
      height: 27px;
      margin:9.5px 0;
    }
  }
  .hander {
    padding: 15px 0;
    margin: 0 15px;
    border-top-color: #F5F7F9;
    border-top-style: solid;
    border-top-width: 1px;
    overflow: hidden;
    flex-direction: row;
    display: flex;
    img {
      width: 130px;
      height: 80px;
      background: none;
    }
    .item {
      flex: 1;
      margin-left: 15px;
      margin-top: 5px;
      font-size: 16px;
      line-height: 22.5px;
      color: #313131;
      flex-wrap: wrap;
    }
  }
}
</style>