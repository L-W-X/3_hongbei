import {
  reqNewCourse_nyt,
  reqNewCourseItem_nyt,
  reqNewStudentWork_nyt,
  reqNewStudentDetail_nyt,
  reqNewStudentDetailTeacher_nyt
} from '@/axios/index.js'
const state = {
  newCourse: {},
  courseItem: [],
  workList: [],
  client:{},
  // 获取学员详细信息
  dish:{},
  // 获取老师评论
  teachComment:[]
}
const mutations = {
  GET_NEW_COURSE_NYT(state, data) {
    state.newCourse = data
  },
  GET_NEW_COURSE_ITEM_NYT(state, data) {
    state.courseItem = data
  },
  GET_NEW_STUDENT_WORK_NYT(state, data) {
    state.workList = data.content.data
  },
  GET_NEW_CLIENT_NAME_NYT(state, data) {
    state.client = data
  },
  GET_NEW_STUDENT_DETAIL_NYT(state, data) {
    state.dish = data
  },
  GET_NEW_STUDENT_COMMENT_NYT(state,data){
    state.teachComment = data
  }

}

const actions = {
  async getReqNewCourse_nyt({commit}) {
    const res = await reqNewCourse_nyt()
    commit('GET_NEW_COURSE_NYT', res.data)
  },
  async getReqNewCourseItem_nyt({commit}) {
    const {data} = await reqNewCourseItem_nyt()
    commit('GET_NEW_COURSE_ITEM_NYT', data.data)
  },
  async getReqNewStudentWork_nyt({commit}) {
    const {data} = await reqNewStudentWork_nyt()
    commit('GET_NEW_STUDENT_WORK_NYT', data)
  },
  async getReqClient_Name_nyt({commit}) {
    const {data} = await reqNewStudentWork_nyt()
    commit('GET_NEW_CLIENT_NAME_NYT', data.client)
  },
  async getReqStudent_Detail_nyt({commit},contentId) {
    // console.log("contentId1",contentId)
    const {data} = await reqNewStudentDetail_nyt(contentId)
    // console.log(111,data)
    commit('GET_NEW_STUDENT_DETAIL_NYT', data.dish)
    console.log(123,data.dish)
  },
  async getReqStudent_Comment_nyt({commit},contentId) {
    // console.log("contentId2",contentId)
    const {data} = await reqNewStudentDetailTeacher_nyt(contentId)
    // console.log(222,data)
    commit('GET_NEW_STUDENT_COMMENT_NYT', data)
    console.log(456,data)
    // console.log(222,data)
  }

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}