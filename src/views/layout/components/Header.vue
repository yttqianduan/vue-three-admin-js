<template>
    <div id="header">
        <div class="collapsed-button" @click="collapsedButton">
            <svg-icon iconName="collapsed" class="collapsed-svg"/>
        </div>
        <div class="header-menu">
            <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent>
                    <img class="user-img" src="../../../assets/logo.png" alt="">
                </a>
                <template #overlay>
                <a-menu>
                    <a-menu-item key="0">
                        <div class="menu-item fs-14 font-family">
                            18770035996
                        </div>
                    </a-menu-item>
                    
                    <a-menu-divider />

                    <a-menu-item key="1">
                        <div class="menu-item menu-lang fs-14 font-family">
                            <span 
                                v-for="item in data.lang" 
                                :key="item.value" 
                                @click="toggleLang(item.value)"
                                :class="{'current':data.lang_current == item.value}"
                            >
                                {{item.label}}
                            </span>
                        </div>
                    </a-menu-item>

                    <a-menu-divider />

                    <a-menu-item key="3">
                        <div class="menu-item fs-14 font-family">
                            {{ $t("header_menu.logout") }}
                        </div>
                    </a-menu-item>
                </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>

<script>
import { getCurrentInstance } from "vue"
import { reactive, toRefs } from '@vue/reactivity';

// 引入语言
import { useI18n } from "vue-i18n";
export default {
    name:"Header",
    setup(){
        const { emit } = getCurrentInstance();
        

        // 扩展语言
        const { locale } = useI18n({ useScope: 'global' });

        // 定义数据
        const data = reactive({
            lang:[
                { label:"中文",value:"ch" },
                { label:"英文",value:"en" },
            ],
            lang_current:"ch",
        });

        // 使用i18n切换语言
        const toggleLang = (lang) => {
            locale.value = lang;
            data.lang_current = lang
        };
        
        // 触发父组件方法，传递数据
        const collapsedButton = ()=>{
            emit("Collapsed")
        }

        return {
            data,

            toggleLang,
            collapsedButton
        }
    }
}
</script>

<style lang="scss" scoped>
#header{
    padding: 0 20px;
    height: 64px;
}

.header-menu{
    float: right;
    margin-top: 15px;

    .ant-dropdown-link{

        .user-img{
            width: 30px;
            height: 30px;
        }
    }
}


.menu-item{
    padding: 0 20px;
    color: #333;
}
.menu-lang{
    color: #aeaeae;
    span{
        margin-right: 10px;
    }

    .current{
        color: #333;
    }
}
.collapsed-button{
    float: left;
    cursor: pointer;
    font-size: 30px;
}
</style>