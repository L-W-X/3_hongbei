import {reqSkill_wkx} from '@/axios/index.js'

const state = {
    courseGuide:[]
}
const mutations = {
    GET_COURSE_GUIDE(state,data){
        state.courseGuide=data
    }
}
const actions = {
    async getCourseGuide_wkx({commit}){
        const res = await reqSkill_wkx()
        console.log(res.data.courseGuide)
        const data = res.data.courseGuide.splice(0,6)
        commit("GET_COURSE_GUIDE",data)
    }
   
}
export default{
    state,
    mutations,
    actions
}