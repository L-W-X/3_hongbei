<template>
  <div>
    <div class="content">
      <div class="topLeft">
        <img src="https://image.hongbeibang.com/FlqyNFosCk9hhyBMoPkej9xbh_Yf?imageView2/1/w/50/h/50" alt="" @click="backHome">
      </div>
      <div class="topLogin">登录</div>
    </div>

    <div class="subject">
      <div class="subjectImg">
        <img src="https://image.hongbeibang.com/FoBGm71FF5SYiTw0Wc0xkeiL3eQz?imageMogr2/strip/thumbnail/510x510" alt="">
      </div>

      <div class="subjectSignIn">
        <div>使用微信登录</div>
      </div>
      
      <div class="signOther">其他登录方式</div>
      <div class="explain">
        <span>登录即代表阅读并同意</span>
        <span class="explainNotes">服务条款</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Personal',
  methods: {
    backHome(){
      this.$router.push({
        name:"home"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .content{
    width: 100%;
    height: 44px;
    // margin-top: 44px;
    display: flex;
    align-items: center;
    position: relative;
    background: #fff;
    zoom: 1;
    .topLeft{
      margin: 9.5px 0;
      padding-left:20px ;
      img{
        width: 10px;
        height: 17px;
      }
    }
    .topLogin{
      font-size: 18px;
      color: #4a4945;
      padding:0 90px 0 140px;
      font-weight: bold;
    }
  }
  .subject{
    display: flex;
    flex-flow: column;
    align-items: center;
    .subjectImg{
      margin-top: 134px;
      img{
        width: 300px;
        height: 147px;
      }
    }
    .subjectSignIn{
        width: 295px;
        height: 44px;
        background:#2AC277 ;
        text-align: center;
        line-height: 44px;
        border-radius: 4px;
        margin: 30px 40px 0;
      div{
        font-size: 15px;
        color: #fff;
      }
    }
    .signOther{
      width: 90px;
      height: 40px;
      font-size: 15px;
      color: #e98b71;
      text-align: center;
      margin: 15px 0;
      padding: 10px 0;
    }
    .explain{
      font-size: 12px;
      color: #999;
      text-align: center;
      height: 20px;
      margin: 20px 0;
      .explainNotes{
        color: #e98b71;
      }
    }
  }
</style>
