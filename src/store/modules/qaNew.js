// import {QaNew_fc} from "@/axios/index.js"

const state={
  qaContent:[]
}

const mutations={
  GET_QA_NEW_FC(state,data){
    state.qaContent = data
    // console.log(state.qaContent);
    
  }
}

const actions={
  async getQaNew_fc({commit}){
    const res = await QaNew_fc()
    commit("GET_QA_NEW_FC",res.data.content.data)
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