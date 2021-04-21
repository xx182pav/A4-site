$(function () {
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let blockId = $(this).data('scroll'),
      blockOffset = $(blockId).offset().top;

    $('html, body').animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr('href');
    if ($(window).scrollTop() != '0') {
      $(this).fadeIn('slow');
    }
    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() == '0') {
        $(scrollDiv).fadeOut('slow');
      } else {
        $(scrollDiv).fadeIn('slow');
      }
    });
    $(this).click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  };
});
$(function () {
  $('#toTop').scrollToTop();
});
