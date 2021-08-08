<template>
    <!-- 渲染有子级菜单路由 -->
    <a-sub-menu :key="menu.path">
        <template #title>
            <span class="anticon">
                <svg-icon :iconName="menu.meta && menu.meta.icon" className="aside-icon" color="#fff" />
            </span>
            <!-- <i class="icon icon-size-21" :class="menu.meta && menu.meta.icon"></i> -->
            <span>{{menu.meta && menu.meta.title}} </span>
        </template>

        <template v-if="menu.children.length">
            <template v-for="item in menu.children" >
                <template v-if="!item.hidden">
                    <!-- 不存在多层级子级 -->
                    <a-menu-item :key="item.path" v-if="!item.children">
                        <router-link :to="item.path">{{item.meta && item.meta.title}}</router-link>
                    </a-menu-item>
                    
                    <!-- 存在多层级子级:递归调用组件自身 -->
                    <Menu v-else :menu="item" :key="item.path"/>
                </template>
            </template>
        </template>
    </a-sub-menu>
</template>

<script>
export default {
    name:"Menu",
    props:{
        menu:{ //接收父组件传递的数字段
            type:Object,
            default:() => ({})
        }
    },
    setup(props){

    }
}
</script>

<style lang="scss" scoped>
.aside-menu{
    i.icon{
        margin-right: 5px;
        opacity: .6;

        .ant-menu-submenu-open{
            > div {
                i.icon{
                    opacity: 1;
                }
            }
        }
    }
}
</style>