<template>
  <van-list class="content" v-model="loading" finished="finished" finished-text="没有数据了" @load="onLoad" :immediate-check='false'>
    <van-cell class="show" v-for="(item,index) in content" :key="index">
      <div class="showTop">
        <div class="headPortrait">
          <img :src="item.clientImage" alt="">
        </div>
        <div class="showContent">
          <div class="showName"><img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80">{{item.clientName}}</div>
          <span class="showTime">{{item.createTime}} {{item.coverTitle}}</span>
        </div>
      </div>
      <div class="showImg">
        <div class="describe">
          <span class="describe1">{{item.communityName}}</span>
          <span>{{item.introduce}}</span>
        </div>
        <img :src="item.image" alt="">
      </div>
      <div class="showBotton" v-if="item.recipe.clientId !== 0">
        <div class="showBottonImg">
          <img :src="item.recipe.image" alt="">
        </div>
        <div class="showBottonRight">
          <div class="showBottonName">{{item.recipe.title}}</div>
          <div class="showBottonAuthor">作者：{{item.recipe.clientName}}</div>
        </div>
      </div>
      <div class="evaluate">
        <div class="evaluateItem">
          <div><img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt=""><span>点赞</span></div>
          <div><img src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt=""><span>打赏</span></div>
          <div><img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt=""><span>评论</span></div>
        </div>
      </div>
    </van-cell>
  </van-list>
</template>

<script>
import {mapState,mapActions} from "vuex";


import Vue from 'vue';
import {List , Cell} from "vant";
Vue.use(List);
Vue.use(Cell);



export default {
  name: 'BackingTalent',
  computed: {
    ...mapState({
      content:state=>state.backingTalent.content
    })
  },
  data () {
    return {
      content:[],
      loading:false,
      finished:false,
      num:0
    }
  },
  mounted(){
    
    this.getReqMasterNew_fc()
  },
  methods: {
    ...mapActions(['getReqMasterNew_fc']),
    async getReqMasterNew_fc(){
      const res =await this.$API.reqMasterNew_fc(
        this.num
      )
      this.content = this.content.concat(res.data.content)
      this.loading=false
    },
    onLoad(){
      this.$refs.son.loading=true   
      this.num = this.num + 10
      this.getReqMasterNew_fc()
    },
  },
  components: {
    // NewTalent
  }
}
</script>

<style lang="scss" scoped>
  
</style>
