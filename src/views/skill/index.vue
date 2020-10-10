<template>
  <div class="top">
    <div class="image">
      <img src="/image/back.png" @click="back">
    </div>
    <div class="hander" v-for="(item, index) in courseGuide" :key="index">
      <img :src="item.image" alt="" />
      <div class="item">{{ item.title }}</div>
    </div>
    <App class="adv"></App>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import App from "../../components/app"
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
  components:{
    App,
  }
};
</script>

<style lang="scss" scoped>
.top {
  padding-bottom:140px;
  padding-top:60px;
  width: 100%;
  .image{
    width: 100%;
    height: 44px;
    line-height: 44px;
    padding:0 18px;
    position:fixed;
    top:0;
    left:0;
    background-color:#fff;
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
.adv{
  position:fixed;
  bottom: 0;
  left: 0;
  background-color: #FFF;
}
</style>