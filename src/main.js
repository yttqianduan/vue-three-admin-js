import { createApp } from 'vue'
import App from './App.vue'
import routes from "./router";//引入路由表

// 引入antd vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App)
    .use(routes)
    .use(Antd)
    .mount('#app')
