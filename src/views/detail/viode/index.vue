<template>
  <div class="concenter">
    <div v-for="(item, index) in course" :key="index" class="main">
      <div class="two">
        <img :src="item.image" />
        <div class="color">视频</div>
      </div>

      <div class="top">
        <span class="one">{{ item.title }}</span>
        <p class="four">{{ item.buyNum }}</p>
        <div class="show">
          <div class="showList">
            <span>视频学习</span>
            <span class="item" @click="deleted(id)">不再显示</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "viode",
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState({
      course: (state) => state.detail.course,
    }),
  },
  mounted() {
    this.getCourse_wkx();
  },
  methods: {
    ...mapActions(["getCourse_wkx"]),
    delete(id) {
      this.course.splice(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.concenter {
  width: 100%;
  .main {
    display: flex;

    padding: 5px 10px;
    width: 100%;
    height: 102.5px;
     margin-bottom: 10px;
    .two {
      position: relative;
      img {
        font-size: 0;
        width: 130px !important;
        height: 100px !important;
        margin-right: 15px;
        border-radius: 10px;
      }
      .color {
        position: absolute;
        top: 0;
        left: 15px;
        width: 52px;
        height: 15px;
        font-size: 11px;
        background-color: #e98b71;
        color: #ffffff;
        text-align: center;
        line-height: 15px;
      }
    }

    .top {
      width: 205px;
      .one {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        width: 205px;
        font-size: 18px;
        font-weight: bold;
        color: #4a4945;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
      }
      .four {
        font-size: 12px;
        height: 16px;
        margin: 3px 0 5px;
      }
    }
    .show {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
      }
      .showList {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .item {
          color: #999999;
        }
      }
    }
  }
}
</style>