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


// filter Menu
$('#prod-filter_open-menu').on('click',function(e){
  e.preventDefault;
  $('#prod-filter-menu').addClass('left-ziro');
  $('#prod-filter-overlay').css('visibility','visible');
  setTimeout(function(){
    $('#prod-filter-overlay').css('background','rgba(180,197,204, 0.4)');
  }, 100);
})
$('#close-button-prod-filter').on('click',function(e){
  e.preventDefault;
  $('#prod-filter-menu').removeClass('left-ziro');
  $('#prod-filter-overlay').css('background','rgba(180,197,204, 0)');
  setTimeout(function(){
    $('#prod-filter-overlay').css('visibility', 'hidden');
  }, 400);
})

let custItemPrev;

$('.groupe-cust-title').on('click', function(e){
  e.preventDefault
  custItemPrev = this.parentElement.parentElement;
  $(custItemPrev).toggleClass('cust-active');
});


// Menu
$('.main-menu__item').on('mouseover',function(e){
  if(this.childNodes[3]){
    $('.header__bottom').addClass('white-bg')
  }else{
    //console.log('bad');
  }
})
$('.main-menu__item').on('mouseout',function(e){
  if(this.childNodes[3]){
    $('.header__bottom').removeClass('white-bg')
  }else{
    //console.log('bad');
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


$(document).on('wheel touchmove',function(e){

  if( $(window).scrollTop() >= 500 ){
    $('#header__bottom-cover').addClass('header__bottom-fixed');
  }else{
    $('#header__bottom-cover').removeClass('header__bottom-fixed');
  }

})


//Email
$('#fotter-email').on('focus',function(e){
  $('#fotter-email-label').addClass('label-focus');
});
$('#fotter-email').on('blur',function(e){
  if(this.value){

  }else{
    $('#fotter-email-label').removeClass('label-focus');
  }
});


// Go To Top

$('#go-to-top').on('click', function(e){
  e.preventDefault;
  console.log('asdf')
  $('html, body').animate({scrollTop: 0}, 1000);
  $('#header__bottom-cover').removeClass('header__bottom-fixed');
  $('#go-to-top').addClass('hidden');
});


$(window).on('wheel touchmove', function() {
  if( $(window).scrollTop() >= 1000 ){
    $('#go-to-top').removeClass('hidden');
  }else{
    $('#go-to-top').addClass('hidden');
  }
});


//el-form
let elInput;

$('.el-input__field').on('focus',function(e){
  elInput = this.previousSibling.previousSibling;
  $(elInput).addClass('el-label-focus');
});
$('.el-input__field').on('blur',function(e){
  if(this.value){

  }else{
    elInput = this.previousSibling.previousSibling;
    $(elInput).removeClass('el-label-focus');
  }
});

$('#comments-hidden-toggle').on('click', function(){
  $('#comments-toggle').toggleClass('comments-hidden')
});

// Cart Froms
$('#cart__item-slide').on('click', function(){
  $('.delete-item').toggleClass('close');
  $('#cart__item-forms').toggleClass('item-forms__open');
});



// Product grid

let gridName = ['fore-item','five-item','list-item'];

$('#grid-fore').on('click',function(e){
  $('.grid-button').removeClass('grid-button-active');
  $(this).addClass('grid-button-active');
  $('#products__list-container').removeClass(gridName);  
  $('#products__list-container').addClass('fore-item');
});
$('#grid-five').on('click',function(e){
  $('.grid-button').removeClass('grid-button-active');
  $(this).addClass('grid-button-active');
  $('#products__list-container').removeClass(gridName);
  $('#products__list-container').addClass('five-item')
});
$('#grid-list').on('click',function(e){
  $('.grid-button').removeClass('grid-button-active');
  $(this).addClass('grid-button-active');
  $('#products__list-container').removeClass(gridName);
  $('#products__list-container').addClass('list-item');
});




$('.slick-slider').slick({
   dots: true,
   infinite: true,
   autoplay: false,
   speed: 500,
   fade: true,
   cssEase: 'linear',
   nextArrow: '<button type="button" class="slick-next"><img src="img/Icon/Dark/next.svg" alt="Next"></button>',
   prevArrow: '<button type="button" class="slick-prev"><img src="img/Icon/Dark/prev.svg" alt="Prev"></button>',
   responsive: [{

    breakpoint: 768,
    settings: {
      arrows: false
    }

  }]
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
  asNavFor: '#feedback__slider__text',
  responsive: [{

    breakpoint: 500,
    settings: {
      slidesToShow: 1
    }

  }]
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
  prevArrow: '<button type="button" class="slick-prev"><img src="img/Icon/Dark/prev.svg" alt="Prev"></button>',
  responsive: [{

      breakpoint: 768,
      settings: {
        arrows: false
      }

    }]
});


$('#information-product__sliders__slick').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  nextArrow: '<button type="button" class="slick-next"><img src="img/Icon/Dark/next.svg" alt="Next"></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/Icon/Dark/prev.svg" alt="Prev"></button>',
  responsive: [{

    breakpoint: 1100,
    settings: {
      arrows: false,
      dots: false
    }

  }]
});