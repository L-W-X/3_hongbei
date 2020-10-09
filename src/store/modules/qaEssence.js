import {QaEssence_fc} from "@/axios/index.js"

const state={
  qaEssenceContent:[]
}

const mutations={
  GET_QA_Essence_FC(state,data){
    state.qaEssenceContent = data
    // console.log(state.qaEssenceContent);
    
  }
}

const actions={
  async getQaEssence_fc({commit}){
    const res = await QaEssence_fc()
    commit("GET_QA_Essence_FC",res.data.content.data)
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