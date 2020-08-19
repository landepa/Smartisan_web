$(function () {
    console.log('执行goodDetail.js中的命令');

    /**
     * @description: 引入公共html
     * @param {type} 
     * @return {type} 
     */
    $(".header_wrap").load("header.html");
    $(".footer_wrap").load("footer.html");
    $(".title_wrap").load("title_nav.html");


    var data_list;
    var good_id = localStorage.getItem('good_id');
    console.log( good_id );


    $.get('../data/detail.json', function (json) {
        data_list = json;
        console.log(data_list);
        $.each(json, function (index, item) {
            if (json[index].id === good_id) {
                console.log(item);
                var mini_list = '';
                var normal_list = '';
                var info_list = '';
                // 渲染左侧小图
                $.each(item.img_list, function (idx, list) {
                    mini_list += `<div class="mini_img">
                                    <img src="${list.img}" alt="">
                                </div>`;
                    normal_list += `<img src="${list.img}" alt="">`;
                })
                $.each(item.info_list,function(idx,list){
                    info_list += `<img src="${list.img}" alt="">`;
                })
                // 渲染元素
                $('.mini_list').append(mini_list);
                $('.normal_wrap').append(normal_list);
                $('.max_img').append(normal_list);
                $('.img_list').append(info_list);
                $('.tit_wrap h2').text(item.title);
                $('.tit_description').text(item.description);
                $('.price_wrap h2').text(item.priceNow);
                $('.price_wrap span').text(item.pricePast);
                if(!item.label){
                    $('.detail_discount b').css('display','none');
                } else{
                    $('.detail_discount b').text(item.label);
                }
                $('.detail_discount span').text(item.phrase);

                $('.good_info b').text(item.title);
                $('.cart_r b').text(item.priceNow);
                $('.cart_r del').text(item.pricePast);

            }
        })
        
        var $normal_imgs = $('.normal_wrap img');
        var $max_imgs = $('.max_wrap img');
        

        var $normal_wrap = $('.normal_wrap');
        var $mask = $('.mask');
        var $max_wrap = $('.max_wrap');
        var $max_img = $('.max_img');

        $('.mini_list').on('click', '.mini_img', function () {
            var idx = $(this).index();
            cur_idx = idx;
            console.log( 1 );
            $(this).siblings().removeClass('hover')
            $(this).addClass('hover')
            $normal_imgs.removeClass('pos_img')
            $max_imgs.removeClass('pos_img')
            $normal_imgs.eq(idx).addClass('pos_img')
            $max_imgs.eq(idx).addClass('pos_img')
        })

        /**
         * @description: 放大镜
         */
        $normal_wrap.hover(()=>{
            $mask.show();
            $max_wrap.show();
        },()=>{
            $mask.hide();
            $max_wrap.hide();
        })

        $('.detail_l').on('mousemove',$normal_wrap,function(e){
            console.log( e );
            var maskX = e.clientX - $normal_wrap.offset().left - $mask.width() / 2;
            var maskY = e.clientY - $normal_wrap.offset().top - $mask.height() / 2;
            console.log( maskX );

            if(maskX <= 0){
                maskX = 0;
            }
            if(maskX >= $normal_wrap.width() - $mask.width()){
                maskX = $normal_wrap.width() - $mask.width();
            }
            if(maskY <= 0){
                maskY = 0;
            }
            if(maskY >= $normal_wrap.height() - $mask.height()){
                maskY = $normal_wrap.height() - $mask.height();
            }

            $mask.css('left',maskX);
            $mask.css('top',maskY);

            var scaleX = maskX/($normal_wrap.width() - $mask.width());
            var scaleY = maskY/($normal_wrap.height() - $mask.height());

            var maxImgX = scaleX*($max_img.width() - $max_wrap.width());
            var maxImgY = scaleY*($max_img.height() - $max_wrap.height());

            $max_img.css('left',-maxImgX);
            $max_img.css('top',-maxImgY);
        })
        // $normal_wrap.mousemove((e)=>{
            
        // })


    }, 'json');

})