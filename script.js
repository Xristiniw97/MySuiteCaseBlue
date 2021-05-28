
$(function () {
  var header = $(".start-style");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      header.removeClass('start-style').addClass("scroll-on");
    } else {
      header.removeClass("scroll-on").addClass('start-style');
    }
  });
});

//Menu On Hover

$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
  if ($(window).width() > 750) {
    var _d = $(e.target).closest('.nav-item');_d.addClass('show');
    setTimeout(function () {
      _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
    }, 1);
  }
});

// MAIN CAROUSEL 
$('.carousel').carousel({
  interval: 5000
})


$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
});
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
      return false;
}); 


