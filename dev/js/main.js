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
