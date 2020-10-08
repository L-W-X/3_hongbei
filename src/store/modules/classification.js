import {reqClassIfication_wkx,reqClass_wkx} from '@/axios/index.js'

const state ={
    classify:[],
    list:[],
    classifyId:1,
    classifys:[]

}
const mutations = {
   GET_CLASSIFY_WKX(state,data){
       state.classify=[{name:"推荐",classifyId:1},...data]
       state.list=data
   },
   GET_CHANGEID_WKX(state,data){
       state.classifyId=data
   },
   GET_CLASS_IFYS(state,data){
       state.classifys=data
   }

 

}
const actions = {
    async getClassify_wkx({commit}){
        const res=await reqClassIfication_wkx()
        console.log(res)
        commit( 'GET_CLASSIFY_WKX',res.data.classify)
    },
    getchangeid_wkx({commit},id){
        // const res2= reqClassIfication_wkx()
        commit('GET_CHANGEID_WKX',id)
    },
    async getClassifys_wkx({commit}){
        const res1=await reqClass_wkx()
        console.log(res1)
        commit('GET_CLASS_IFYS',res1.data)
    }
   
}
export default{
    state,
    mutations,
    actions
}