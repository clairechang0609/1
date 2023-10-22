import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'

// https://vitejs.dev/config/
export default defineConfig((mode) => {
	process.env = {...process.env, ...loadEnv(mode, process.cwd())};

	return {
		plugins: [
			vue(),
			Pages({
				onRoutesGenerated: routes => (generateSitemap({
					routes,
					readable: true
				}))
			})
		],
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
