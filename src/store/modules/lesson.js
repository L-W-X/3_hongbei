import { reqClientOtherCourse , reqHomeworkList } from '@/axios'

const state={
  // lessonInfo:{},
  homeworkList:[],
  arraylist:[]
}
const mutations={
  // CHANGE_LESSON_INFO(state,lessonInfo){
  //   state.lessonInfo = lessonInfo
  // },
  CHANGE_HOMEWORK_LIST(state,homeworkList){
    state.homeworkList = homeworkList
  },
  CHANGE_ARRAY_LIST(state,arraylist){
    state.arraylist = arraylist
  }
}
const actions={
  // async getLessonInfo({commit},{contentId,date}){
  //   const {data} = await reqLessonModule(contentId,date)
  //   // console.log(data);
  //   commit('CHANGE_LESSON_INFO',data)
  // },
  async getHomeworkList({commit},{contentId,date,pageIndex,pageSize}){
    const {data} = await reqHomeworkList(contentId,date,pageIndex,pageSize)
    // console.log(data);
    const content = data.content.data
    commit('CHANGE_HOMEWORK_LIST',content)
  },
  async getClientOtherCourse({commit},{pageIndex,pageSize,clientId,educationCourseId,date}){
    const {data} = await reqClientOtherCourse(pageIndex,pageSize,clientId,educationCourseId,date)
    // console.log(data,pageSize);
    const content = data.data
    // console.log(content);
    commit('CHANGE_ARRAY_LIST',content)
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