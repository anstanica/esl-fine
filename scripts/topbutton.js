

// This is the code for the top button
// When the user scrolls down 20px from the top of the document, show the button jquery
var btn = $('.myTopBtn');

$(window).on("scroll",function() {
  if ($(window).scrollTop() > 300) {
    btn.show();
  } else {
    btn.hide();
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
