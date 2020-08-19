$(function () {

  $phone_input = $('.phone_input');
  $pass_input = $('.pass_input');
  $checkbox = $('.auto_input');
  $login_btn = $('.login_btn');
  $logout_btn = $('.logout_btn');
  $phone_err = $('.phone_err');
  $pass_err = $('.pass_err');
  $auto_input = $('.auto_input')

  var out;
  if (localStorage.getItem('user')) {
    var user = localStorage.getItem('user');
    var pass = localStorage.getItem('pass');
    alert('尊敬的 ' + user + '，您已经登录');
    $phone_input.val(user);
    $pass_input.val(pass);
    $phone_input.attr('disabled', 'diasbled');
    $pass_input.attr('disabled', 'diasbled');
    $login_btn.css('display', 'none');
    $logout_btn.css('display', 'block');
  }
  $('.logout_btn').click(function () {
    localStorage.clear();
    location.reload();
  })
  var phone_val, pass_val;

  $phone_input.on('input', function () {
    phone_val = $(this).val();
    console.log(phone_val);
    $phone_err.removeClass('erro')
  })
  $pass_input.on('input', function () {
    pass_val = $(this).val();
    console.log(pass_val);
  })

  $login_btn.click(function () {
    let pass_val = $pass_input.val();
    let phone_val = $phone_input.val();
    // 判断
    var phone_reg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
    var email_reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    // var pass_reg = /^[a-zA-Z\d_]{8,}$/;
    // var pass_reg = /^(?![A-Za-z]+$)(?![A-Z\\d]+$)(?![A-Z\\W]+$)(?![a-z\\d]+$)(?![a-z\\W]+$)(?![\\d\\W]+$)\\S{6,20}$/;
    // var pass_reg = /^(\w){6,20}$/;
    // var pass_reg = /(?![A-z0-9]+$)/;
    var pass_reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{6,}$/;
    console.log(pass_val);
    console.log(phone_val);
    if (pass_val && phone_val) {
      if (!email_reg.test(phone_val) && !phone_reg.test(phone_val)) {
        $phone_err.addClass('erro')
      } else {
        $phone_err.removeClass('erro')
        if (pass_val.length < 7) {
          $pass_err.addClass('erro');
          $pass_err.text('密码需大于 6 位');
          return false;
        }
        if (!pass_reg.test(pass_val)) {
          $pass_err.addClass('erro')
          $pass_err.text('密码需包含至少三种字符');
        } else {
          $pass_err.removeClass('erro');
          if($auto_input.is(':checked')){
            console.log( true );
            localStorage.setItem('user',phone_val);
            localStorage.setItem('pass',pass_val);
          } else{
            console.log( false );
            localStorage.clear()
          }
          window.location.href='../html/index.html';
          alert('登录成功！点击确定 跳转到商城首页');
        }
      }
    } else {
      alert('账号或密码不能为空！')
      // console.log(0);
    }
  })
});