import ajax from './ajax'


//例子
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