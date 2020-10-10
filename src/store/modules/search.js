import {reqHotsearch_lwx} from '@/axios/index.js'

const state = {
    hotWords:[]
}

const mutations ={
    GET_HOT_SEARCH_LWX(state,data){
        state.hotWords=data
    }
}

const actions ={
    async getHotSearch_lwx({commit}){
        const res= await reqHotsearch_lwx()
        console.log(res)
        commit('GET_HOT_SEARCH_LWX',res.data.popularSearch)
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