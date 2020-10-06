
import {reqNewCourse_nyt} from '@/axios/index.js'



const state ={
 newCourse:{},
//  image:[],
}

const mutations ={
   
    
    // reqNewCourse_nyt
    GET_NEW_COURSE_NYT(state,data){
      state.newCourse=data
      // state.image=data
      // console.log(111,state.image)
    }

}

const actions ={
    async getReqNewCourse_nyt({commit}){
        const res= await reqNewCourse_nyt()
          // console.log(res.data.images)
        commit('GET_NEW_COURSE_NYT',res.data)
        // commit('GET_NEW_COURSE_NYT',res.data.images)

    }

}

const getters ={

}

export default{
    state,
    mutations,
    actions,
    getters
}