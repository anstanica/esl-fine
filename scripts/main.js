

// if body class contains w3-black, then change to light-mode class
// if body class contains light-mode, then change to w3-black class
// document.querySelector(".w3-button").onclick = function () {
//   if (document.body.classList.contains("w3-black")) {
//     document.body.classList.remove("w3-black");
//     document.body.classList.add("light-mode");
//     document.getElementById("main").classList.add("light-mode");
//   } else {
//     document.body.classList.remove("light-mode");
//     document.body.classList.add("w3-black");
//   }
// };
// find every w3-padding-large element and add class anim to it
$(function () {
  $("body").addClass("anim");
    // change the scrollbar color
    $('body').css("scrollbar-color", "red blue");
    // change the scrollbar width
    $('body').css("scrollbar-width", "thickness");

  });


$(function (){
  $('#downloads').each(function(){
    // center it on the screen
    $(this).css('left', '50px');
  });
});



// add eventlistener to window on scoll down hide navbar
// if the screen width is less than 600px
var header = document.getElementById("myNavbar");

if (window.innerWidth < 600) {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      header.style.display = "none";
    } else {
      header.style.display = "block";
    }
  });
}

$(".ppp").on("click", function () {
  $(".hidden-div").toggle();
});

$(".ppp").on("mouseover", function () {
  $(".hidden-div").show();
});

$("div").on("mouseout", function () {
  $(".hidden-div").toggle();
});
