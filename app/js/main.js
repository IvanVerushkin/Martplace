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

   var mixer = mixitup('.newproducts__items');

   $('.feedback__slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"></button>',
      appendArrows: '.feedback__arrows',
   });

});