<template>
	<div class="searchContainer">
		<div class="top">
			<img src="/image/back.png" alt="" @click="$router.go(-1)"/>
			<input type="text" :placeholder="this.$route.query.type==='live'?'搜索课程':'搜索食谱/食材，烘焙/家常菜一应俱全'" v-model.trim="searchkey"/>
			<span @click="searchinput">搜索</span>
		</div>
        <div class="hotsearch">
            <div class='title'>热门搜索</div>
            <div class='body'>
                <span v-for="(item,index) in hotWords" :key="index" @click='search(item.keyword)'>{{item.keyword}}</span>
            </div>
            
        </div>
	</div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
    name: "search",
    data(){
        return{
            searchkey:''
        }
    },
    mounted() {
        this.getHotSearch_lwx()
    },
    methods: {
        ...mapActions(['getHotSearch_lwx']),
        search(keyword){
           
            if(this.$route.query.type==='live'){
                 this.$router.push({
                name:'searchlive',
                params:{
                    keyword,
                }

            })
            }else{
                this.$router.push({
                name:'detail',
                params:{
                    keyword,
                }
            })
            }
            
        },
    searchinput(){
         if(this.searchkey==='') return
        if(this.$route.query.type==='live'){
            this.$router.push({
                name:'searchlive',
                params:{
                    keyword:this.searchkey
                },
                query:{
                    type:'live'
                }

            })
        }else{
             this.$router.push({
                name:'detail',
                params:{
                    keyword:this.searchkey
                }
            })
        }
       
    }

    },
    computed:{
        ...mapState({
            hotWords:state=>state.search.hotWords
        })
    }
};
</script>
<style lang="scss" scoped>
.searchContainer {
	.top {
		display: flex;
		width: 100%;
		height: 44px;
		padding: 0 18px;
		align-items: center;
		img {
			width: 27px;
			height: 27px;
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
            padding:5px;
            border-radius:5px;
            line-height:25px;
            font-size:16px;
            color: #333;
			&::placeholder {
				font-size: 16px;
				color: #999;
				width: 100%;
			}
		}
		span {
			font-size: 16px;
			color: #333;
			margin-left: 10px;
		}
	}
    .hotsearch{
        padding:0 15px;
        .title{
            font-size: 14px;
            color: #999;
            line-height:30px;
            margin:10px 0;
        }
        .body{
            display: flex;
            flex-wrap: wrap;
            span{
                font-size: 16px;
                padding:0 10px;
                line-height:30px;
                background-color:#F5F7F9;
                margin-right: 10px;
                border-radius: 15px;
                margin-bottom:10px;
                color: #4A4945;
            }
        }

    }
}
</style>