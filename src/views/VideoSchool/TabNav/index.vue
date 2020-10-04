<template>
	<div class="tabContainer" ref="tabNav">
		<div class="tabbody">
			<div
				class="tabContent"
				v-for="item in navlist"
				:key="item.categoryId"
				@click="selectnav(item.categoryId)"
				:id="item.categoryId"
			>
				<div :class="item.categoryId===categoryId?'itemvalue':''">{{ item.title }}</div>
				<div :class="item.categoryId===categoryId?'line':''"></div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
	name: "tabnav",
	props: {
		navlist: Array,
		categoryId: Number,
		changeid: Function,
    },
    watch:{
        navlist(){
            this.$nextTick(()=>{
                this.scroll.refresh()
            })
            
        }
    },
	mounted() {
		this.$nextTick(() => {
			this.scroll = new BScroll(this.$refs.tabNav, {
				startX: 0,
				scrollX: true,
				scrollY: false,
				click: true,
				eventPassthrough: "vertical",
			});
		});
	},
	methods: {
		selectnav(id) {
			this.changeid(id);
		},
	},
};
</script>
<style lang="scss" scoped>
.tabContainer {
	overflow: hidden;
    touch-action: none;
	.tabbody {
		display: inline-block;
		white-space: nowrap;

		height: 40px;
		.tabContent {
			position: relative;
			height: 30px;
			line-height: 30px;
			display: inline-block;
			font-size: 15px;
			color: #5d5d5d;
			margin: 0 8px;
			.itemvalue {
				font-weight: bold;
				font-size: 15px;
				transform: scale(1.1);
			}
			.line {
				position: absolute;
				width: 25px;
				height: 3px;
				background-color: #e98b71;
				border-radius: 3px;
				left: 50%;
				margin-left: -12.5px;
				bottom: 0px;
			}
		}
	}
}
</style>