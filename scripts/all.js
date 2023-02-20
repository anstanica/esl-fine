$(window).on("load", function () {
  const $windowWidth = $(window).width();
  if ($windowWidth < 768) {
    $(".m-icon").show();
    $(".sidebar").hide();

  } else {
    // $(".button-wrapper").css("right", "460px");
    $(".m-icon").hide();
    $(".sidebar").show();
    $(".side-title").html("Menu");
  }
});
$(window).on("resize", function () {
  const $windowWidth = $(window).width();
  if ($windowWidth < 768) {
    $(".sidebar").hide();
    $(".m-icon").show();
    $(".search-bar input").css("margin-left", "60px");
    $(".search-bar input").css("width", "65%");
  } else {
    // $(".button-wrapper").css("right", "460px");
    $(".m-icon").hide();
    $(".sidebar").show();
    $(".side-title").html("Menu");
  }
});
// .m-icon onclick display sidebar
$(".m-icon").on("click", function () {
  $(".sidebar").toggle();
  // animate .m-icon bounce


  if (".m-icon") {
    $(".logo-expand").hide();
    $(".side-title").html("");
  }
  //
  //   github pull command
  else {
    $(".logo-expand").show();
    $(".side-title").html("Menu");
  }
});

$(function () {
  $(".sidebar-link").on("click", function () {
    $(".main-container").removeClass("show");
    $(".main-container").scrollTop(0);
  });
});
$(".iframe-container").css("height", "520px");
$(".iframe-container").css("overflow", "hidden");

const likeBtn = document.querySelector(".like");
const savedData = localStorage.getItem("clicks");
var clicks = 0;
if (savedData !== null) {
  clicks = savedData;
} else {
  clicks = 0;
}
// clicks = savedData;
document.getElementById("clicks").innerHTML = clicks;
$(function () {
  $("#clicks").on("click", function () {
    document.getElementById("clicks").innerHTML = clicks;
    clicks++;
    localStorage.setItem("clicks", clicks);
  });

  if (localStorage && localStorage.getItem("clicks")) {
    clicks = localStorage.getItem("clicks");
  }
});
// #share button onclick
$(function () {
  $("#share").on("click", function () {
    // navigator.share
    if (navigator.share) {
      navigator
        .share({
          title: $(".sidebar-link").text(),
          text: $("title").text($(".sidebar-link").text()),
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      // fallback
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(window.location.href)
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      } else {
        alert("Share not supported");
      }
    }
  });
});

$(".main-container").on("click", function () {
  if (window.innerWidth < 768) {
    $(".sidebar").hide();
  }
  $(".menu").hide();
  // $('.sidebar').hide();
});

$(function () {
  $(".small-icon").on("click", function () {
    $(".menu").toggle();
    // $(".menu").css("display", "flex");
  });
});
