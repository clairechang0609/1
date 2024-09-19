export function getImageUrl(imagePath) {
    // 在正式環境下使用 .webp，否則保持原格式
    return process.env.NODE_ENV === 'production'
        ? imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
        : imagePath;
}
