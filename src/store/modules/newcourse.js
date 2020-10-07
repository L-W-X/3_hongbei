import {
  reqNewCourse_nyt,
  reqNewCourseItem_nyt,
  reqNewStudentWork_nyt
} from '@/axios/index.js'



const state = {
  newCourse: {},
  courseItem: [],
  workList: [],
  client:{
    name:"远航"
  }
  //  image:[],
}

const mutations = {


  // reqNewCourse_nyt
  GET_NEW_COURSE_NYT(state, data) {
    state.newCourse = data
    // state.image=data
    // console.log(111,state.image)
  },
  GET_NEW_COURSE_ITEM_NYT(state, data) {
    state.courseItem = data
  },
  GET_NEW_STUDENT_WORK_NYT(state, data) {
    state.workList = data.content.data
    // state.clientNam = data.client.name
  },
  GET_NEW_CLIENT_NAME_NYT(state, data) {
    // state.workList = data.content.data
    state.client = data
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
    // console.log(111,data)
  },
  async getReqNewStudentWork_nyt({commit}) {
    const {data} = await reqNewStudentWork_nyt()
    commit('GET_NEW_STUDENT_WORK_NYT', data)
    // console.log(222,data.content)
  },
  async getReqClient_Name_nyt({commit}) {
    const {data} = await reqNewStudentWork_nyt()
    commit('GET_NEW_CLIENT_NAME_NYT', data.client)
    // console.log(222,data.content)
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