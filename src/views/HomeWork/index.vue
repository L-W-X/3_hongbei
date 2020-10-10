<template>
  <div class="homeWorkModule">
    <div class="header">
      <span class='back' @click="back">
        <img src="/image/back.png" alt="">
      </span>
      <div class="tabBar">
        <div class="top" :class="{active:active}" @click="active = !active">
          <span>学霸榜</span>
          <div class="line" v-if="active"></div>
        </div>
        <div class="new" :class="{active:!active}" @click="active = !active">
          <span>最新</span>
          <div class="line" v-if="!active"></div>
        </div>
      </div>
    </div>
    <!-- <goodOrNew :active="active"></goodOrNew> -->
    <goodOrNew :goodOrNew="goodList" v-if="active"></goodOrNew>
    <goodOrNew :goodOrNew="newList" v-else></goodOrNew>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import goodOrNew from "./components/GoodOrNew"
export default {
  name: 'HomeWork',
  data () {
    return {
      active:true,
      pageIndex:0,
      pageSize:10,
      date:Date.now()
    }
  },
  components: {
    goodOrNew
  },
  computed: {
    ...mapState({
      newList:state=>state.homeWork.newList,
      goodList:state=>state.homeWork.goodList
    })
  },
  mounted () {
    this.getNewList(),
    // this.getGoodList(),
    this.$bus.$on('changeIndex',this.changeIndex)
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    async getNewList() {
      const educationCourseId = this.$route.query.contentId;
      const { date, pageIndex, pageSize } = this;
      await this.$store.dispatch("getNewList", {educationCourseId,date,pageIndex,pageSize});
      this.$bus.$emit("changeLoading")
    },
    async getGoodList() {
      // console.log(222222222)
       this.$bus.$emit("changeLoading",true);
      const educationCourseId = this.$route.query.contentId;
      const { date, pageIndex, pageSize } = this;
      await this.$store.dispatch("getGoodList", {educationCourseId,date,pageIndex,pageSize});
      this.$bus.$emit("changeLoading",false)
    },
    changeIndex(index){
      // console.log(33333)
      this.pageIndex = index
      const {active} = this
      if (active) {
        this.getGoodList()
      }else{
        this.getNewList()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.homeWorkModule{
  width: 100%;
  .header{
    background: #fff;
    width:100%;
    height: 44px;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 18px;
    margin: 0 auto;
    max-width: 600px;
    box-sizing: border-box;
    display:flex;
    z-index: 9;
    .back{
      font-size: 0;
      height: 44px;
      display: inline-block;
      text-align: center;
      img{
        width: 27px;
        height: 27px;
        margin: 9.5px 0;
      }
    }
    .tabBar{
      width: 100%;
      text-align:center;
      line-height:44px;
      padding-right: 25px;
      font-size: 16px;
      color: #999999;
      .top{
        width: 65px;
        height: 44px;
        line-height:44px;
        text-align:center;
        display: inline-block;
        &.active{
          color: #4A4945;
          font-weight: bold;
        }
      }
      .new{
        width: 65px;
        height: 44px;
        line-height:44px;
        text-align:center;
        display: inline-block;
        &.active{
          color: #4A4945;
          font-weight: bold;
        }
      }
      .line{
        width: 20px;
        height: 2px;
        margin: -5px auto 0 auto;
        border-radius: 20px;
        background-color: #E98B71;
      }
    }
  }
}
</style>
