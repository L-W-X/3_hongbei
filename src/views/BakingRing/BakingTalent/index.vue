<template>
  <div class="content">
    <div class="show" v-for="(item,index) in content" :key="index">
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
    </div>
  </div>
  
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
  name: 'BackingTalent',
  computed: {
    ...mapState({
      content:state=>state.backingTalent.content
    })
  },
  mounted(){
    this.getReqMasterNew_fc()
  },
  methods: {
    ...mapActions(['getReqMasterNew_fc'])
  }
}
</script>

<style lang="scss" scoped>
  .content{
    background: #F5F7F9;
    margin-top: 44px;
    .show{
      background: #fff;
      width: 100%;
      // height: 409px;
      
      .showTop{
        width: 345px;
        height: 44px;
        margin: 15px 15px;
        display: flex;
        .headPortrait{
          img{
            width: 38px;
            height: 38px;
            border-radius:50%;
            margin:10px 10px 0 0;
          }
        }
        .showContent{
          display: flex;
          flex-flow: column;
          .showName{
            display: flex;
            height: 40px;
            line-height: 40px;
            font-size: 13px;
            color: #4a4945;
            margin-top: 3px;
            img{
              width: 40px;
              height: 40px;
              margin-right: 5px;
            }
          }
          .showTime{
            height: 10px;
            line-height: 1px;
            font-size: 12px;
            color: #999;
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
