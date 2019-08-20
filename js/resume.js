(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });



  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav',
  });

// Adds the animation to the nav icons when hovering  
   
   $( ".nav-link" ).hover(
     function() {
       $( '.icn' ).addClass( 'hvr-icon' );
       $( '.nav-link' ).addClass( "hvr-icon-bob" );
     },
     function() {
       $( '.icn' ).removeClass( "hvr-icon" );
       $( '.nav-link' ).removeClass( "hvr-icon-bob" );
     });

// checking for classes on scroll for fade in effect

$(function() {
  var $elements = $('.animateBlock.notAnimated'); //contains elements of nonAnimated class
  var $window = $(window);
  $window.on('scroll', function(e) {
    $elements.each(function(i, elem) { //loop through each element
      if ($(this).hasClass('animated')) // check if already animated
        return;
      animateMe($(this));
    });
  });
});
 
function animateMe(elem) {
  var winTop = $(window).scrollTop(); // calculate distance from top of window
  var winBottom = winTop + $(window).height();
  var elemTop = $(elem).offset().top; // element distance from top of page
  var elemBottom = elemTop + $(elem).height();
  if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
    // exchange classes if element visible
    $(elem).removeClass('notAnimated').addClass('animated');
  }
}

})(jQuery); // End of use strict