import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [vue()]
// })


export default  {
	plugins: [
		vue(),
		viteSvgIcons({
			// 配置路劲在你的src里的svg存放文件
			iconDirs: [path.resolve(process.cwd(), 'src/assets/svg/')],
			symbolId: 'icon-[name]',
		  }),
	],
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