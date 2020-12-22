
$('#burger__button').on('click',function(e){
  e.preventDefault
  $('#fullscreen-menu').addClass('left-ziro')
})

$('#close-button').on('click',function(e){
  e.preventDefault
  $('#fullscreen-menu').removeClass('left-ziro')
})

$('.slick-slider').slick({
   dots: true,
   infinite: true,
   autoplay: false,
   speed: 500,
   fade: true,
   cssEase: 'linear',
   nextArrow: '<button type="button" class="slick-next"><img src="img/Icon/Dark/next.svg" alt="Next"></button>',
   prevArrow: '<button type="button" class="slick-prev"><img src="img/Icon/Dark/prev.svg" alt="Prev"></button>'
 });


$('#feedback__slider__img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '0px',
  centerMode: true,
  arrows: false,
  dots: false,
  fade: false,
  draggable: false,
  asNavFor: '#feedback__slider__text'
});
$('#feedback__slider__text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '#feedback__slider__img',
  autoplay: true,
  fade: true,
  dots: true,
  arrows: true,
  centerMode: true,
  draggable: false,
  focusOnSelect: true,
  nextArrow: '<button type="button" class="slick-next"><img src="img/Icon/Dark/next.svg" alt="Next"></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/Icon/Dark/prev.svg" alt="Prev"></button>'
});