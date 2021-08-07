<template>
     <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="data.collapsed"
      v-model:openKeys="data.openKeys"
      v-model:selectedKeys="data.selectedKeys"
    >
        <a-menu-item key="1">
            <span>菜单 1</span>
        </a-menu-item>
        <a-menu-item key="2">
            <span>Option 2</span>
        </a-menu-item>
        <a-menu-item key="3">
            <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">

            <template #title>Navigation One</template>
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name:"Aside",
    setup(){
        const data = reactive({
            selectedKeys: ['1'],//默认选中菜单
            openKeys: ['sub1'], //打开的菜单
        });


        return {
            data,
        }
    }
}
</script>

<style>

</style>