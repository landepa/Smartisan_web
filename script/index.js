// 首页js操作
"use strict";
$(function () {//ready
    $(".header_wrap").load("header.html");
    $(".footer_wrap").load("footer.html");
    $(".title_wrap").load("title_nav.html");

    console.log('执行index.js中的命令');

/**
 * @description: 轮播图
 * @param {type} 
 * @return {type} 
 */    
var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'fade',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: true, //等同于以下设置
    /*autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },*/
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: 'my-bullet-active',
    },
})








});