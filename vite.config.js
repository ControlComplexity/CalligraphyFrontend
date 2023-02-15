//defineConfig 是助手函数,给vscode实现代码提示
import { defineConfig } from 'vite'
//vue的插件,让项目支持vue
import supportVue from '@vitejs/plugin-vue'
//path.resolve 是node.js的对象,用于解释返回真实全路径
import { resolve } from 'path'
//__dirname是系统变量,返回的是当前项目的目录
import viteCompression from 'vite-plugin-compression'
  
const currentSrcPath = resolve(__dirname, 'src')
const currentImagePath = resolve(__dirname, 'src/assets/image')
const currentComponentPath = resolve(__dirname, 'src/components')
const currentViewComponentPath = resolve(__dirname, 'src/views')

export default defineConfig({
	plugins: [supportVue(), viteCompression()],
	resolve: {
		alias: {
			'@': currentSrcPath,
			'@image': currentImagePath,
			'@component': currentComponentPath,
			'@view': currentViewComponentPath
		}
	},
	productionSourceMap:false,
	productionGzip:true,
	optimizeDeps: {
		//include:[]
		inclue: ['axios', 'mockjs', 'lodash', 'echarts']
	},
	build: {
		target: 'modules',
		outDir: 'dist',
		assetsDir: 'static',
		minify: 'terser',
		output: {
			comments: true,
		}
	},
	server: {
		port: 3001,
		cors: true,
		open: false,
		proxy: {
			'/api': {
				target: 'http://101.43.39.188/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
