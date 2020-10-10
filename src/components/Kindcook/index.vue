<template>
	<div class="kindcook">
		<div v-for="item in arraylist" :key="item.contentId" class="item"  @click="look(item)">
			<img :src="item.coverImage||item.verticalImages[0]" alt="" />
			<span> {{ item.buyNum > 1000 ? "1000+" : item.buyNum }}人参加 </span>
			<div>{{ item.title }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "kindcook",
	props: ["arraylist"],
	methods: {
		look(item){
			// console.log(item)
			this.$router.push({
				name:'lesson',
					query:{
					contentId:item.courseId||item.educationCourseId
				}	
			})
		}
	}
};
</script>
<style lang="scss" scoped>
.kindcook {
    
	width: 100%;
	padding: 0px 20px;
	display: flex;
	flex-wrap: wrap;
    justify-content: space-between;
	.item {
		width: 162px;
		height: 305px;
		box-sizing: border-box;
		padding-bottom: 24px;
		position: relative;
		img {
			width: 100%;
			border-radius: 4px;
		}
		span {
			position: absolute;
			left: 10px;
			bottom: 80px;
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
</style>