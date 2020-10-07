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


