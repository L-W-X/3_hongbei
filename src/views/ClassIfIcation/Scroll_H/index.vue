<template>
  <div ref="scroll" class="scroll1">
    <div class="container">
      <div v-for="(item, index) in classify" :key="index" @click="change(item.classifyId)" :class='classifyId===item.classifyId?"active":""'>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll_h",
  props: ["classify",'classifyId','changeid'],
  methods:{
    change(id){
     
      this.changeid(id)
    }
  },
  watch: {
    classify() {
        console.log("classify")
        this.$nextTick(()=>{
             this.scroll.refresh();
        })
     
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroll, {
        startY: 0,
        scrollY: true,
        scrollX: false,
        click: true,
        // eventPassthrough:'horizontal'
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.scroll1 {
  background-color: #f5f7f9;
  height: 100%;
  overflow: hidden;
  .container {
    display: inline-block;
    height: 700px;
    
    div {
      width: 85px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 14px;
      box-sizing: border-box;
      color: #4a4945;
      &.active {
        background-color: #ffffff;
        border-left: 3px solid #e98b71;
      }
    }
  }
}
</style>