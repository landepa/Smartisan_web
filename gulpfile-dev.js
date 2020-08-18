console.log( '来到开发环境' );

// 加载模块
const { task, src, dest, watch, series, parallel } = require('gulp');
// 用于加载其他gulp插件
const load = require('gulp-load-plugins')();
// nodejs的del模块用于删除文件
const del = require('del');

// 删除dist目录
task('delDist', async () => {
    await del('./dist');
})

// 处理图片
task('img', async () => {
    src('./img/*.*')
        .pipe(dest('./dist/img'))
        .pipe(load.connect.reload())
})

// 处理css
task('style', async () => {
    src('./style/*.*')
        .pipe(dest('./dist/style'))
        .pipe(load.connect.reload())
})
// 处理js
task('script', async () => {
    src('./script/*.js')
        .pipe(dest('./dist/script'))
        .pipe(load.connect.reload())
})

// 处理html
task('html', async () => {
    src('./html/*.html')
        .pipe(dest('./dist/html'))
        .pipe(load.connect.reload())
})
// 处理html
task('json', async () => {
    src('./data/*.json')
        .pipe(dest('./dist/data'))
        .pipe(load.connect.reload())
})
// 监听文件变化
task('watch', async () => {
    watch('./img/*.*', series('img'));
    watch('./style/*.css', series('style'));
    watch('./script/*.js', series('script'));
    watch('./html/*.html', series('html'));
})

// 启动服务，自动刷新
task('connect', async () => {
    load.connect.server({
        root: './dist',
        livereload: true,
        port: 5500
    });
})

// 构建开发包
task('dev', series('delDist', 'img', 'style', 'script', 'html','json','connect', 'watch'))
