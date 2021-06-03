//  Javascript Code 
  
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  return false;
});


$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1
});
