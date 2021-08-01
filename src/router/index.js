import {createRouter, createWebHashHistory} from "vue-router";
// import Home from "../views/Home.vue"
const routes = [
    // {
    //     path:"/",
    //     name:"Home",
    //     component:Home
    // },

    // 登录
    {
        path:"/",
        name:"Login",
        component:()=>import("../views/account/Login.vue")
    },
    // 注册
    {
        path:"/register",
        name:"Register",
        component:()=>import("../views/account/Register.vue")
    },
    {
        path:"/about",
        name:"About",
        component:() => import ("../views/About.vue")
    },
    {
        path:"/news",
        name:"News",
        component:() => import ("../views/News.vue")
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