<template>

    <div class='searchlive'>
        <div class="top">
			<img src="/image/back.png" alt="" @click="$router.go(-1)" class="back"/>
			<div class="inputbox">
                <img src="/image/search.png" alt="">
                <input type="text" placeholder='搜索课程' v-model.trim="mysearchkey" @input='search' @keydown="search2">
                <span v-if="!(mysearchkey==='')" @click="clear">x</span>
            </div>
		</div>
       <Kindcook :arraylist='searchlive' v-if='show'></Kindcook>
        <van-loading size="24px" v-if="!show&&searchcount">加载中...</van-loading> 
       <div class='nosearch' v-if="!searchcount">
           <img src="https://image.hongbeibang.com/FsMQ8zX03K3u2cNUmIT5UZKdsMxb?400X400&imageView2/1/w/350/h/350" alt="">
           <div>要不试一下别的关键词？</div>
       </div>
       <div :class="searchcount?'active':''" id='recommdlist'>
           <img src="https://image.hongbeibang.com/Group3%20%281%29.png?imageMogr2/strip/thumbnail/640x640" alt="">
       </div>
        <Kindcook :arraylist='searchrecommend'></Kindcook>
    </div>

</template>

<script>
import Kindcook from '@/components/Kindcook'
import {mapState,mapActions} from "vuex"
import debounce from 'lodash/debounce'
import Vue from 'vue';
import { Loading } from 'vant';
Vue.use(Loading);
export default {
  name:'searchlive',
  data(){
      return{
          mysearchkey:this.$route.params.keyword,
          show:true,
      }
  },
  mounted() {
     this.getSearchrecommend_lwx()
     this.getSearchword_lwx({keyword:this.$route.params.keyword})
     
     
  },
  computed:{
      ...mapState({
          searchrecommend:state=>state.searchlive.searchrecommend,
          searchlive:state=>state.searchlive.searchlive,
          searchcount:state=>state.searchlive.searchcount
      })
  },
  methods: {
      ...mapActions(['getSearchrecommend_lwx','getSearchword_lwx','changeclear_lwx']),
      search:debounce( async function(){
          this.show= false
          if(this.mysearchkey===''){
            this.changeclear_lwx()
              return
          }
          await this.getSearchword_lwx({keyword:this.mysearchkey})
           this.show= true
        console.log(1111)
      },1000),
      search2(event){
          if(event.keyCode===13){
               if(this.mysearchkey===''){
            this.changeclear_lwx()
              return
          }
              this.$router.push({
                  name:'searchlive',
                params:{
                    keyword:this.mysearchkey
                },
                query:{
                    type:'live'
                }
              })
          }
         
      },
      clear(){
          this.mysearchkey=''
           this.changeclear_lwx()
      }
  },
  components: {
      Kindcook
  }
}
</script>
<style lang="scss" scoped>
.searchlive{
    .top{
        display: flex;
        padding: 0 20px;
        align-items: center;
        height: 42px;
        margin-bottom: 15px;
        .back{
            width: 27px;
            height: 27px;
        }
        .inputbox{
            padding:7px;
            flex: 1;
            background-color:#F0F0EF;
            border-radius: 5px;
            display: flex;
            align-items: center;
            img{
                width: 19px;
                height: 19px;
            }
            input{
                flex: 1;
                border:none;
                padding:0 10px;
                font-size:16px;
                background-color:#F0F0EF;
                outline:none;
            }
            span{
                width: 14px;
                height: 14px;
                font-size:12px;
                border-radius:50%;
                color: #fff;
                background-color:#999;
                text-align: center;
                line-height:14px

            }
        }

    }
    .nosearch{
        margin:0 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        img{
            width: 175px;
            height: 175px;
        }
        div{
            font-size:14px;
            margin-top:10px;
            color:#999;
        }
    }
    #recommdlist{
        margin:10px 0;
        padding:22px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active{
            background-color:#F5F7F9;
        }
        img{
            width: 183px;
    }
        }
        
}

</style>