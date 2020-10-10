<template>
  <div class="concenter">
    <div v-for="(item, index) in search" :key="index" class="main">
      <img :src="item.image" alt="" />
      <div class="top">
        <span class="one">{{ item.coverTitle }}</span>
        <p class="four">{{ item.clientName }}</p>
        <div class="two">
          <p class="three">{{ item.collectNum }}收藏</p>
          <span>{{ item.dishNum }}人做过</span>
        </div>
      </div>

      <!-- <div class="show">
        <span>视频学习</span>
        <div>
          <span>不再显示</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "sorting",
  props: {
    search: {},
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
    margin-bottom: 10px;
    height: 102.5px;
    img {
      font-size: 0;
      width: 130px !important;
      height: 100px !important;
      margin-right: 15px;
      border-radius:10px;
      
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
        // margin-top: 3px;
        // font-size: 11px;
        // color: #999999;
        // overflow: hidden;
        // text-overflow: ellipsis;

        font-size: 12px;
        height: 16px;
        margin: 3px 0 5px;
      }
      .two {
        display: flex;
        font-size: 12px;
        height: 16px;
        .three {
          margin-right: 5px;
          font-size: 12px;
          height: 16px;
        }
      }
    }
  }
}
</style>