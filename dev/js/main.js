$(function() {
    var mySwiper = new Swiper ('.swiper-container', {
      // direction: 'vertical',
      loop: true,
      // slidesPerView: 1
      navigation: {
   		nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev'
  		},
    })



// SMOOTHSCROLL

$("a").on('click', function(event) {

if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });


});

