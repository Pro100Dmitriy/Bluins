// Burger
$('#burger__button').on('click',function(e){
  e.preventDefault;
  $('#fullscreen-menu').addClass('left-ziro');
})

$('#close-button').on('click',function(e){
  e.preventDefault;
  $('#fullscreen-menu').removeClass('left-ziro');
})

// Menu
$('.main-menu__item').on('mouseover',function(e){
  if(this.childNodes[3]){
    $('.header__bottom').addClass('white-bg')
  }else{
    console.log('bad');
  }
})
$('.main-menu__item').on('mouseout',function(e){
  if(this.childNodes[3]){
    $('.header__bottom').removeClass('white-bg')
  }else{
    console.log('bad');
  }
})

// Fullscreen menu
$('.fullscreen__nav__list__item').on('mouseover', function(e){
  $('.fullscreen__nav__list__item').removeClass('curent-hover')
  $(this).addClass('curent-hover');
});


let viewportwidth;
let viewportheight;
let documentheight;


$(document).on('wheel',function(e){
  //if (typeof window.innerWidth != 'undefined')
  //{
  //    viewportwidth = window.innerWidth,
  //    viewportheight = window.innerHeight
  //}
  //console.log(viewportwidth);
  //console.log( viewportheight );
  //console.log( $(window).scrollTop() );

  if( $(window).scrollTop() >= 900 ){
    $('#header__bottom-cover').addClass('header__bottom-fixed');
  }else{
    $('#header__bottom-cover').removeClass('header__bottom-fixed');
  }

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