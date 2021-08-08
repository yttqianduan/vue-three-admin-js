import {createRouter, createWebHashHistory} from "vue-router";
// import Home from "../views/Home.vue"
const routes = [

    // 登录
    {
        path:"/",
        name:"Login",
        hidden:true,//左侧栏隐藏
        meta:{
            title:"登录",
        },
        component:()=>import("../views/account/Login.vue"),
    },
    // 注册
    {
        path:"/register",
        name:"Register",
        hidden:true,
        meta:{
            title:"注册"
        },
        component:()=>import("../views/account/Register.vue"),
    },
    // 重置密码
    {
        path:"/forget",
        name:"Forget",
        hidden:true,
        meta:{
            title:"重置密码"
        },
        component:()=>import("../views/account/Forget.vue"),
    }, 

    // 管理后台-首页
    {
        path:"/index",
        name:"Index",
        meta:{
            title:"首页",
            icon:"home"
        },
        component:() => import ("../views/layout/Index.vue"),
        children:[
            {
                path:"/home",
                name:"Home",
                meta:{
                    title:"首页",
                    icon:"home"
                },
                component:() => import ("../views/home/index.vue"),
            }
        ]
    },

    // 管理后台-管理总台
    {
        path:"/adminIndex",
        name:"AdminIndex",
        meta:{
            title:"管理总台",
            icon:"console"
        },
        component:() => import ("../views/layout/Index.vue"),

        // 管理总台子路由
        children:[
            {
                path:"/role",
                name:"Role",
                meta:{
                    title:"角色管理"
                },
                component:() => import ("../views/admin/Role.vue"),
            },
            {
                path:"/user",
                name:"User",
                meta:{
                    title:"用户管理",
                },
                component:() => import ("../views/admin/User.vue")
            },
        ],
    },

    // 管理后台- 会员管理
    {
        path:"/member",
        name:"Member",
        meta:{
            title:"会员管理",
            icon:"member"
        },
        component:() => import ("../views/layout/Index.vue"),
        children:[],
    },
    // 管理后台-产品管理
    {
        path:"/product",
        name:"Product",
        meta:{
            title:"产品管理",
            icon:"product"
        },
        component:() => import ("../views/layout/Index.vue"),
        children:[],
    },

    // 管理后台-信息管理
    {
        path:"/news",
        name:"News",
        meta:{
            title:"信息管理",
            icon:"info"
        },
        component:() => import ("../views/layout/Index.vue"),
        children:[],
    }
]

const router = createRouter({
    /**
     * createWebHashHistory：带#号的哈希路由  
     * createWebHistory：不带#号的路由
     * */ 
    history:createWebHashHistory(),
    routes
});

export default router;