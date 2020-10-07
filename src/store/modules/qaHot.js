import {QaHot_fc} from "@/axios/index.js"

const state={
  qaHotContent:[]
}

const mutations={
  GET_QA_HOT_FC(state,data){
    state.qaHotContent = data
    // console.log(state.qaHotContent);
    
  }
}

const actions={
  async getQaHot_fc({commit}){
    const res = await QaHot_fc()
    commit("GET_QA_HOT_FC",res.data.content.data)
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