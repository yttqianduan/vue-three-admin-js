// 引入语言切换插件
import { createI18n } from 'vue-i18n';
import ch from "./ch.js";
import en from "./en.js";
const i18n = createI18n({
    locale:"en",//默认语言
    
    messages:{
        ch,
        en,
    }
})

export default i18n;