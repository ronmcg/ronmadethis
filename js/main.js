//Handle clicks on the circles
$('#b-contact').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#section-contact').offset().top
  }, 1000);
});
$('#b-about').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#section-about').offset().top
  }, 1000);
});
$('#b-projects').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#section-projects').offset().top
  }, 1000);
});
$('#b-fun-stuff').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#section-fun-stuff').offset().top
  }, 1000);
});
//get the location of the top of the contat section
var contactTop = $('#section-contact').offset().top;
console.log(contactTop);
$(document).scroll(function(){
  if($(this).scrollTop() > contactTop){
    $('#contact-floater').fadeOut('fast');
  } else {
    $('#contact-floater').fadeIn('fast');
  }
});
