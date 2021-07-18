$(function(){

  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.header-nav').fadeToggle(500);
    $('body').toggleClass('noscroll');
  });

  $('.nav-item a[href]').on('click',function(){
    if(window.innerWidth <= 768){
      $('.burger-btn').click();
    }
  });

  // リロードしたときにページのトップに来るように指示
  $('html,body').animate({ scrollTop: 0 }, '1');

  // ヘッダーの固定
  var $win = $(window),
      $fv = $('.fv'),
      $header = $('.header'),
      fvHeight = $fv.outerHeight();
      fixedClass = 'fixed';

    $win.on('load scroll',function(){
      var value = $(this).scrollTop();
      if(value > fvHeight){
        $header.addClass(fixedClass);
      }else{
        $header.removeClass(fixedClass);
      }
    });

});