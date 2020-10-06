const Home =()=>import("@/views/Home")
const BakingRing =()=>import("@/views/BakingRing")
const Personal =()=>import("@/views/Personal")
const QA =()=>import("@/views/QA")
const university =()=>import("@/views/VideoSchool")
const newcourse = ()=>import("@/views/NewCourse")
// const CourseInduce = ()=>import("@/views/NewCourse/CourseInduce")
// const CourseList = ()=>import("@/views/NewCourse/CourseList")
// const StudentWork = ()=>import("@/views/NewCourse/StudentWork")

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
        meta:{
            isHideFooter: false,
            isActive:1
        }
    },
    {
        name:'qa',
        path:'/qa',
        component: QA,
        meta:{
            isHideFooter: false,
            isActive:2
        }
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
        
        name:'newcourse',
        path:'/newcourse',
        component: newcourse,
        meta:{
            isHideFooter: true,
           
        }
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
        
    }
]