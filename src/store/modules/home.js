import {reqNaveList_lwx,reqRecommend_lwx,reqHomelist_lwx,reqSeeMoreItem_lwx} from '@/axios/index.js'

const state={
    navlist:[],
    homelist:[],
    seemorelist:[],
    recommdlist:{
        title:'',
        item:[],
        moreLink:'',
        categoryId:0
    }
}
const mutations={

    GET_NAV_LIST_LWX(state, data){
        state.navlist=data[0].item
        state.recommdlist.title=data[1].title
        state.recommdlist.moreLink=data[1].moreLink
       
    },
    GET_RECOMMEND_LWX(state,data){
        state.recommdlist.item=data
    },
    GET_HOME_LIST_LWX(state,data){
        state.homelist=data
    },
    GET_SEE_MORE_LWX(state,data){
        state.seemorelist=data
    }


}
const actions={
   async getNavList_lwx({commit}){
        const res= await reqNaveList_lwx()
        commit('GET_NAV_LIST_LWX',res.data.category)
    },
    async getRecommend_lwx({commit}){
        const res= await reqRecommend_lwx()
        commit('GET_RECOMMEND_LWX',res.data.data)
    },
    async getHomeList_lwx({commit}){
        const res= await reqHomelist_lwx()
        commit('GET_HOME_LIST_LWX',res.data.category.splice(1))
    },
    async getSeeMore_lwx({commit},id){
        const res= await reqSeeMoreItem_lwx(id)
       
        commit('GET_SEE_MORE_LWX',res.data)
    }

}
const getters={

}

export default{
    state,
    mutations,
    actions,
    getters
}