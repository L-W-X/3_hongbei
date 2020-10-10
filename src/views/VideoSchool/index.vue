<template>
<div class='universityContainer'>
    <div class='universityTop'>
        <TabNav class='university' :navlist='navlist' :categoryId='categoryId' :changeid='changeid'></TabNav>
        <div class='imgContainer'>
            <img src="/image/search.png" alt="" @click="$router.push({
                name:'search',
                query:{
                    type:'live'
                }
            })">
        </div>
        
    </div>
    <div v-if="categoryId===1">
        <MSwiper :imagelist='imagelist'></MSwiper>
        <LessonScroll 
	    v-for="(info,index) in uhomelist" 
	    :key="index"
	    :arraylist="info.item"
	    :moreLink="info.moreLink"
	    :title="info.title"
        :categoryId='info.categoryId'
	    ></LessonScroll>
    </div>
    <div v-else>
        <Kindcook :arraylist='itemList'></Kindcook>
    </div>

   
</div>
</template>

<script>
import TabNav from './TabNav'
import MSwiper from './Swiper'
import Kindcook from '@/components/Kindcook'
import LessonScroll from '@/components/LessonScroll'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  name:'university',
  watch:{
     categoryId(value){
         if(value!==1){
             
             this.getUniversityItem_lwx(value)
         }
     }
  },
  mounted(){
      this.getUniversityTop_lwx()
      this.getUHomeList_lwx()
  },
  computed:{
      ...mapState({
          navlist:state=>state.university.navlist,
          categoryId:state=>state.university.categoryId,
          uhomelist:state=>state.university.uhomelist,
          imagelist:state=>state.university.imagelist,
          itemList:state=>state.university.itemList,

          
      })
  },
  methods:{
      ...mapActions(['getUniversityTop_lwx','change_categoryid','getUHomeList_lwx','getUniversityItem_lwx']),
      
      changeid(id){
        this.change_categoryid(id)
      }
  },
  components:{
      TabNav,
      MSwiper,
      LessonScroll,
      Kindcook
  }
}
</script>
<style lang="scss" scoped>
.universityContainer{
    padding-bottom: 50px;
    padding-top: 50px;
    .universityTop{
        position: fixed;
        background-color: #fff;
        left: 0;
        top: 0;
        padding:0 15px;
        width: 100%;
        box-sizing: border-box;
        height: 50px;
        display: flex;
        align-items: center;
        z-index: 999;
        .university{
            flex: 1;
        }
        .imgContainer{
           background-color: #fff;
            padding-left: 10px;
            img{
            width: 19px;
            height: 19px;
            
            
        }
        }
        
    }
}

</style>