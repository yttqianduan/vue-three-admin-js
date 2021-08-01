import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [vue()]
// })

export default {
	plugins: [vue()],
	css: {//配置sass
		// css预处理器
		preprocessorOptions: {
			scss: {
				// additionalData: '@import "./src/styles/main.scss"';
				additionalData: `@import "./src/styles/main.scss";`
			}
		}
	}
}