//@prepros-prepend script/libs/jquery-1.12.4.min.js
//@prepros-prepend script/libs/swiper.min.js
//@prepros-prepend script/libs/lazyload.js
$(function() {

var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  observer: true,
  observeParents: true,
  lazy: true,
  navigation: {
 		nextEl: '.swiper-button-next',
  	prevEl: '.swiper-button-prev'},
});
// lazyload
$(".model img").addClass('lazyload');
lazyload();

// MODAL
var elements = $('.modal-overlay, .modal');
var body = $('body');
var modalLock = $(".modal-lock");

$('.modal-button').click(function() {
  elements.addClass('active');
  body.toggleClass('modal-lock');
});

$('.close-modal').click(function(){
  elements.removeClass('active');
  setTimeout(function(){
       body.toggleClass('modal-lock');
    }, 500);
});

//OPEN MODELS LIST
var expandable = '[data-expandable]';
var expandableToggle = '[data-expandable-toggle]';
var expandableBlock = '[data-expandable-block]';

$(expandable).on('click', expandableToggle, function(){
	var $this = $(this);
  var text = ( $this.text() == "Смотреть модели" ) ? "Свернуть" : "Смотреть модели";

  $this.closest(expandable).find(expandableBlock).slideToggle(400);
	$this.text(text);
  // var marbleSlider = new Swiper ('.swiper-container', {
  //   loop: true,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'},
  // });
});

// SMOOTHSCROLL
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      window.location.hash = hash;
    });
  }
});

// CALLBACK
var $callback = $("[data-callback-show]");
var $callbackForm = $("[data-callback-form]");

function checkInputs($inputs){
  $inputs.each(function(){
    var $input = $(this).closest('.text-input');
    if (!$(this).val()) {$input.addClass('error'); }
  });
}

$callback.click(function(){
  $(this).closest('[data-callback-state]').attr('data-callback-state', 'form');
});

$callbackForm.on('focus', 'input', function(){
  $(this).closest('.text-input').removeClass('error');
});

$callbackForm.on('click', '.text-input', function(){
  $(this).find('input').focus();
});

$callbackForm.on('submit', function(e){
  var $this = $(this);
  e.preventDefault();

  checkInputs($this.find('input[type=tel]'));

  if (!$this.find('.text-input.error').length){
    var ajaxData = {
      type: $this.attr('method'),
      data: $this.serialize()
    };
    $this.find('button[type=submit]').prop('disabled', true);
    $this.find('.text-input').addClass('disabled');
    $.ajax(ajaxData).done(function() {
      $this.find('button[type=submit]').prop('disabled', false).addClass('success').text('Отправлено!');
    });
  }
});

});
