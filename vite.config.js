import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig((mode) => {
	process.env = {...process.env, ...loadEnv(mode, process.cwd())};

	return {
		plugins: [vue()],
		base: process.env.NODE_ENV === 'production' ? '/daniel-work/' : './',
		publicDir: './public',
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/app.scss";'
				}
			}
		}
	};
})
