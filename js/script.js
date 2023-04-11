$(document).ready(function(){
    $('#carouselExampleIndicators').carousel({
      interval: 2000
    });
  });
  $(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
    });
  });
  function scrollToSection(id) {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 1000);
  }
    