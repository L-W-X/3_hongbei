import { reqNewList , reqHomeworkList } from '@/axios'

const state={
  goodList:[],
  newList:[]
}
const mutations={
  CHANGE_GOOD_LIST(state,data){
    state.goodList = data
  },
  CHANGE_NEW_LIST(state,data){
    state.newList = data
  }
}
const actions={
  async getGoodList({commit},{educationCourseId,date,pageIndex,pageSize}){
    const result = await reqHomeworkList(educationCourseId,date,pageIndex,pageSize)
    commit("CHANGE_GOOD_LIST",result.data.content.data)
  },
  async getNewList({commit},{educationCourseId,date,pageIndex,pageSize}){
    console.log(educationCourseId);
    const result = await reqNewList(educationCourseId,date,pageIndex,pageSize)
    commit("CHANGE_NEW_LIST",result.data.content.data)
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