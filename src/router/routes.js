const Home =()=>import("@/views/Home")
const BakingRing =()=>import("@/views/BakingRing")
const Personal =()=>import("@/views/Personal")
const QA =()=>import("@/views/QA")


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
]