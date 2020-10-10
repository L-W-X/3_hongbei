
import {reqUniversityTop_lwx,reqHomelist_lwx,reqUniversityItem_lwx} from '@/axios/index.js'



const state ={
 navlist:[],
 categoryId:1,
 uhomelist:[],
 imagelist:[],
 itemList:[],
}

const mutations ={
    GET_UNIVERSITY_TOP_LWX(state,data){
        state.navlist = [{categoryId:1,title:'推荐'},...data]
      
    },
    CHANGE_CATEGORYID(state,data){
        state.categoryId=data
    },
    GET_UHOMELIST_LWX(state,data){
        state.uhomelist=data.slice(1)
        state.imagelist=data.slice(0,1)[0].item
    },
    GET_UNIVERSITY_ITEM_LWX(state,data){
        state.itemList=data
    }

}

const actions ={
    async getUniversityTop_lwx({commit}){
        const res= await reqUniversityTop_lwx()
      
        commit('GET_UNIVERSITY_TOP_LWX',res.data)
    },
     change_categoryid({commit},id){
      
        commit('CHANGE_CATEGORYID',id)
    },
    async getUHomeList_lwx({commit}){
        const res= await reqHomelist_lwx()
        
        commit('GET_UHOMELIST_LWX',res.data.category)
    },
    async getUniversityItem_lwx({commit},id){
        const res= await reqUniversityItem_lwx(id)
       
        commit('GET_UNIVERSITY_ITEM_LWX',res.data)
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