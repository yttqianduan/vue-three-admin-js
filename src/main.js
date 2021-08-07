import { createApp } from 'vue'
import App from './App.vue'
import routes from "./router";//引入路由表


// 引入antd vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 引入语言配置
import VueI18n from "./language"

createApp(App)
    .use(routes)
    .use(Antd)
    .use(VueI18n)
    .mount('#app')
