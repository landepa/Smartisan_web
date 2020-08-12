// 关于gulp的操作写在这里

// 判断需要执行的环境

// console.log( process );// {...}
// console.log( process.argv[2] );// dev / build
const mode = process.argv[2];

console.log( mode );

// 根据输入的命令加载执行不同的配置文件
switch (mode) {
    case 'dev':
        require('./gulpfile-dev');//开发环境
        break;
    case 'build':
        require('./gulpfile-build');//生产环境
        break;
}