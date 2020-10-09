const Home =()=>import("@/views/Home")
const BakingRing =()=>import("@/views/BakingRing")
const Personal =()=>import("@/views/Personal")
const QA =()=>import("@/views/QA")
const university =()=>import("@/views/VideoSchool")
const Lesson =()=>import("@/views/Lesson") //cq_课程视频
// <<<<<<< HEAD
// <<<<<<< HEAD
// =======
const classIfication =()=>import("@/views/ClassIfIcation")
const skill =()=>import("@/views/skill")
// >>>>>>> f0be690a553fa6b09c50c2f0aeb7a2b3a8459068


const BakingFollow =()=>import("@/views/BakingRing/BakingFollow")   //fc-烘焙圈-关注
const BakingNew =()=>import("@/views/BakingRing/BakingNew")         //fc-烘焙圈-最新
const BakingTalent =()=>import("@/views/BakingRing/BakingTalent")   //fc-烘焙圈-达人

const Essence =()=>import("@/views/QA/Essence")             //fc-问答-精华问题
const New =()=>import("@/views/QA/New")                     //fc-问答-最新问题
const Hot =()=>import("@/views/QA/Hot")                     //fc-问答-最热问题

// =======
const newcourse = ()=>import("@/views/NewCourse")
// const CourseInduce = ()=>import("@/views/NewCourse/CourseInduce")
// const CourseList = ()=>import("@/views/NewCourse/CourseList")
// const StudentWork = ()=>import("@/views/NewCourse/StudentWork")
// >>>>>>> nyt_dev

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
        
        name:'university',
        path:'/university',
        component: university,
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
    // >>>>>>> f0be690a553fa6b09c50c2f0aeb7a2b3a8459068
        },
// <<<<<<< HEAD
    {
        
        name:'newcourse',
        path:'/newcourse',
        component: newcourse,
        meta:{
            isHideFooter: true,
        },
        // children:[
        //     {path:"/newcourse/CourseInduce",
        //      component:CourseInduce,
        //      meta:{
        //         isHideFooter: true,
               
        //     }
        //     },
        //     {path:"/newcourse/CourseList",
        //      component:CourseList,
        //      meta:{
        //         isHideFooter: true,
               
        //     }
        //     },
        //     {path:"/newcourse/StudentWork",
        //      component:StudentWork,
        //      meta:{
        //         isHideFooter: true,
               
        //     }
        //     }
        // ]
        
// =======
//     //.....................wkx................................
//     {
//         name:'classIfication',
//         path:'/classIfication',
//         component:classIfication,
//         meta:{
//             isHideFooter: true,
//         }
//     },
//     {
//         name:'skill',
//         path:'/skill',
//         component:skill,
//         meta:{
//             isHideFooter: true,
//         }
// // >>>>>>> f0be690a553fa6b09c50c2f0aeb7a2b3a8459068
//     }
}
]