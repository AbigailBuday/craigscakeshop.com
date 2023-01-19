(function( $ ) {
  // console.log( 'gf date picker loaded' );
  if( typeof gform == 'object') {
    gform.addFilter( 'gform_datepicker_options_pre_init', function( optionsObj, formId, fieldId ) {
      // Order Form - Pickup Date Field
      if (formId == 1 && fieldId == 7) {
        optionsObj.minDate = 7;
        optionsObj.firstDay = 0;
        optionsObj.beforeShowDay = function (date) {
            var disabledDays = [],
                currentDate = jQuery.datepicker.formatDate('mm/dd/yy', date),
                day = date.getDay();
  
            return [!(disabledDays.indexOf(currentDate) != -1 || day == 0 || day == 1)];
        };
      }

      // Order Form - Serving Date Field
      if (formId == 1 && fieldId == 9) {
        optionsObj.minDate = 7;
        optionsObj.firstDay = 0;
      }
      
      // Schedule Tasting Form - Wedding Date Field
      if (formId == 3 && fieldId == 9) {
        optionsObj.minDate = 7;
        optionsObj.firstDay = 0;
      }

      // Contact form event date picker
      if (formId == 2 && fieldId == 9) {
        // optionsObj.minDate = 0;
        optionsObj.firstDay = 0;
      }
      return optionsObj;
    });
  }

})( jQuery );
(function( $ ) {
  console.log( 'custom scripts loaded' );

  // $('.offset-columns')('.wp-block-kadence-column') {
  //   transform: translateX()
  // }

  // $( '.offset-columns' ).scrollTop() {
  //   console.log('true');
  // }

  // $(window).scroll(function() {
  //   var top_of_element = $(".offset-columns").offset().top;
  //   var bottom_of_element = $(".offset-columns").offset().top + $(".offset-columns").outerHeight();
  //   var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  //   var top_of_screen = $(window).scrollTop();

  //   if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
  //       // the element is visible, do something
  //       console.log('in view');
  //       $(".wp-block-kadence-column").each(function() {
  //           console.log( 'offset' + $(this).css("transform") );
  //           var matrix = $(this).css("transform");
  //           var values = matrix.split('(')[1].split(')')[0].split(',');
  //           var one = values[0];
  //           var two = values[1];
  //           console.log(one + ' ' + two);
  //       });
  //   } else {
  //       // the element is not visible, do something else
  //       console.log('out of view');
  //   }
  // });

})( jQuery );

(function($) {
  // Make sure JS class is added.
  document.documentElement.className = "js";
  // Run on page scroll.
  $(window).scroll( function() {
  
  // Toggle header class after threshold point.
    if ( $(this).scrollTop() > 100 ) {
      $(".top-btn").addClass('sticky');
    } else {
      $(".top-btn").removeClass('sticky');
    }
  });
  
  $('.top-btn').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
})(jQuery);

(function($) {

	
  var sticky = $('.notification-banner').offset().top + $('.notification-banner').innerHeight();
  var banner = $('header.site-header').innerHeight() + $('header.site-header').offset().top; 
    window.onscroll = function() {myFunction()};
    function myFunction() {
      if ($(this).scrollTop() > sticky) {
        $("header.site-header").css("top", '0');
        
      } else {
        $("header.site-header").css("top", 'auto');
        
      }
    }
    
    
  })(jQuery);
  