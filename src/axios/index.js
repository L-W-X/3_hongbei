import ajax from './ajax'


//例子
// export const reqCategoryList = () => ajax('/education/getIndexByWeb')


export const reqCategory_fc=()=> ajax('/feed/getCategory')
export const reqByLimit_fc=()=> ajax('community/getByLimit?&pageSize=99&all=true&isShow=4')
export const reqNew_fc=()=> ajax('v2/feed/getNew?&pageSize=10&all=true')
export const reqMasterNew_fc=()=> ajax('v2/feed/getMasterNew?&pageSize=10&all=true')
export const QaNew_fc=()=> ajax('question/getNew?&pageSize=10&all=true')
export const QaHot_fc=()=> ajax('question/getHot?pageSize=10&all=true')
export const QaEssence_fc=()=> ajax('question/getEssence?&pageSize=10&all=true')


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

/*******************************************获取分类信息界面**************************************** */
//获取分类信息界面
export const reqClassIfication_wkx=()=>ajax.get('/classify/get')
//right
export const reqClass_wkx=()=>ajax.get('/classify/getRecommend')
//
export const reqSkill_wkx=()=>ajax.get('/education/getNewbieGuide',{
    params:{
        type: type
    }
})
//
export const reqVideo_wkx=(keyword="keyword",sort,pageIndex,pageSize=10,)=>ajax.get('/search/getMoreRecipe',{
    params:{
       
        pageIndex,
        pageSize,
        keyword,
        sort
    }
})
//视频search/getMoreCourse
export const reqCourse_wkx=(pageIndex=0,pageSize=10,keyword="keyword")=>ajax.get('/search/getMoreCourse',{
    params:{
        
        pageIndex:pageIndex,
        pageSize:pageSize,
        keyword:keyword
    }
})