// import {reqMasterNew_fc} from "@/axios/index.js"

const state={
  Content:[]
}
const mutations={
  GET_MASTER_NEW_FC(state,data){
    state.Content = data
    // console.log(state.content);
  }
}

const actions={
  async getReqMasterNew_fc({commit}){
    // console.log(id)
    const res = await reqMasterNew_fc()
    // console.log(res.data.content)
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