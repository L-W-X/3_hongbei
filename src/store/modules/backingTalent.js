import {reqMasterNew_fc} from "@/axios/index.js"

const state={
  content:[]
}
const mutations={
  GET_MASTER_NEW_FC(state,data){
    state.content = data
    // console.log(state.content);
  }
}
const actions={
  async getReqMasterNew_fc({commit}){
    const res = await reqMasterNew_fc()
    commit("GET_MASTER_NEW_FC",res.data.content)
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