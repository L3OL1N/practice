$(document).ready(function () {
  //下拉式選單
  $('.dropdown').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active');
    $(this).parent().find('.dropdown-open').slideToggle();
    $(this).parent().siblings().find('.dropdown-open').slideUp();
  });

  //燈箱
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // this shows a bit of the previous/next slides
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //top
  $('.toTop-arrow').click(function (event) { 
    event.preventDefault();
    $('html,body').animate({scrollTop:0}, 750);
  });
  $(window).on("load",function() {
    $(window).scroll(function() {
      $(this).scrollTop()>300? $('.toTop-arrow').fadeIn(200):$('.toTop-arrow').stop().fadeOut(200);
    }).scroll();
  });
});