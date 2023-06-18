$(function(){
   
//  $(".menu__link, .header__link, .logo").on("click", function(event){
//         event.preventDefault();
//         var id = $(this).attr('href'),
//         top = $(id).offset().top;
//         $('.header__top').toggleClass('header__top--fixed');
//         $('body,html').animate({scrollTop: top-82}, 3500);
//     });

  $('.menu__button, .menu__link').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
    $('body').toggleClass('lock');
  });

  $('.menu__link, .header__link, .logo').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#gallery') {
      scrollPoint = scrollPoint - 65;
    }
    if(scrollAnchor === '#gallery-2') {
      scrollPoint = scrollPoint - 65;
    } 

    if(scrollAnchor === '#contacts') {
      scrollPoint = scrollPoint - 65;
    }

    $('html, body').animate({scrollTop: scrollPoint}, 3500);
    return false;
  });

  $window = $(window);
  $window.scroll(function() {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

});

// var mixer = mixitup('.gallery__content');