<template>
<div class='seemore'>
    <kindcook :arraylist='seemorelist'></kindcook>
</div>
    
    
</template>

<script>
import Kindcook from '@/components/Kindcook'
import {mapState,mapActions} from 'vuex'
export default {
  name:'seemore',
  mounted(){
     
       this.getSeeMore_lwx(this.$route.query.categoryId*1)
  },
  computed:{
      ...mapState({
          seemorelist:state=>state.home.seemorelist
      })
  },
  methods:{
      ...mapActions(['getSeeMore_lwx'])
  },
  components:{
      Kindcook
  },
  beforeDestroy(){
      this.$store.commit('GET_SEE_MORE_LWX',[])
  }
  
}
</script>
<style lang="scss" scoped>
.seemore{
    padding-top:20px
}
</style>