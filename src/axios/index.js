import ajax from './ajax'


//例子
 export const reqCategoryList = () => ajax('/education/getIndexByWeb')


/*******************************首页请求*******************************/
//获取首页导航栏信息
export const reqNaveList_lwx=()=>ajax('/index/get')
//获取首页推荐课程
export const reqRecommend_lwx=(type=3,pageSize=10)=>ajax.get('/recommend/getRandContent',{
    params: {
        type: type,
        pageSize: pageSize
    }
})
//获取首页课程列表
export const reqHomelist_lwx=()=>ajax('/education/getIndexByWeb')
//获取视频学堂页面顶部数据
export const reqUniversityTop_lwx=(type=11)=>ajax.get('/index/getByType',{
    params:{
        type: type
    }
})
//获取视屏学堂tab栏详细分栏数据
export const reqUniversityItem_lwx=(id)=>ajax.get('/index/getIndexItem',{
    params:{
        categoryId: id
    }
})
/*******************************新手教程nyt*******************************/
export const reqNewCourse_nyt=()=>ajax('education/getCourse?educationCourseId=10533')