<template>
 <div class="QA">
      <div class="qaNewContent" v-for="(item,index) in qaHotContent" :key="index">
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
</template>

<script>
export default {
  name: 'newhot',
  props: ['qaHotContent']
}
</script>

<style lang="scss" scoped>
.QA{
    margin-top:90px;
     padding: 0 15px;
    .qaNewContent{
     padding: 15px 0 10px;
     border-bottom: 1px solid #e7e2e5;
      .qaQuestion{
        font-size: 18px;
        color: #4a4945;
        font-weight: bold;
        margin-bottom: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .qaNewDescribe{
        display: flex;
        width: 345px;
        height: 70px;
        margin: 10px 0;
        background: #F5F7F9;
        img{
          width: 70px;
          height: 70px;
          border-radius: 4px;
        }
        .qaNewRelease{
          display: flex;
          flex-flow: column;
          justify-content:space-evenly;
          margin-left:15px ;
          .qaNewName{
            font-size: 14px;
            color: #313131;
            font-weight: bold;
          }
          .qaNewId{
            font-size: 13px;
            color: #999;
          }
        }
      }
      .Qabottom{
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: space-between;
        line-height: 20px;
        .QabottomLeft{
          font-size: 14px;
          color: #498dd0;
          width: 273px;
          height: 20px;
        }
        .QabottomRight{
          height: 22px;
          display: flex;
          img{
            width: 19px;
            height: 19px;
            margin-right: 5px;
          }
          span{
            font-size: 14px;
            color: #e98b71;
          }
        }
      }
    }
  }
</style>
