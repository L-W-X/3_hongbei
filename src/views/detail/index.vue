<template>
  <div class="main">
    <div class="mainer">
      <div class="top">
        <img src="/image/back.png" @click="gotoback" />
        <input
          
          placeholder="搜索食谱"
          type="text"
          v-model.trim="searchkey"
          @input="search1"
          @keydown="search2"
        />
        <div class="top-right">
          <span
            >食谱
            <!-- <img src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32" alt="" /> -->
          </span>
          <img
            src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32"
            alt=""
          />
        </div>
      </div>
      <div class="middle">
        <div class="first">
          <span @click="goto(0, '')">综合排序</span>
          <div class="line" v-show="index === 0"></div>
        </div>
        <div>
          <span @click="goto(1, 'dishNum')">做过最多</span>
          <div class="line" v-show="index === 1"></div>
        </div>
        <div>
          <span @click="goto(2, 'master')">达人食谱</span>
          <div class="line" v-show="index === 2"></div>
        </div>
      </div>
    </div>

    <div class="noSearch" v-if="!count">
      <img
        src="https://image.hongbeibang.com/FsMQ8zX03K3u2cNUmIT5UZKdsMxb?400X400&imageView2/1/w/350/h/350"
        alt=""
      />
      <span>要不试一下别的关键词？</span>
    </div>
    <div class="one">
      <!-- <viode></viode> -->

      <sorting :search="search"></sorting>
    </div>
  </div>
</template>

<script>
import sorting from "./sorting";
// import viode from "./viode";
import debounce from "lodash/debounce"
import { mapState, mapActions } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      index: 0,
      searchkey: this.$route.params.keyword,
    };
  },
  mounted() {
    this.getSearch_wkx({ keyword: this.searchkey, sort: "" });
    
    // this.getCourse_wkx();
  },
  computed: {
    ...mapState({
      search: (state) => state.detail.search,
      count:state=>state.detail.count
      //   course:state=>state.detail.course
    }),
  },
  methods: {
    ...mapActions(["getSearch_wkx", "getCourse_wkx","changeclear_wkx"]),
    search1:debounce(function(){
      const sort = "";
      if (this.index === 0) {
      } else if ((this, index === 1)) {
        sort = "dishNum";
      } else if ((this, index === 2)) {
        sort = "master";
      }
      if(this.searchkey===""){
        this.changeclear_wkx()
      }else{
        this.getSearch_wkx({ keyword: this.searchkey, sort });
      }
      console.log(11111)
    },2000),
    search2(e) {
      if (e.keyCode === 13) {
        this.$router.push({
          name: "detail",
          params: {
            keyword: this.searchkey,
          },
        });
      }
    },

    gotoback() {
      this.$router.go(-1);
    },
    async goto(index, dishNum) {
      this.index = index;
      this.getSearch_wkx({ keyword: this.searchkey, sort: dishNum });
      
    },
  },
  components: {
    // viode,
    sorting,
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .mainer {
    width: 100%;
    position: fixed;
    background-color: #fff;
    z-index: 99;
    .top {
      background: #fff;
      line-height: 44px;
      display: flex;
      // font-size: 0;
      height: 44px;
      margin: 10px 20px;
      align-items: center;
      width: 100%;
      height: 35px;
      img {
        width: 27px;
        height: 27px;
      }
      .top-right {
        height: 100%;
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          color: #e98b71;
          margin: 7px 3px;
        }
        img {
          width: 18px;
          height: 18px;
        }
      }
      input {
        width: 224px;
        // flex: 1;
        height: 100%;
        margin: 0 15px;
        border-radius: 4px;
        zoom: 1;
        background-color: #f5f7f9;
        box-sizing: border-box;
        padding: 0 10px;
        display: flex;
        border: none;
        align-items: center;
        outline: none;
        justify-content: center;
      }
    }
  }
  .noSearch {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 25px;
    padding-top: 100px;
    span{
      font-size: 14px;
    text-align: center;
    color: #999999;
    margin-top: 10px;
    line-height: 16px;
    }
    img{
      width:175px;
      height:175px;
    }
  }
  .middle {
    width: 375.2px;
    display: flex;
    justify-content: space-around;
    color: #4a4945;
    font-weight: bold;
    font-size: 14px;
    .line {
      width: 50px;
      height: 2px;
      background-color: red;
    }
  }
  .one {
    // height: calc(100%-90px);
    padding-top: 78px;
  }
}
</style>