// 스크롤라
$('.animate').scrolla();

var pager=$(".pager ul li");
var cont=$("#wrap>section");

$(window).scroll(function(){
    var sct=$(window).scrollTop();
    cont.each(function(){
        var tg=$(this);
        var i=tg.index();
        if(tg.offset().top<=sct){
            pager.removeClass("on");
            pager.eq(i).addClass("on");
           };
    });
});

pager.click(function(){
    var active=$(this).index();
    var top=$("html , body").scrollTop();
    var tt=cont.eq(active).offset().top;
    if(top==0) top=$("body").scrollTop();
    $("html , body").stop().animate({
        scrollTop:tt
    },400);
    return false;
});

$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });


// 햄버거 메뉴 클릭시 메뉴보이게
$('.menu-toggle-btn').click(function(){
    $('nav.pager').stop().slideToggle();
})

// 메뉴 클릭시 메뉴창 닫기
 $('nav ul li a').click(function() {
    $('nav.pager').stop().slideUp();
});

new Swiper('.slider .swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1, //한 번에 보여지는 슬라이드 개수
    navigation : {
        prevEl : ".slider .button-prev",
        nextEl : ".slider .button-next"
    }
});

// 컬러박스
// $('#rd2Cont .inner .btnPt a').colorbox({rel:'pt'});
$('.design .inner ul li a').colorbox({rel:'etc'});

AOS.init();


