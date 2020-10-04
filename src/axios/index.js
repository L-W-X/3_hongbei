import ajax from './ajax'


//例子
export const reqCategoryList = () => ajax('/education/getIndexByWeb')

//cq_课程视频
export const reqLessonModule =() => ajax('/education/getCourse?_t=1601775553375&educationCourseId=10559&timestamp=1601775553375')