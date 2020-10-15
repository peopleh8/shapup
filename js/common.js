$(function () {
  $('.service__item-btn').hover(function() {
    $(this).addClass('btn--gradient');
  }, function() {
    $(this).removeClass('btn--gradient');
  });

  $('.footer-mid__tags-link').hover(function() {
    $(this).addClass('btn--gradient');
  }, function() {
    $(this).removeClass('btn--gradient');
  });

  $('.burger-menu').on('click', function() {
    $('.menu__list').toggleClass('active');
    $('.burger-menu').toggleClass('active');
    $('.burger__top').toggleClass('active');
    $('.burger__mid').toggleClass('active');
    $('.burger__bot').toggleClass('active');
  });
  
  $('.about__for-slider').slick({
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    asNavFor: ".about__nav-slider"
  });

  $('.about__nav-slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    asNavFor: ".about__for-slider"
  });

  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    dots: true,
    responsive: [
      {
        breakpoint: 982,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.image-gallery__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 743,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 531,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});