import {reqVideo_wkx,reqCourse_wkx} from '@/axios/index.js'
const state={
    search:[],
    course:{},
    count:0
}
const mutations={
    GET_SEARCH(state,data){
        state.search=data.data
        state.count=data.count
    },
    GET_COURSE(state,data){
        state.course=data.splice(0,3)
    },
    CHANGE_CLEAR_WKX(state,data){
        state.search=[]
        state.count=0

    }
}
const actions={
    async getSearch_wkx({commit},{keyword,sort}){
        const res3=await reqVideo_wkx(keyword,sort)
    //   console.log(res3)
        commit("GET_SEARCH",res3.data.search.list.recipe)
    },
    async getCourse_wkx({commit},keyword){
        const res2=await reqCourse_wkx(0,keyword,3)
        console.log(keyword)
        console.log("0000",res2.data.search.list.course.data)
        commit("GET_COURSE",res2.data.search.list.course.data)
    },
    changeclear_wkx({commit}){
        commit("CHANGE_CLEAR_WKX")
    }
}
export default{
    state,
    mutations,
    actions
}
