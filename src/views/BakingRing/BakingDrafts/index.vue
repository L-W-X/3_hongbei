<template>
  <div>
    <div class="draftsContent">
      <div class="black">
        <img @click="black" class="Img" src="https://image.hongbeibang.com/FvpCr89mpooArX7SM26_s5CqdeNL?imageMogr2/strip/thumbnail/640x640" alt="">
      </div>
      <div class="upload">
        <div class="uploadLeft" @click="logo">
          <img src="https://image.hongbeibang.com/Fnz_NOU0VlNn-t_hLcXFbatBze_C?imageMogr2/strip/thumbnail/640x640" alt="">
          <span>上传食谱</span>
        </div>
        <div class="uploadRight" @click="logo">
          <img src="https://image.hongbeibang.com/FtUJvHaECXwl58x67bktx4KSjnym?imageMogr2/strip/thumbnail/640x640" alt="">
          <span>上传作品</span>
        </div>
      </div>
      <div class="drafts" @click="logo">
        <span>草稿箱</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BakingDrafts',
  methods: {
    black(){
      this.$router.go(-1)
    },
    logo(){
      this.$router.push({
        name:"personal"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .draftsContent{
    
    .black{
      width: 100%;
      height: 44px;
      .Img{
        width: 27px;
        height: 27px;
        margin: 10px 0 0 15px;
      }
    }
    .upload{
      display: flex;
      justify-content: space-around;
      margin-top: 360px;
     
      .uploadLeft{
        display: flex;
        flex-flow: column;
        align-items: center;
        img{
          width: 125px;
          height: 125px;
        }
        span{
          font-size: 14px;
          color: #000;
        }
      }
      .uploadRight{
        display: flex;
        flex-flow: column;
        align-items: center;
        img{
          width: 125px;
          height: 125px;
        }
        span{
          font-size: 14px;
          color: #000;
        }
      }
    }
    .drafts{
      margin-left: 15px;
      text-align: center;
      width: 345px;
      height: 55px;
      line-height: 55px;
      position: absolute;
      bottom: 0;
      border-top: 1px solid #E7E2E5;
      span{
        font-size: 16px;
        color: #4a4945;
      }
    }
  }
  
</style>
