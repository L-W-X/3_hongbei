<template>
  <van-list class="Essence" v-model="loading" :finished="finished" finished-text="没有数据了" @load="onLoad" :immediate-check='false'>
      <van-cell class="essenceContent" v-for="(item,index) in content" :key="index">
        <div class="essenceTop">
          <img :src="item.clientImage" alt="">
          <span>{{item.clientName}}</span>
        </div>
        <div class="es_Problem">{{item.coverTitle}}</div>
        <div class="es_Answer">{{item.coverSummary}}</div>
        <div class="fabulous">{{item.hotNum}}个赞</div>
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
  name: 'Essence',
  computed: {
    ...mapState({
      qaEssenceContent:state=>state.qaEssence.qaEssenceContent
    }),
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
    this.getQaEssence_fc()
  },
  methods: {
    ...mapActions(['getQaEssence_fc']),
    async getQaEssence_fc(){
      console.log(111);
      const res =await this.$API.QaEssence_fc(
        this.num
      )
      this.content = this.content.concat(res.data.content.data)
      this.loading=false
    },
    onLoad(){
      this.loading=true   
      this.num = this.num + 10
      this.getQaEssence_fc()
    }
  }
}
</script>

<style lang="scss" scoped>
  .Essence{
    margin-top:90px;
    padding: 0 15px;
    .essenceContent{
      padding: 10px 0;
      border-bottom: 1px solid #E7E2E5;
      .essenceTop{
        display: flex;
        align-items: center;
        img{
          width: 38px;
          height: 38px;
          border-radius: 50%;
          margin-right: 10px;
        }
        span{
          font-size:13px;
          color: #4a4945;
        }
      }
      .es_Problem{
        margin-top: 5px;
        font-size: 18px;
        color: #4a4945;
        font-weight:bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .es_Answer{
        width: 100%;
        max-height: 60px;
        font-size: 14px;
        color: #4a4945;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .fabulous{
        font-size: 14px;
        color: #999;
        margin-top: 10px;
      }
    }
  }
</style>
