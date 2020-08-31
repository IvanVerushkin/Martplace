$(function(){
   $('.products-slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"></button>',
      appendArrows:$('.products__control-arrows')
   });

   $('.followers__slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"></button>',
      appendArrows: '.followers__control-arrows',
   });

   $(".rate-star").rateYo({
      rating: 5,
      starWidth: "15px",
      ratedFill: "#ffc000",
      spacing: "3px"
   });

   let swiper = new Swiper('.swiper-container', {
      wrapperClass: 'swiper-wrapper',
      slideClass: 'feedback__item',
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
   });

   $('.drop-menu__btn').on('click', function(){
      $('.header__bottom-list').slideToggle();
   });

   $('.header__btn-menu').on('click', function (){
      $('.header__rightside').toggleClass('active');
   });

   $('.header__bottom-item').on('click', function (){
      $('.nav-menu__list').toggleClass('active');
   });

   var mixer = mixitup('.newproducts__items');

});