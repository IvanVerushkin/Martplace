$(function(){
   $('.products-slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"></button>',
      appendArrows:$('.products__control-arrows'),
      responsive:[
         {
            breakpoint: 769,
            settings: {
            arrows: false,
            dots: true,
           }
         }
      ]
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
      responsive:[
         {
            breakpoint: 1025,
            settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
           }
         },
         {
           breakpoint: 769,
            settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
           }
         }
      ]
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
      
      breakpoints: {
         320: {
           slidesPerView: 1,
         },
         1024: {
            slidesPerView: 2,
         }
      }

   });

   $('.header__btn-menu').on('click', function (){
      $('.header__rightside').toggleClass('active');
   });

   $('.drop-menu__btn').on('click', function(){
      $('.header__bottom-list').slideToggle();
   });

   $('.header__bottom-item').on('click', function (){
      if(window.innerWidth < 901) {
         $(this).children(":first").next().slideToggle();
      }
   });

   $('.header__bottom-item').on('click', function (){
      $('.nav-menu__list').toggleClass('active');
   });

   $('.favorites-shop__list').on('click', function(){
      $('.card-product').addClass('list2');
      $('.favorites-shop__list').addClass('active');
      $('.favorites-shop__grid').removeClass('active');
   });
   $('.favorites-shop__grid').on('click', function(){
      $('.card-product').removeClass('list2')
      $('.favorites-shop__grid').addClass('active');
      $('.favorites-shop__list').removeClass('active');
   });

   $('.select-price__title').on('click', function(){
      $('.select-price__list').slideToggle();
   });

   $('.select-items__title').on('click', function(){
      $('.select-items__list').slideToggle();
   });
   
   $('.category-shop__list').on('click', function(){
      $('.card-product').addClass('list1');
      $('.category-shop__list').addClass('active');
      $('.category-shop__grid').removeClass('active');
   });
   $('.category-shop__grid').on('click', function(){
      $('.card-product').removeClass('list1')
      $('.category-shop__grid').addClass('active');
      $('.category-shop__list').removeClass('active');
   });

   $('.categories__title').on('click', function(){
      $('.categories__list').slideToggle();
   });

   $('.filter-products__title').on('click', function(){
      $('.filter-products__list').slideToggle();
   });

   $('.pricing-range__title').on('click', function(){
      $('.pricing-range__inner').slideToggle();
   });

   var slider = $("js-range-slider").data("ionRangeSlider");

   $(".js-range-slider").ionRangeSlider({
      type: "double",
      from: 30,
      to: 300,
      prefix: "$",
      max: 600,
  });

   $('.product-tabs .tab').on('click', function(event) {
   var id = $(this).attr('data-id');
      $('.product-tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
   });


   var mixer = mixitup('.newproducts__items');

});