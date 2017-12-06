$(function() {
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
 		nextEl: '.swiper-button-next',
  	prevEl: '.swiper-button-prev'
		},
  });
// lazyload
$(".model img").addClass('lazyload');
lazyload();
// MODAL
    var elements = $('.modal-overlay, .modal');
    var body = $('body');
    var modalLock = $(".modal-lock");
    var scrollBarWidth = window.innerWidth - document.body.offsetWidth;

    var modalOverflow = function(padding, overflow) {
      modalLock.css({"padding-right": padding, "overflow": overflow});
    }
    $('.modal-button').click(function() {
        elements.addClass('active');
        body.toggleClass('modal-lock');
        modalOverflow(scrollBarWidth, hidden);
    });

    $('.close-modal').click(function(){
      elements.removeClass('active');
      setTimeout(function(){
          modalOverflow(0, scroll);
          body.toggleClass('modal-lock');
        }, 500);
    });
//OPEN MODELS LIST
  var showModels = $(".show-models");
  var itemList = ".models-container";
  var itemContainer = ".fireplaces-container";

  showModels.click(function(){
    var text = $(this).text();
    $(this).closest(itemContainer).find(itemList).slideToggle(400);
    $(this).text(text == "Смотреть модели" ? "Свернуть" : "Смотреть модели");
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

});



