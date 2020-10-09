<template>
  <div>
    <div class="container">
    <img src="/image/cq_logo.jpg" class="logo">
    <div class="content">烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！</div>
    <div class="cateContainer">
      <div class="cateItem">
        <div class="item">
          <img src="/image/cq_dangao.jpg" alt="">
          <div class="text">蛋糕</div>
        </div>
      </div>
      <div class="cateItem">
        <div class="item">
          <img src="/image/cq_tiandian.jpg" alt="">
          <div class="text">甜点</div>
        </div>
      </div>
      <div class="cateItem">
        <div class="item">
          <img src="/image/cq_mianbao.jpg" alt="">
          <div class="text">面包</div>
        </div>
      </div>
      <div class="cateItem">
        <div class="item">
          <img src="/image/cq_dianxin.jpg" alt="">
          <div class="text">中式点心</div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Introduce',
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #fff;
    padding: 20px;
    padding-right: 17.5px;
    .logo{
      width: 130px;
      height: 57.2px;
      background: none;
    }
    .content{
      font-weight: 300;
      font-size: 14px;
      line-height: 22px;
      color: #313131;
    }
    .cateContainer{
      display: flex;
      flex-direction: row;
      margin-top: 15px;
      .cateItem{
        flex: 1;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        .item{
          flex: 1;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          img{
            width: 50px;
            height: 58px;
            background: none;
          }
          .text{
            font-size: 12px;
            color: #313131;
          }
        }
      }
    }
  }
  .footer{
    background-color: #fff;
    height: 25px;
    width: 100%;
  }
</style>
