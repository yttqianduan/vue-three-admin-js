import { createApp } from 'vue'
import App from './App.vue'
import routes from "./router";//引入路由表


// 引入antd vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 引入语言配置
import VueI18n from "./language";

// 引入svg插件
import "vite-plugin-svg-icons/register";
import svgIcon from "./components/Svgicon/index.vue";

const app = createApp(App)
createApp(App)
    .use(routes)
    .use(Antd)
    .use(VueI18n)
    .component("svg-icon",svgIcon)
    .mount('#app')
    
// app.component("svg-icon",svgIcon)
