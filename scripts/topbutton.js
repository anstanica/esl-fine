// This is the code for the top button
// When the user scrolls down 20px from the top of the document, show the button jquery
$(function () {
  // var btn = $('.myTopBtn');
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $(".myTopBtn").show();
    } else {
      $(".myTopBtn").hide();
    }
  });

  $(".myTopBtn").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

// When the user scrolls down 20px from the top of the document, show the button
