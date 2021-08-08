<template>
    <h1 id="logo">
        <img :class="collapsedImg?'collapsed':''" src="../../../../assets/logo.png" alt="前端 logo">
    </h1>
    <a-menu
        mode="inline"
        theme="dark"
        class="aside-menu"
        :inline-collapsed="data.collapsed"
        v-model:openKeys="data.openKeys"
        v-model:selectedKeys="data.selectedKeys"
        @click="selectMenu"
        @openChange="openMenu"
    >
        <!-- 循环路由表数据 -->
        <template v-for="(item,index) in routers" :key="index">
            <!-- 一级菜单：根据路由配置显示菜单名称 -->
            <template v-if="!item.hidden">
                <a-menu-item :key="item.path" v-if="hasOnlyChildren(item)">
                    <router-link :to="item.children[0].path">
                        <span class="anticon">
                            <svg-icon  :iconName="item.meta && item.meta.icon" className="aside-icon" color="#fff" />
                        </span>
                        <span>{{item.children[0].meta && item.children[0].meta.title}}</span>
                    </router-link>
                </a-menu-item>
            
                <!-- 渲染有子级菜单路由 -->
                <Menu v-else :menu="item" />
            </template>

        </template >
    </a-menu>
</template>

<script>
import { reactive } from '@vue/reactivity';

// 引入路由:获取路由所有配置
import { useRoute,useRouter } from "vue-router";

import Menu from "./Menu.vue";
export default {
    name:"Aside",
    props:{
        collapsedImg:{
            type:Boolean,
            default:false
        }
    },
    components:{
        Menu,
    },
    setup(props){
        const { options } = useRouter();//获取路由配置表
        const routers = options.routes;//路由

        // 数据
        const data = reactive({
            selectedKeys: localStorage.getItem("selectedKeys") ? [localStorage.getItem("selectedKeys")] : [],//默认选中菜单
            openKeys: localStorage.getItem("openKeys") ? JSON.parse(localStorage.getItem("openKeys")) : [], //默认打开的菜单：根据绑定的key配置
            // logo:require("../../../../assets/image/logo.png"),
        });
        
        // 选择菜单
        const selectMenu = ({ item,key,keyPath })=>{
            data.selectedKeys = [key];
            localStorage.setItem("selectedKeys",key);//将选中的存储
        };

        // 展开/关闭菜单
        const openMenu = (openKeys) => {
            data.openKeys = openKeys;
            localStorage.setItem("openKeys",JSON.stringify(openKeys));//将打开菜单存储
        }

        // 检测是否只有一个子路由
        const hasOnlyChildren = (data) => {
            if(!data.children){
                return false;
            }
            // 过滤一层的子级路由 //过滤 hidden字段路由
            const routers = data.children.filter(item => item.hidden ? false : true);  
            if(routers.length === 1){ return true; }
            return false;

        }
        return {
            data,
            routers,

            selectMenu,
            openMenu,
            hasOnlyChildren,
        }
    }
}
</script>

<style scoped lang="scss">
#logo{
    padding: 24px 0 20px;
    border-bottom: 1px solid #000;
    text-align: center;
    img{
        display: inline-block;
        width: 100px;
        height: 100px;
    }

    .collapsed{
        display: inline-block;
        width: 40px;
        height: 40px;
    }
}
.aside-menu{
    i.icon{
        margin-right: 5px;
        opacity: .6;
    }
    
    .ant-menu-item-selected{
        i.icon{
            opacity: 1;
        }
    }
}
</style>