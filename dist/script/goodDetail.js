$(function(){
    console.log( '执行goodDetail.js中的命令' );
    
    /**
     * @description: 引入公共html
     * @param {type} 
     * @return {type} 
     */
    $(".header_wrap").load("header.html");
    $(".footer_wrap").load("footer.html");
    $(".title_wrap").load("title_nav.html");

    console.log( localStorage.getItem('good_id') );
})