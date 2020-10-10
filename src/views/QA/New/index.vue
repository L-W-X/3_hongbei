<template>
  <!-- <div>
    <div class="QA">
      <div class="qaNewContent" v-for="(item,index) in qaContent" :key="index">
        <div class="qaQuestion">{{item.coverTitle}}</div>
        <div class="qaNewDescribe">
          <img :src="item.recipe.image" alt="">
          <div class="qaNewRelease">
            <div class="qaNewName">{{item.recipe.title}}</div>
            <div class="qaNewId">作者:{{item.recipe.clientName}}</div>
          </div>
        </div>
        <div class="Qabottom">
          <div class="QabottomLeft">暂无回答</div>
          <div class="QabottomRight">
            <img src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40" alt="">
            <span>写答案</span>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  
  
  <Newhot :qaHotContent='qaContent'></Newhot>
</template>

<script>
import Newhot from '@/components/NewHot';
import {mapState,mapActions} from "vuex";
export default {
  name: 'New',
  computed: {
    ...mapState({
      qaContent:state=>state.qaNew.qaContent
    }),
  },
  mounted(){
    this.getQaNew_fc()
  },
  methods: {
    ...mapActions(['getQaNew_fc']),
  },
  components: {
    Newhot
  }
}
</script>

<style lang="scss" scoped>
  
</style>
