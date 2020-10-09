import ajax from './ajax'


//例子
//  export const reqCategoryList = () => ajax('/education/getIndexByWeb')
// export const reqCategoryList = () => ajax('/education/getIndexByWeb')


export const reqCategory_fc=()=> ajax('/feed/getCategory')
export const reqByLimit_fc=()=> ajax('community/getByLimit?&pageSize=99&all=true&isShow=4')
export const reqNew_fc=()=> ajax('v2/feed/getNew?&pageSize=10&all=true')
export const reqMasterNew_fc=()=> ajax('v2/feed/getMasterNew?&pageSize=10&all=true')
export const QaNew_fc=()=> ajax('question/getNew?&pageSize=10&all=true')
export const QaHot_fc=()=> ajax('question/getHot?pageSize=10&all=true')
export const QaEssence_fc=()=> ajax('question/getEssence?&pageSize=10&all=true')


//  export const reqCategoryList = () => ajax('/education/getIndexByWeb')


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
export const reqCategoryList = () => ajax('/education/getIndexByWeb')

//cq_课程视频  
export const reqLessonModule =(educationCourseId,date) => ajax({
  url: '/education/getCourse',
  method: 'GET',
  params: {
    _t:date,
    educationCourseId,
    timestamp:date
  }
})

// cq_学员作业
export const reqHomeworkList =(educationCourseId,date,pageIndex,pageSize) => ajax({
  url: '/dish/getOutstandingCourseContent',
  method: 'GET',
  params: {
    _t:date,
    pageIndex,
    pageSize,
    educationCourseId,
    timestamp:date
  }
})

/*******************************新手教程nyt*******************************/
export const reqNewCourse_nyt=()=>ajax('education/getCourse?educationCourseId=10533')
// 获取课程目录
export const reqNewCourseItem_nyt=()=>ajax('education/getSeriesCourse?educationCourseId=10533')

// 获取学员作业
export const reqNewStudentWork_nyt=()=>ajax('dish/getOutstandingCourseContent?educationCourseId=10533')
// 获取学员个人评价信息
// export const reqNewStudentWork_nyt=()=>ajax('dish/getOutstandingCourseContent?educationCourseId=10533')
export const reqNewStudentDetail_nyt=(contentId,educationCourseId)=>ajax.get('/dish/getSingleCourseContent',{
    params:{
        contentId: contentId,
        educationCourseId: educationCourseId
    }
})
export const reqNewStudentDetailTeacher_nyt=(contentId,pageSize=10)=>ajax.get('/comment/getFloorByTeacher',{
    params:{
        contentId: contentId,
        pageSize: pageSize
    }
})


/*******************************************获取分类信息界面**************************************** */
//获取分类信息界面
export const reqClassIfication_wkx=()=>ajax.get('/classify/get')
//right
export const reqClass_wkx=()=>ajax.get('/classify/getRecommend')
//
export const reqSkill_wkx=()=>ajax.get('/education/getNewbieGuide',{
    params:{
        type: 5
    }
})
<<<<<<< HEAD
=======

>>>>>>> acfbb6608cc10bbe3cc540b1255a02412be13801
