<template>
<div class="NEW">
  <!-- 头部滑块 -->
  <div class="headerNav_fc">
    <div class="headerNavList_fc">
			<div class="imgbox" v-for="(item,index) in category" :key="index">
				<img :src="item.image" alt="">
			</div>
    </div>
  </div>
<!-- 标签滑块 -->
  <div class="labelList_fc">
    <div class="labelContent_fc">
      <div class="labelItem_fc" v-for="item in Data" :key="item.communityId" @click="hotAndNew">
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
  
 <!-- 作品展示 -->

  <van-list v-model="loading" :finished="finished" finished-text="没有数据了" @load="onLoad" :immediate-check='false'>
      <van-cell class="show" v-for="(item,index) in content" :key="index">
        <div class="showTop">
          <div class="headPortrait">
            <img :src="item.clientImage" alt="">
          </div>
          <div class="showContent">
            <div class="showName">{{item.clientName}}</div>
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
          <div class="showBottonRight" >
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
</div>

</template>

<script>
// import ajax from '@/axios/ajax'
// import axios from "axios";
import {mapState,mapActions} from "vuex";

import Vue from 'vue';
import {List , Cell} from "vant";
Vue.use(List);
Vue.use(Cell);

export default {
  name: 'BackingNew',
  data () {
    return {
      content:[],
      loading:false,
      finished:false,
      num :0
    }
  },
  
  computed: {
    ...mapState({
      category:state=>state.backingNew.category
    }),
    ...mapState({
      Data:state=>state.backingNew.Data
    }),
  },
  mounted(){
    this.getReqCategory_fc(),
    this.getReqByLimit_fc()
    this.getReqNew_fc()
  },
  methods: {
    ...mapActions(['getReqCategory_fc']),
    ...mapActions(['getReqByLimit_fc']),
    async getReqNew_fc(){
      const res = await this.$API.reqNew_fc(
         this.num
      )
      this.content = this.content.concat(res.data.content)
      this.loading=false

    },
    onLoad(){
      this.loading=true   
      this.num = this.num + 10
      this.getReqNew_fc()
    },

    hotAndNew(){
      this.$router.push({
        name:"bakingnewandhot"
      })
    },
    
  }
  

}
</script>

<style lang="scss" scoped>
  .NEW{
    margin-top: 44px;
    background: #F5F7F9;
    .headerNav_fc{
      background: #fff;
      width: 100%;
      height: 101px;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      padding: 5px 0 10px;
      border-bottom: 1px solid #E7E2E5;
      
      .headerNavList_fc{
        background: #fff;
        margin-left: 15px;
        width: 620px;
        height: 85px;
        display: flex;
          .imgbox{
            margin-right: 8px;
            img{
              width: 150px;
              height: 85px;
            }
          }
      }
    }
    .labelList_fc{
      box-sizing: border-box;
      background: #fff;
      width: 100%;
      // height: 55px;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      padding: 10px 0;
      .labelContent_fc{
        margin-left: 15px;
        width: 1000px;
        .labelItem_fc{
          height: 35px;
          font-size: 15px;
          line-height: 21px;
          text-align: center;
          // position: relative;
          margin-right: 8px;
          border-radius: 4px;
          padding: 7px 10px;
          display: inline-block;
          // vertical-align: middle;
          overflow: hidden;
          box-sizing: border-box;
          &:nth-child(1){
            background:#94BFBB;
          }
          &:nth-child(2){
            background:#927472;
          }
          &:nth-child(3){
            background:#E5AA9C;
          }
          &:nth-child(4){
            background:#5BADA6;
          }
          &:nth-child(5){
            background:#b78b9f;
          }
          &:nth-child(6){
            background:#acbcc9;
          }
          &:nth-child(7){
            background:#8f7671;
          }
          &:nth-child(8){
            background:#acb99b;
          }
          &:nth-child(9){
            background:#aca6bb;
          }
          &:nth-child(10){
            background:#c3d0ad;
          }
        }
      }
    }
    .show{
      background: #fff;
      width: 100%;
      // height: 409px;
      margin-top: 10px;
      .showTop{
        width: 345px;
        height: 44px;
        margin: 10px 15px;
        display: flex;
        .headPortrait{
          img{
            width: 38px;
            height: 38px;
            border-radius:50%;
            margin:5px 10px 0 0;
            
          }
        }
        .showContent{
          display: flex;
          flex-flow: column;
          .showName{
            height: 20px;
            line-height: 20px;
            font-size: 13px;
            color: #4a4945;
            margin-top: 3px;
          }
          .showTime{
            height: 16px;
            line-height: 16px;
            font-size: 12px;
            color: #999;
            margin-top: 5px;
          }
        }
      }
      .showImg{
       margin-bottom: 11px;
        .describe{
          margin: 10px 15px 11px;
          span{
            font-size: 14px;
            color:#4a4945;
          }
          .describe1{
            color:#498dd0 ;
          }
        }
        img{
          max-width: 355px;
          max-height: 110px;
          margin-left: 15px;
        }
      }
      .showBotton{
        background: #F5F7F9;
        width: 345px;
        height: 70px;
        display:flex;
        margin-left: 15px;
        margin-bottom: 15px;
        .showBottonImg{
          img{
            width: 70px;
            height: 70px;
            border-radius: 5px;
          }
        }
        .showBottonRight{
          display:flex;
          flex-flow: column;
          margin-left: 15px;
          .showBottonName{
            font-size: 14px;
            color: #313131;
            font-weight: bold;
            margin-top: 15px;
         }
          .showBottonAuthor{
            font-size: 13px;
            color: #999;
            margin-top: 5px;
          }
        } 
      }
      .evaluate{
        width: 100%;
        height:30px;
        border-top: 1px solid #e7e2e5;
        .evaluateItem{
          margin: 0 15px;
          display: flex;
          div{
            display: flex;
            width: 123px;
            height: 20px;
            margin: 4px 0 0;
            font-size: 12px;
            color: #999;
            justify-content: center;
            &:nth-child(2){
              border-left: 1px solid #e7e2e5;
              border-right: 1px solid #e7e2e5;
            }
            span{
              height: 20px;
              line-height: 20px;
            }
            img{
              width: 19px;
              height: 19px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
  
</style>