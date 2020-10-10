const Home =()=>import("@/views/Home")
const BakingRing =()=>import("@/views/BakingRing")
const Personal =()=>import("@/views/Personal")
const QA =()=>import("@/views/QA")
const university =()=>import("@/views/VideoSchool")
const seemore =()=>import("@/views/SeeMore")
const search =()=>import("@/views/Search")
const searchlive =()=>import("@/views/SearchLive")
const Lesson =()=>import("@/views/Lesson") //cq_课程视频
const HomeWork =()=>import("@/views/HomeWork") //cq_学员作业
const classIfication =()=>import("@/views/ClassIfIcation")
const skill =()=>import("@/views/skill")
const BakingFollow =()=>import("@/views/BakingRing/BakingFollow")   //fc-烘焙圈-关注
const BakingNew =()=>import("@/views/BakingRing/BakingNew")         //fc-烘焙圈-最新
const BakingTalent =()=>import("@/views/BakingRing/BakingTalent")   //fc-烘焙圈-达人
const BakingDrafts =()=>import("@/views/BakingRing/BakingDrafts")   //fc-烘焙圈-草稿箱
const BakingNewAndHot =()=>import("@/views/BakingRing/BakingNewAndHot")   //fc-烘焙圈-tag标签点击之后的页面
const Baking_hot =()=>import("@/views/BakingRing/BakingNewAndHot/Baking_hot")  //BakingNewAndHot下的最热   fc
const Baking_new =()=>import("@/views/BakingRing/BakingNewAndHot/Baking_new")  //BakingNewAndHot下的最新   fc

const Essence =()=>import("@/views/QA/Essence")             //fc-问答-精华问题
const New =()=>import("@/views/QA/New")                     //fc-问答-最新问题
const Hot =()=>import("@/views/QA/Hot")                     //fc-问答-最热问题


const newcourse = ()=>import("@/views/NewCourse")  //nyt-新手教程
const dish = ()=>import("@/views/NewCourse/dish") //nyt-详情页
const buy = ()=>import("@/components/buy") //nyt-详情页



export default[
    {
        name:'home',
        path:'/',
        component: Home,
        meta:{
            isHideFooter: false,
            isActive:0
        }
    },
    {
        name:"bakingnewandhot",    //fc-烘焙圈内的最新最热
        path:"/bakingnewandhot",
        component:BakingNewAndHot,
        children:[
            {
                name:'baking-hot',
                path:'baking-hot',
                component:Baking_hot,
                meta:{
                    isHideFooter:true
                }
            },
            {
                name:'baking-new',
                path:'baking-new',
                component:Baking_new,
                meta:{
                    isHideFooter:true
                }
            },
            {
                path:'',redirect: {name:'baking-new'},
            },
        ]
        
    },
    {
        name:"backingdrafts",    //fc-烘焙圈内的草稿箱
        path:"/backingdrafts",
        component:BakingDrafts,
        meta:{
            isHideFooter:true
        }
    },
    {
        name:'bankingring',
        path:'/bankingring',
        component: BakingRing,
       
        children:[     //fc-烘焙圈子路由
            {
                name:'follow',
                path:'follow',
                component:Personal,
                meta:{
                    isHideFooter: false,
                    isActive:1
                }
            },
            {
                name:'new',
                path:'new',
                component:BakingNew,
                meta:{
                    isHideFooter: false,
                    isActive:1
                }
            },
            
            {
                name:'talent',
                path:'talent',
                component:BakingTalent,
                meta:{
                    isHideFooter: false,
                    isActive:1
                }
            },
            {
                path:'',redirect: {name:'new'},
            },
        ]
    },
    {
        name:'qa',
        path:'/qa',
        component: QA,
        
        children:[     //fc-问答子路由
            {
                name:'essence',
                path:'essence',
                component:Essence,
                meta:{
                    isHideFooter: false,
                    isActive:2
                }
            },
            {
                name:'New',
                path:'New',
                component:New,
                meta:{
                    isHideFooter: false,
                    isActive:2
                }
            },
            {
                name:'hot',
                path:'hot',
                component:Hot,
                meta:{
                    isHideFooter: false,
                    isActive:2
                }
            },
            {
                path:'',redirect: {name:'New'},
            },
        ]
    },
    {
        name:'personal',
        path:'/personal',
        component: Personal,
        meta:{
            isHideFooter: false,
            isActive:3
        }
    },
    {
        
        name:'dish',
        path:'/dish',
        component: dish,
        meta:{
            isHideFooter: true,
           
        }
    },
    {
        name:'seemore',
        path:'/seemore',
        component: seemore,
        meta:{
            isHideFooter: true,
           
        }  
    },
    {
        name:'search',
        path:'/search',
        component: search,
        meta:{
            isHideFooter: true,
        }

    },
    {
        name:'searchlive',
        path:'/search/live/:keyword',
        component: searchlive,
        meta:{
            isHideFooter: true,
        }
    },
    
    {
        //cq_课程视频
        name:'lesson',
        path:'/lesson',
        component:Lesson,
        meta: { 
            isHideFooter: true
         }
    },
    {
        //cq_学员作业
        name:'homeWork',
        path:'/university/dishrank', //
        component:HomeWork,
        meta: { 
            isHideFooter: true
         }
    },
        //.....................wkx................................
        {
            name:'classIfication',
            path:'/classIfication',
            component:classIfication,
            meta:{
                isHideFooter: true,
            }
        },
        {
            name:'skill',
            path:'/skill',
            component:skill,
            meta:{
                isHideFooter: true,
            }
 
        },
        //.....................nyt................................
    {
        
        name:'newcourse',
        path:'/newcourse',
        component: newcourse,
        meta:{
            isHideFooter: true,
        },
       
    },
    {
        
        name:'dish',
        path:'/dish',
        component: dish,
        meta:{
            isHideFooter: true,
        },
       
    },
    {
        
        name:'buy',
        path:'/buy',
        component: buy,
        meta:{
            isHideFooter: true,
        },
       
    },
]