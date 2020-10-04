import { reqLessonModule } from '@/axios'

const state={

}
const mutations={

}
const actions={
  async getLessonList(){
    const request = await reqLessonModule
    console.log(request);
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