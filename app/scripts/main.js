'use strict';
$(document).ready(function() {
  // control visibility of top arrow
  var topArrowHandler = function () {
    var y = $(window).scrollTop();

    if (y > $(window).innerHeight()) {
      $('.top-arrow').css('opacity','1');
    }
    else {
      $('.top-arrow').css('opacity','0');
    }
    if (y + $(window).height() >= $(document).height()) {
      $('.top-arrow').css('bottom', $('footer').outerHeight() + 20);
    }
    else {
      $('.top-arrow').css('bottom','20px');
    }
  };
  $(window).on('resize', topArrowHandler);
  $(window).on('scroll', topArrowHandler);
  $(window).on('touchmove', topArrowHandler);

  // smooth scroll to top
  $('.top-arrow a').on('click', function(e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
      'scrollTop': $(target).offset().top
    }, 900, 'swing');
  });
});
