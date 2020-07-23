$(function(){
   $('.slider-wrapper').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
      appendArrows:$('.slider-control__buttons')
   });

   $(".rate-star").rateYo({
      rating: 5,
      starWidth: "15px",
      ratedFill: "#ffc000",
      spacing: "3px"
   });

   var mixer = mixitup('.newproducts__items');



});