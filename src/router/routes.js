const Home =()=>import("@/views/Home")
const BakingRing =()=>import("@/views/BakingRing")
const Personal =()=>import("@/views/Personal")
const QA =()=>import("@/views/QA")

const BakingFollow =()=>import("@/views/BakingRing/BakingFollow")   //fc-烘焙圈-关注
const BakingNew =()=>import("@/views/BakingRing/BakingNew")         //fc-烘焙圈-最新
const BakingTalent =()=>import("@/views/BakingRing/BakingTalent")   //fc-烘焙圈-达人

const Essence =()=>import("@/views/QA/Essence")             //fc-问答-精华问题
const New =()=>import("@/views/QA/New")                     //fc-问答-最新问题
const Hot =()=>import("@/views/QA/Hot")                     //fc-问答-最热问题


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
        },
        children:[     //fc-烘焙圈子路由
            {
                name:'follow',
                path:'follow',
                component:Personal,
            },
            {
                name:'new',
                path:'/',
                component:BakingNew,
                meta:{
                    isHideFooter: false,
                }
            },
            {
                name:'talent',
                path:'talent',
                component:BakingTalent,
                meta:{
                    isHideFooter: false,
                }
            }
        ]
    },
    {
        name:'qa',
        path:'/qa',
        component: QA,
        meta:{
            isHideFooter: false,
            isActive:2
        },
        children:[     //fc-问答子路由
            {
                name:'essence',
                path:'essence',
                component:Essence,
                meta:{
                    isHideFooter: false,
                }
            },
            {
                name:'New',
                path:'/',
                component:New,
                meta:{
                    isHideFooter: false,
                }
            },
            {
                name:'hot',
                path:'hot',
                component:Hot,
                meta:{
                    isHideFooter: false,
                }
            }
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
]