<template>
<div class="home">
  <div class="hometop">
    <img src="/image/plus.png" alt="" class="plus" />
    <div class="homesearch">
      <img src="/image/search.png" alt="" />
      <input type="text" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" />
    </div>
    <img src="/image/bell.png" alt="" class="bell" />
  </div>
  <div class="navList">
    <div class='navitem' v-for="item in navlist" :key='item.categoryItemId' @click="openinfo(item.link)">
      <img :src="item.image" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
  <LessonScroll :arraylist="recommdlist.item" :moreLink="recommdlist.moreLink" :title="recommdlist.title"></LessonScroll>

  <LessonScroll v-for="(info,index) in homelist" :key="index" :arraylist="info.item" :moreLink="info.moreLink" :title="info.title"></LessonScroll>
  <div class="homebottom">
    <div>Copyright © hongbeibang.com 粤ICP备14090926号-1</div>
    <div class='police'>
      <img src="https://image.hongbeibang.com/FinEALw7ifYIV2baxOAzDe1ctz1S?20X20" alt="">
      <span>粤公网安备 44060602001356号</span>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import LessonScroll from '@/components/LessonScroll'
export default {
<<<<<<< HEAD
  name: "Home",
  computed: {
    ...mapState({
      navlist: state => state.home.navlist,
      recommdlist: state => state.home.recommdlist,
      homelist: state => state.home.homelist,

    })
  },
  mounted() {
    this.getNavList_lwx()
    this.getRecommend_lwx()
    this.getHomeList_lwx()
  },
  methods: {
    ...mapActions(['getNavList_lwx', 'getRecommend_lwx', 'getHomeList_lwx']),
    openinfo(src) {
      if (src.includes('university')) {
        this.$router.push('/university')
      } else if (src.includes('lessonSeries')) {
        this.$router.push("/newcourse")
      }

    }
  },
  components: {
    LessonScroll
  }
=======
	name: "Home",
	computed:{
		...mapState({
			navlist:state=>state.home.navlist,
			recommdlist:state=>state.home.recommdlist,
			homelist:state=>state.home.homelist,

		})
	},
	mounted(){
		this.getNavList_lwx()
		this.getRecommend_lwx()
		this.getHomeList_lwx()
	},
	methods:{
		...mapActions(['getNavList_lwx','getRecommend_lwx','getHomeList_lwx']),
		openinfo(src){
			if(src.includes('university')){
				this.$router.push('/university')
			}else if(src.includes('classify')){
               this.$router.push("/classIfication")
			}if(src.includes('baike')){
				this.$router.push("/skill")
			}

		}
	},
	components:{
		LessonScroll
	}
>>>>>>> f0be690a553fa6b09c50c2f0aeb7a2b3a8459068
};
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
  padding-top: 44px;

  .hometop {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 44px;
    padding: 0 18px;
    align-items: center;
    background-color: #fff;
    z-index: 9999;

    .homesearch {
      flex: 1;
      height: 35px;
      display: flex;
      padding: 0 10px;
      background-color: #f5f7f9;
      align-items: center;
      margin: 0 20px;

      img {
        width: 18px;
        height: 18px;
      }

      input {
        background-color: #f5f7f9;
        border: none;
        outline: none;
        margin-left: 10px;
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        &::placeholder {
          font-size: 12px;
          color: #999;
          width: 100%;
        }
      }
    }

    .plus {
      height: 27px;
      width: 27px;
    }

    .bell {
      width: 27px;
      height: 27px;
    }
  }

  .navList {
    display: flex;
    align-items: center;

    .navitem {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px 0;

      img {
        width: 45px;
        height: 45px;
      }

      span {
        font-size: 12px;
        color: #4A4945;
        margin-top: 5px;
      }

    }
  }

  .homebottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5F7F9;
    padding: 10px 20px;
    margin-top: 20px;

    div {
      font-size: 13px;
      color: #939393;
      line-height: 25px;

      &.police {

        img {
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
