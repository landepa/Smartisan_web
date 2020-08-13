console.log('执行index.js中的命令');


$(function () {
    // do something
    /**
 * @description: 商城app下载 二维码 显示与隐藏
 */
    $('.app_tit').mouseenter(() => {
        console.log(1);
        $('.app_wrap').toggle()
    })
    $('.app_tit').mouseleave(() => {
        $('.app_wrap').toggle()
    })
});