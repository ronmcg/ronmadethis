//Handle clicks on the circles
$('#b1').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#section1').offset().top
  }, 1000);
});
$('#b2').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#section2').offset().top
  }, 1000);
});
$('#b3').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#section3').offset().top
  }, 1000);
});
