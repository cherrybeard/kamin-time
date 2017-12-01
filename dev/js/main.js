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

