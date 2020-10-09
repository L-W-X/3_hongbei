<template>
  <div ref="scroll" class="scroll2">
    <div class="rightItem">
      <div v-for="(item, index) in classifys" :key="index">
        <div class="itemTop">
          <span class="item">{{ item.name }}</span>
        </div>
        <div class="main">
          <div
            class="itemBottom"
            v-for="(info, index) in item.classifys ? item.classifys : item.list"
            :key="index"
          >
            <img :src="info.image" alt="" />
            <span class="item1">{{ info.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll-R",
  props: ["classifys"],
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
  watch: {
    classifys() {
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.scroll2 {
  background-color: #f5f7f9;
  height: 100%;
  overflow: hidden;
  .rightItem {
    min-height: 800px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;

    .itemTop {
      width: 290px;
      height: 41px;
      padding: 10px 0 10px 16px;
      line-height: 22px;
      font-size: 12px;
      color: #313131;
    }
    .main {
      display: flex;
      flex-wrap: wrap;
      .itemBottom {
        width: 33.33%;
        box-sizing: border-box;
        display: flex;
        padding: 0 0 10px;
        text-align: center;
        flex-direction: column;
        img {
          width: 80px;
          height: 80px;
        }
        .item1 {
          font-size: 12px;
          color: #313131;
          margin: 5px 0 0;
        }
      }
    }
  }
}
</style>