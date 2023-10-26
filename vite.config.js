import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig((mode) => {
	process.env = {...process.env, ...loadEnv(mode, process.cwd())};

	return {
		plugins: [vue()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@import "@/assets/scss/components/_color.scss";
						@import "@/assets/scss/components/_grid.scss";
						@import "@/assets/scss/components/_mixin.scss";
						@import "@/assets/scss/components/_typography.scss";
					`
				}
			}
		}
	};
})
