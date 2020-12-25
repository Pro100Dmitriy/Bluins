// Burger
$('#burger__button').on('click',function(e){
  e.preventDefault;
  $('body').css('overflow-y','hidden');
  $('#fullscreen-menu').addClass('left-ziro');
})
$('#close-button').on('click',function(e){
  e.preventDefault;
  $('body').css('overflow-y','scroll');
  $('#fullscreen-menu').removeClass('left-ziro');
})


// Cart Menu
$('#cart-icon-menu').on('click',function(e){
  e.preventDefault;
  $('body').css('overflow-y','hidden');
  $('#cart-menu').addClass('right-ziro');
  $('#cart-overlay').css('visibility','visible');
  setTimeout(function(){
    $('#cart-overlay').css('background','rgba(180,197,204, 0.4)');
  }, 100);
})
$('#close-button-cart').on('click',function(e){
  e.preventDefault;
  $('body').css('overflow-y','scroll');
  $('#cart-menu').removeClass('right-ziro');
  $('#cart-overlay').css('background','rgba(180,197,204, 0)');
  setTimeout(function(){
    $('#cart-overlay').css('visibility', 'hidden');
  }, 400);
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

  if( $(window).scrollTop() >= 500 ){
    $('#header__bottom-cover').addClass('header__bottom-fixed');
  }else{
    $('#header__bottom-cover').removeClass('header__bottom-fixed');
  }

})


//Email
$('#fotter-email').on('focus',function(e){
  console.log(e.handleObj.origType);
  $('#fotter-email-label').addClass('label-focus');
});
$('#fotter-email').on('blur',function(e){
  if(this.value){
    console.log(this.value);
  }else{
    $('#fotter-email-label').removeClass('label-focus');
  }
});



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