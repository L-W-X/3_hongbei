<template>
<div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(info,index) in imagelist" :key="index" @click='look(info)'>
            <img :src="info.image" alt="">
        </div>
       
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" ref="pagination"></div>
</div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css';

export default {
  name:'mswiper',
  props:['imagelist'],
  watch:{
      imagelist(){
          this.myswiper.destroy()
         this.$nextTick(()=>{
              this.myswiper=new Swiper(this.$refs.swiper,{
           
               pagination:{
                   el:this.$refs.pagination,
                   bulletClass:'point',
                    bulletActiveClass: 'active',
               }
          })
         })
          
      }
  },
  methods: {
      look(item){
         
          this.$router.push(item.link)
      }
  },
  mounted() {
      this.$nextTick(()=>{
          this.myswiper=new Swiper(this.$refs.swiper,{
           
               pagination:{
                   el:this.$refs.pagination,
                   bulletClass:'point',
                   bulletActiveClass: 'active',
               }
          })
      })
  }

}
</script>
<style lang="scss" scoped>
   
    .swiper-container{
        width: 100%;
        height: 190px;
         .swiper-pagination /deep/ .active{
             background: #fff ;
              opacity: 1 !important;
        }
        .swiper-pagination /deep/ .point{
            display: inline-block;
            width: 5px;
            height: 5px;
            background-color: #fff;
            opacity: 0.4;
            border-radius: 50%;
            margin-left: 8px;

        }
        
       
    }
</style>