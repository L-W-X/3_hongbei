<template>
<div class="detailWrap">
  <div class="personWrap" v-if="dish">
    <div class="nameWrap">
      <img :src="dish.clientImage" />
      <div class="name">
        <p class="first">{{ dish.clientName }}</p>
        <p class="second">{{ dish.createTime }}</p>
      </div>
    </div>
    <div class="personComment">
      {{ dish.coverSummary }}
    </div>
    <div class="imgWrap">
      <img :src="dish.coverImage" />
    </div>
  </div>
  <div class="LineBlock"></div>
  <div class="teacherCommentWrap">
    <div class="title">导师评语</div>
    <div class="personWrap" v-if="teachComment[0]">
      <div class="nameWrap">
        <img :src="teachComment[0].clientImage" />
        <div class="name">
          <p class="first">{{ teachComment[0].clientName }}</p>
          <p class="second">{{ teachComment[0].createTime }}</p>
        </div>
      </div>
      <div class="teacherComment">
        {{ teachComment[0].coverSummary }}
      </div>
      <div class="teacherLine"></div>
    </div>
  </div>
  <div class="admireWrap">
    <div class="admire">
      <img src="https://image.hongbeibang.com/FgfNmQNMRwvSCjDocWbc_gVfqfzW?38X38&imageView2/1/w/38/h/38" />
      <p class="num">{{ dish.likeNum }}</p>
    </div>
  </div>
</div>
</template>

<script>
import Vue from "vue";
import Dialog from "vant";
import {
  mapActions,
  mapState
} from "vuex";
export default {
  name: "dish",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      dish: (state) => state.newcourse.dish,
      teachComment: (state) => state.newcourse.teachComment,
    }),
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    ...mapActions(["getReqStudent_Detail_nyt", "getReqStudent_Comment_nyt"]),
    getDetail() {
      const contentId = this.$route.query.contentId;
      this.getReqStudent_Detail_nyt(contentId);
      this.getReqStudent_Comment_nyt(contentId);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: #313131;
  font-size: 17px;
  margin-top: 15px;
  margin-left: 20px;
  font-weight: bold;
}

.personWrap {
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  overflow: hidden;

  .nameWrap {
    margin-bottom: 10px;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    display: flex;

    img {
      width: 100%;
      height: 100%;
      font-size: 0;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      width: 38px;
      height: 38px;
      background: none;
      border-radius: 50%;
      overflow: hidden;
      box-sizing: border-box;
      border: 1px solid;
      border-color: #e7e2e5;
      margin-right: 15px;
    }

    .name {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .first {
        line-height: 18.5px;
        color: #313131;
        font-size: 13px;
      }

      .second {
        font-size: 11px;
        line-height: 15px;
        color: #b5b5b5;
      }
    }
  }

  .personComment {
    color: #313131;
    font-size: 15px;
    line-height: 21px;
    margin-bottom: 8px;
  }

  .teacherComment {
    text-overflow: ellipsis;
    color: #4a4945;
    margin: 10px 15px 20px 15px;
    font-size: 15px;
    line-height: 21px;
  }

  .teacherLine {
    height: 1px;
    background-color: #f5f7f9;
    width: 335px;
  }

  .imgWrap {
    margin-bottom: 20px;

    img {
      width: 174px;
      background: none;
      height: 232px;
    }
  }
}

.LineBlock {
  height: 8px;
  background-color: #f5f7f9;
}

.admireWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 240px;
  margin-top: 15px;

  .admire {
    height: 60px;
    width: 60px;
    border-radius: 30px;
    overflow: hidden;
    background-color: #f5f7f9;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 5px;
    padding-top: 5px;
    display: flex;
    flex-direction: column;

    img {
      background: none;
      width: 18px;
      height: 18px;
    }

    p {
      margin-top: 2px;
      font-size: 11px;
      line-height: 15px;
      color: #686868;
    }
  }
}
</style>
