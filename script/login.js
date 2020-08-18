$(function () {

  $phone_input = $('.phone_input');
  $pass_input = $('.pass_input');
  $checkbox = $('.auto_input');
  $login_btn = $('.login_btn');
  $logout_btn = $('.logout_btn');

  var out;
  if(localStorage.getItem('user')){
    var user = localStorage.getItem('user');
    var pass = localStorage.getItem('user');
    alert('尊敬的 '+ user + '，您已经登录');
    $phone_input.val(user);
    $pass_input.val(pass);
    $phone_input.attr('disabled','diasbled');
    $pass_input.attr('disabled','diasbled');
    $login_btn.css('display', 'none');
    $logout_btn.css('display', 'block');
  }
  $('.logout_btn').click(function(){
    localStorage.clear();
    location.reload(); 
  })
  var phone_val, pass_val;
  $phone_input.blur(function () {
    let val = $(this).val();
    var phone_reg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
    console.log(val);
    if (!phone_reg.test(val) && val) {
      alert('请输入正确的手机号！')
      return;
    }
    phone_val = val;
  })
  $pass_input.on('input', function () {
    let val = $(this).val();
    var pass_reg = /^[a-zA-Z\d_]{8,}$/;
    console.log(val);
    if (val && phone_val) {
      $login_btn.addClass('active')
      $login_btn.prop('disabled', '')
    } else {
      $login_btn.removeClass('active')
      $login_btn.attr('disabled', 'disabled')
    }
  })
  $login_btn.click(function () {
    if(!out){
      localStorage.setItem('user',phone_val);
      localStorage.setItem('pass',pass_val);
      console.log( localStorage.getItem('user') );
      window.location.href='../html/index.html';
      alert('登录成功！点击确定 跳转到商城首页')
      console.log(11);
    }
    
  })


});