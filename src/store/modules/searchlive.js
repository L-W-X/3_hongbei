import {reqRecommend_lwx,reqSearchlive_lwx} from "@/axios/index.js"

const state = {
   searchrecommend:[],
   searchlive:[],
   searchcount:1
}

const mutations ={
   GET_SEARCHRECOMMEND_LWX(state,data){
       state.searchrecommend=data
   },
   GET_SEARCHWORD_LWX(state,data){
        state.searchlive=data.data
        state.searchcount=data.count
   },
   CHANGE_CLEAR_LWX(state,data){
    state.searchlive=[]
    state.searchcount=0
   }
}

const actions ={
    async getSearchrecommend_lwx({commit}){
        const res = await reqRecommend_lwx(5,50)
        // console.log(res)
        commit('GET_SEARCHRECOMMEND_LWX',res.data.data)
    },
    async getSearchword_lwx({commit},{keyword}){
        const res = await reqSearchlive_lwx(keyword)
        console.log(res,2222)
        commit('GET_SEARCHWORD_LWX',res.data.search.list.course)

    },
    changeclear_lwx({commit}){
        commit('CHANGE_CLEAR_LWX')
    }
}

const getters ={

}

export default{
    state,
    mutations,
    actions,
    getters
}