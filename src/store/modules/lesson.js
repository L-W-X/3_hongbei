import { reqLessonModule , reqHomeworkList } from '@/axios'

const state={
  lessonInfo:{},
  homeworkList:[]
}
const mutations={
  CHANGE_LESSON_INFO(state,lessonInfo){
    state.lessonInfo = lessonInfo
  },
  CHANGE_HOMEWORK_LIST(state,homeworkList){
    state.homeworkList = homeworkList
  }
}
const actions={
  async getLessonInfo({commit},{contentId,date}){
    const {data} = await reqLessonModule(contentId,date)
    // console.log(data);
    commit('CHANGE_LESSON_INFO',data)
  },
  async getHomeworkList({commit},{contentId,date,pageIndex,pageSize}){
    const {data} = await reqHomeworkList(contentId,date,pageIndex,pageSize)
    const content = data.content.data
    commit('CHANGE_HOMEWORK_LIST',content)
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