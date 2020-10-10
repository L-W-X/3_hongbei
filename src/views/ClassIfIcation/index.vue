<template>
   <div class="container">
       <div class="hander">
           <img src="/image/back.png" @click="back">
           <input type="text" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" @click="this.$router.push('/search')">
       </div>
       <div class="scroll">
           <div class='left'>
               <ScrollH  :classify='classify' :classifyId='classifyId' :changeid='changeid'></ScrollH>
           </div> 
            <div class='right'>
                  <ScrollR :classifys="rightdata" ></ScrollR>
            </div>
       </div>
      

   </div>
</template>

<script>
import ScrollH from "./Scroll_H"
import ScrollR from "./Scroll_R"
import {mapState,mapActions} from "vuex"
export default {
  name:"classify",
  data(){
      return{
          rightdata:[]
      }
  },
  mounted(){
      this.getClassify_wkx()
      this.getClassifys_wkx()
      
    

     
  },
  computed:{
      ...mapState({
          classify:state=>state.classification.classify,
          list:state=>state.classification.list,
          classifyId:state=>state.classification.classifyId,
          classifys:state=>state.classification.classifys,
        //   r,
      })
  },
  watch:{
      classifyId(value){
         if(value===1){
              this.rightdata=this.classifys
         }else{
             this.list.forEach(item=>{
                 if(item.classifyId===value){
                     this.rightdata=item.list
                 }
             })
         }
      },
      classifys(value){
          this.rightdata=value
      }
  },
  methods:{
      ...mapActions(['getClassify_wkx','getchangeid_wkx',"getClassifys_wkx"]),
      changeid(id){
          this.getchangeid_wkx(id)
      },
      back(){
          this.$router.go(-1)
      }

  },  
  components:{
      ScrollH,
      ScrollR
  }
}
</script>

<style lang="scss" scoped>
.container{
     touch-action: none;
    width: 100%;
    // height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
   .hander{
       display: flex;
       width: 100%;
       height:44px;
       padding:0 18px;
       background-color: #fff;
       img {
           width:27px;
           height: 27px;
           line-height: 27px;
           margin:9.5px 0;
       }
       input {
         background-color: #F5F7F9;
         margin: 4.5px 50px 4.5px 23px;
         width :239.2px;
         height:35px;
         padding: 0 10px;
         flex: 1;
         border-radius:4px;
         border:none;
         overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
       }
   }
   .scroll{
       flex: 1;
       overflow: hidden; 
    //    position: relative;
       display: flex;
       .left{
        
           width: 85px;
           height: 100%;
           overflow: hidden;
        //    background-color:pink;
       }
       .right{
           flex: 1;
           height: 100%;
           overflow: hidden;
       }
   }
}

</style>