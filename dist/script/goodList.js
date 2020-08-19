
$(function(){
    console.log( '执行goodList.js中的命令' );
    
    /**
     * @description: 引入公共html
     * @param {type} 
     * @return {type} 
     */
    $(".header_wrap").load("header.html");
    $(".footer_wrap").load("footer.html");
    $(".title_wrap").load("title_nav.html");
/**
 * @description: 请求商品列表数据
 * @param {type} 
 * @return {type} 
 */

$('.goods_list').on('click','a',function(){
    localStorage.setItem('good_id',$(this).attr('good_id'));
    console.log( localStorage.getItem('good_id') );
})

});

$.get('../data/goodlist.json',function(json){
    console.log( json );
    var goodlist = '';
    $.each(json, function (index, item) {
        if(item.label){
            goodlist += `<li good_id="${item.id}" class="good_item">
                            <a good_id="${item.id}" href="./goodDetail.html"></a>
                            <img src="${item.imgUrl}" alt="">
                            <h3>${item.title}</h3>
                            <span>${item.description}</span>
                            <p><em>${item.priceNow}</em><del>${item.pricePast}</del></p>
                            <b>${item.label}</b>
                        </li>`;
        } else{
            goodlist += `<li class="good_item">
                            <a good_id="${item.id}" href="./goodDetail.html"></a>
                            <img src="${item.imgUrl}" alt="">
                            <h3>${item.title}</h3>
                            <span>${item.description}</span>
                            <p><em>${item.priceNow}</em><del>${item.pricePast}</del></p>
                        </li>`;
        }
    })
    $('.goods_list').append(goodlist);
    $('.goods_list li').hover(function () {
        let idx = $(this).index();
        let phrase = json[idx].phrase;
        $(this).find('span').css('color', '#d44d44').text(phrase);
    }, function () {
        let idx = $(this).index();
        let description = json[idx].description;
        $(this).find('span').css('color', '#666').text(description);
    })

    $('.goods_list').on('click','.gooditem',function(){
        localStorage.setItem('good_id',$(this).attr('good_id'))
    })
},'json')


