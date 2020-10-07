<template>
<div class="container">
  <div class="wrap">
    <ul class="left">
      <li v-for="item in huikan" :key="item.id"><i></i><span>{{item.title}}</span></li>
    </ul>
    <div class="right">
      <img src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8">
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Nyt1',
  data() {
    return {

      huikan: [{
          id: 1,
          title: '永久回看'
        },
        {
          id: 2,
          title: '报名即学'
        },
        {
          id: 3,
          title: '自营课程'
        },
        {
          id: 4,
          title: '高效学习体验'
        },
        {
          id: 5,
          title: '分步骤学'
        },
        {
          id: 6,
          title: '唯一品类'
        },
        {
          id: 7,
          title: '图片下载'
        },
        {
          id: 8,
          title: '工具材料参考'
        }
      ]
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px 20px;
  background: #fff;
  display: flex;
  align-items: center;
  margin: 10px 0;

  .left {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    // background-color: teal;

    align-items: center;

    li {
      color: #676767;
      font-weight: 200;
      font-size: 13px;
      line-height: 25px;
      // background-color: yellowgreen;
      display: flex;
      flex-grow: 1;

      align-items: center;

      span {
        margin: 0 15px 0 5px;
      }

      i {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: pink;
      }
    }
  }

  .right {
    img {
      width: 6.75px;
      height: 11.75px;

    }
  }

}
</style>
