<template>
	<div class="srollContainer">
		<div class="titlebody">
			<span class="title">{{title}}</span>
			<span class="link" @click="seemore(categoryId)">{{moreLink!==''?'查看全部':""}}</span>
		</div>
		<div ref="scroll">
			<ul class="scrollbody" ref='scrollbody'>
				<li  v-for="item in arraylist" :key="item.contentId">
					<img
						:src="item.coverImage||item.verticalImages[0]"
						alt=""
					/>
					<span> {{item.buyNum>1000?'1000+':item.buyNum}}在学 </span>
					<div>{{item.title}}</div>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
	name: "lessonScroll",
	props: {
		arraylist: Array,
		title: String,
		moreLink: String,
		categoryId:Number
	},
	methods:{
        seemore(id){
			console.log(id)
           this.$router.push({
			   path:'/seemore',
			   query:{
				   categoryId:id
			   }

		   })
        }
    },
    watch:{
        arraylist(value){
            this.$nextTick(()=>{
                  this.scroll.refresh()
            })
          
            // this.$nextTick(()=>{
            // //     let width=(this.arraylist.length*170+20)
            // // this.$refs.scrollbody.style.width=width+'px'
            
			//  this.scroll = new BScroll(this.$refs.scroll, {
			// 	startX: 0,
			// 	scrollX: true,
			// 	scrollY: false,
			// 	click:true,
			// 	eventPassthrough: "vertical",
			// });
            // })
           
        }
    },
	mounted() {
        this.$nextTick(()=>{
            
            //     let width=(this.arraylist.length*170+20)
            // this.$refs.scrollbody.style.width=width+'px'
			 this.scroll = new BScroll(this.$refs.scroll, {
				startX: 0,
				scrollX: true,
				scrollY: false,
				click:true,
				eventPassthrough: "vertical",
            });
          
            })
		
	},
};
</script>

<style lang="scss" scoped>
.srollContainer {
	width: 100%;
	overflow: hidden;
    touch-action: none;
	.titlebody {
		padding: 25px 15px 10px;
		display: flex;
		justify-content: space-between;
		.title {
			font-size: 17px;
			line-height: 24px;
			color: #313131;
			font-weight: bold;
		}
		.link {
			font-size: 14px;
			color: #999;
			line-height: 24px;
		}
	}
	.scrollbody {
		height: 270px;
        display: inline-block; 
		white-space: nowrap;
        list-style: none;
		li {
			margin-right: 10px;
			position: relative;
			width: 160px;
			height: 270px;
			display: inline-block;
            vertical-align: top;
			&:first-child {
				margin-left: 15px;
			}
			&:last-child {
				margin-right: 15px;
			}
			img {
				width: 100%;
				height: 225px;
				border-radius: 4px;
			}
			span {
				position: absolute;
				left: 10px;
				bottom: 50px;
				font-size: 11px;
				color: #4a4945;
				background-color: #fff;
				padding: 2px 4px;
				border-radius: 4px;
			}
			div {
				width: 100%;
				overflow: hidden;
				font-size: 15px;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				display: -webkit-box;
				-webkit-line-clamp: 2;
                white-space: normal;
			}
		}
	}
}
</style>