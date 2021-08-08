<template>
    <!-- <LayoutAside />
    <LayoutHeader />
    <LayoutMain /> -->

    <!-- 设置主页布局 -->
    <a-layout id="layout-main"> 
        <!-- 左侧导航 -->
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="255">
            <LayoutAside class="font-family fs-18" :collapsedImg="collapsed" />
        </a-layout-sider>

        <a-layout>
            <!-- 顶部 -->
            <a-layout-header style="background: #fff; padding: 0">
                <LayoutHeader @Collapsed="handlerCollapsed" />
            </a-layout-header>
            
            <!-- 核心内容区域 -->
            <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <LayoutMain />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import LayoutAside from "./components/aside/Aside.vue";
import LayoutHeader from "./components/Header.vue";
import LayoutMain from "./components/Main.vue";

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { reactive, toRefs } from '@vue/reactivity';
export default {
    name:"Layout",
    components:{
        LayoutAside,
        LayoutHeader,
        LayoutMain
    },

    setup(){
        const data = reactive({
            selectedKeys: ['1'],
            collapsed: JSON.parse(localStorage.getItem('collapsed')),//左侧导航显示隐藏
        });
        
        const handlerCollapsed = (value) => {
            const bool = !data.collapsed;
            data.collapsed = bool;
            localStorage.setItem("collapsed",bool)
        }

        return {
            ...toRefs(data),

            handlerCollapsed
        }
    },
}
</script>

<style lang="scss">
#layout-main{
    height: 100vh;
}
</style>