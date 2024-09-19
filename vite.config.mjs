import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { lstatSync, readdirSync, existsSync } from 'fs';

// 遞迴查找目錄中的所有圖片
const getImagesFromDir = (dir) => {
    let results = [];
    const files = readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = lstatSync(filePath);
        
        if (stat.isDirectory()) {
            results = results.concat(getImagesFromDir(filePath)); // 遞迴查找子目錄
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            results.push(filePath);
        }
    }

    return results;
};

// https://vitejs.dev/config/
export default defineConfig((mode) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        plugins: [
            vue(),
            {
                name: 'webp-converter',
                apply: 'build',
                async generateBundle() {
                    const imagemin = (await import('imagemin')).default;
                    const imageminWebp = (await import('imagemin-webp')).default;

                    const imgDirPath = 'public/image';
                    
                    // 檢查目錄是否存在
                    if (!existsSync(imgDirPath)) {
                        console.warn(`Directory ${imgDirPath} does not exist. Skipping image processing.`);
                        return;
                    }

                    // 取得所有圖片
                    const images = getImagesFromDir(imgDirPath);

                    const maxConcurrent = 5;
                    let index = 0;

                    const processNext = async () => {
                        if (index >= images.length) return;

                        const inputFilePath = images[index++];
                        
                        try {
                            await imagemin([inputFilePath], {
                                destination: path.dirname(inputFilePath), // 輸出文件在原目錄下
                                plugins: [
                                    imageminWebp({
                                        quality: 75
                                    })
                                ]
                            });
                        } catch (error) {
                            console.error(error);
                        }

                        await processNext();
                    };

                    const tasks = Array.from({ length: maxConcurrent }, processNext);
                    await Promise.all(tasks);
                }
            }
        ],
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
});
