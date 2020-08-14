    var $app_tit = $('.app_tit');
    var $app_wrap = $('.app_wrap');

    var $head_cart = $('.head_cart');
    var $head_cart_empty = $('.head_cart_empty');

    var $search_as = $('.title_search_wrap a');
    var $search_ipt = $('.title_search_wrap input');

    var $title_lis = $('.title_nav_list li');
    var $tit_sec_container = $('.title_nav_sec_container');
    var $title_wrap = $('.title_wrap');

// header操作 
    /**
 * @description: 商城app下载 二维码 显示与隐藏
 */
    $app_tit.mouseenter(() => {
        console.log( 11 );
        $app_wrap.toggle()
    })
    $app_tit.mouseleave(() => {
        $app_wrap.toggle()
    })

    /**
     * @description: 购物车的隐藏与显示
     * @param {type} 
     * @return {type} 
     */
    $head_cart.mouseenter(() => {
        $head_cart_empty.toggle()
    })
    $head_cart.mouseleave(() => {
        $head_cart_empty.toggle()
    })

// 导航栏操作

/**
 * @description: 搜索框聚焦时a标签的显示与隐藏
 * @param {type} 
 * @return {type} 
 */
$search_ipt.focus(()=>{
    $search_as.toggle()
})
// TODO 搜索框
$search_ipt.blur(()=>{
    $search_as.toggle()
})

/**
 * @description: 二级菜单的显示与隐藏
 * @param {type} 
 * @return {type} 
 */
$title_lis.mouseenter(()=>{
    $tit_sec_container.stop()
    $tit_sec_container.slideDown();
})
$title_wrap.mouseleave(()=>{
    $tit_sec_container.stop()
    $tit_sec_container.slideUp();
})

