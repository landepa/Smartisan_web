// 首页js操作
"use strict";






$(function () {//ready

    console.log('执行index.js中的命令');


    $(".header_wrap").load("header.html");
    $(".footer_wrap").load("footer.html");
    $(".title_wrap").load("title_nav.html");



    /**
     * @description: 加载热门商品列表
     * @param {type} 
     * @return {type} done
     */
    $.get('../data/hotlist.json', function(json) {
        console.log(json);
        console.log(11);
        var hotlist = '';
        $.each(json, function (index, item) {
            hotlist += `<li>
                                <a href=""></a>
                                <img src="${item.imgUrl}" alt="">
                                <h3>${item.title}</h3>
                                <span>${item.description}</span>
                                <p><em>${item.priceNow}</em><del>${item.pricePast}</del></p>
                                <b>${item.label}</b>
                            </li>`;
        })
        $('.hot_list').append(hotlist);
        $('.hot_list li').hover(function () {
            let idx = $(this).index();
            let phrase = json[idx].phrase;
            $(this).find('span').css('color', '#d44d44').text(phrase);
        }, function () {
            let idx = $(this).index();
            let description = json[idx].description;
            $(this).find('span').css('color', '#666').text(description);
        })
    }, 'json');

    // console.log( json );

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

    /**
     * @description: 热门商品列表 切换
     * @param {type} 
     * @return {type} 
     */

    $('.hotPrev').click(
        function () {
            if (!$(this).is('.hot_negative')) {
                return false;
            }
            $('.hot_list_wrap').animate({scrollLeft:'0'});
            $(this).removeClass('hot_negative');
            $('.hotNext').addClass('hot_negative');
        }
    )

    $('.hotNext').click(
        function () {
            if (!$(this).is('.hot_negative')) {
                return false;
            }
            $('.hot_list_wrap').animate({scrollLeft:'1220px'});
            $(this).removeClass('hot_negative');
            $('.hotPrev').addClass('hot_negative');
        }
    )
    if(localStorage.getItem('user')){
        var user = localStorage.getItem('user');

        // alert('欢迎您，'+ user)
        localStorage.setItem('flag','1')
        user = true;
    }



});