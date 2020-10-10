import {reqCategory_fc} from "@/axios/index.js"
import {reqByLimit_fc} from "@/axios/index.js"
// import {reqNew_fc} from "@/axios/index.js"

const state={
  category:[],
  Data:[],
  content:[]
}
const mutations={
  GET_CATA_GORY_FC(state,data){
      state.category = data
      // console.log(state.category);
  },
  GET_BY_LIMIT_FC(state,data){
    state.Data = data
    // console.log(state.Data);
  },
  GET_NEW_FC(state,data){
    state.content = data
    // console.log(state.content);
  }
}
const actions={
  async getReqCategory_fc({commit}){
    const res = await reqCategory_fc()
    commit("GET_CATA_GORY_FC",res.data.category[0].item)
  },
  async getReqByLimit_fc({commit}){
    const res = await reqByLimit_fc()
    // console.log(res);
    
    commit("GET_BY_LIMIT_FC",res.data.data)
  },
  async getReqNew_fc({commit}){
    const res = await reqNew_fc()
    commit("GET_NEW_FC",res.data.content)
  },

}
const getters={

}

export default{
  state,
  mutations,
  actions,
  getters
}