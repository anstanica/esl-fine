$(function () {
  $(".sidebar-link").on("click", function () {
    $(".sidebar-link").removeClass("is-active");

    $(this).addClass("is-active");
  });
});

// This code is used to resize the sidebar while in mobile view.
// It is called on window resize and it checks the width of the window.
// If the window width is less than 768px, then the sidebar is hidden by setting the width to 0px.
// This code also sets the sidebar to be displayed in the center of the page in mobile view.
// If the window width is greater than 768px, then the sidebar is displayed by setting the width to 220px.

$(window).on("resize", function () {
  const $windowWidth = $(window).width();

//   also on minimize and maximize


  if ($windowWidth < 768) {
    $(".sidebar").css("display", "none");
    $(".m-icon").css("display", "block");
    $(".button-wrapper").css("right", "0");
    $(".button-wrapper").css("top", "70px");
    $(".search-bar").css("width", "75%");
    $(".search-bar").css("marginLeft", "30px");
    $(".search-bar input").css("width", "75%");
  } else if ($windowWidth < 992) {
    $(".button-wrapper").css("right", "200px");
    $(".sidebar").css("display", "block");
    $(".m-icon").css("display", "none");
    $(".side-title").html("Menu");
    $(".m-icon").css("top", "17px");
  } else {
    $(".button-wrapper").css("right", "460px");
    $(".sidebar").css("display", "block");
    $(".m-icon").css("display", "none");
    $(".side-title").html("Menu");
    $(".m-icon").css("top", "17px");
  }
});

// $(window).on('resize', resize);
// windows onscroll 
// create topFunction() function
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


// .m-icon onclick display sidebar
$(".m-icon").on("click", function () {
  $(".sidebar").toggle();
  if (".m-icon"){
   
   
    $(".logo-expand").hide();
    $(".side-title").html("");
    $(".m-icon").css("left", "15px");
    $(".m-icon").css("top", "0");
  }
//   
  else {
   
    $(".logo-expand").show();
    $(".side-title").html("Menu");
    $(".m-icon").css("left", "0");
    $(".m-icon").css("top", "0");
  }
});

// onc refer-div display on click
// get ppp button

// When the document is ready, do the following:


// const strongTags = document.querySelectorAll("strong");

// if (!$("strong").hasClass("border-y"))
// {
//     $("strong").addClass("border-y");
// }

// const allVideos = document.querySelectorAll(".video");

// allVideos.forEach((v) =>
// {
//     v.addEventListener("mouseover", () =>
//     {
//         const video = v.querySelector("video");
//         video.play();
//     });
//     v.addEventListener("mouseleave", () =>
//     {
//         const video = v.querySelector("video");
//         video.pause();
//     });
// });

$(function () {
  $(".sidebar-link").on("click", function () {
    $(".main-container").removeClass("show");
    $(".main-container").scrollTop(0);
    $(".video-p-subtitle").addClass("hide");
    $(this).toggleClass("show");
  });
});

// can you refactor this code to make it more readable and reusable?

$(function () {
  // function for loading content
  function loadContent(href) {
    $(".main-container").scrollTop(0);
    // $("title").text($(href + " .video-p-title").text());
    $(".video-stream").load(href + " #about");
    $(".main-container").addClass("show");
  }
  // function for removing content
  function removeContent() {
    $(".main-container").removeClass("show");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
  }
  // remove content on click
  $(".logo, .logo-expand, .discover").on("click", function (e) {
    loadContent("/animal/animal.html");
  });
  // load content on click
  $(".trending, .video").on("click", function () {
    loadContent("/body/body.html");
  });
  $(".days, .video").on("click", function () {
    loadContent("/days-of-the-week/days.html");
  });
  $(".food").on("click", function () {
    loadContent("/food/food.html");
  });
  $(".family").on("click", function () {
    loadContent("/family/family.html");
  });

  $(".colors").on("click", function () {
    loadContent("/colors/colors.html");
  });
  
  $(".clothes").on("click", function () {
    loadContent("/clothes/clothes.html");
  });

  $(".weather").on("click", function () {
    loadContent("/weather/weather.html");
  });
  $(".adj").on("click", function () {
    loadContent("/Adjectives/adjectives.html");
  });
  $(".adv").on("click", function () {
    loadContent("/Adverbs/adverbs.html");
  });
  $(".country").on("click", function () {
    loadContent("/countries/countries.html");
  });
  $(".music").on("click", function () {
    loadContent("/Music/music.html");
  });
  $(".daily").on("click", function () {
    loadContent("/daily/daily.html");
  });
  $(".games").on("click", function () {
    loadContent("/games/games.html");
  });
  $(".alpha").on("click", function () {
    loadContent("/alphabet/alphabet.html");
  });

  $(".house").on("click", function () {
    loadContent("/house/house.html");
  });

  $(".jobs").on("click", function () {
    loadContent("/jobs/jobs.html");
  });

  $(".months").on("click", function () {
    loadContent("/months/months.html");
  });

  $(".class").on("click", function () {
    loadContent("/classroom/classroom.html");
  });

  $(".numbers").on("click", function () {
    loadContent("numbers/numbers.html");
  });

  $(".phonics").on("click", function () {
    loadContent("/phonics/phonics.html");
  });

  $(".places").on("click", function () {
    loadContent("/places/places.html");
  });

  $(".questions").on("click", function () {
    loadContent("/questions/questions.html");
  });

  $(".seasons").on("click", function () {
    loadContent("/seasons/seasons.html");
  });

  $(".shapes").on("click", function () {
    loadContent("/shapes/shapes.html");
  });

  $(".sports").on("click", function () {
    loadContent("/sports/sports.html");
  });

  $(".time").on("click", function () {
    loadContent("/time/time.html");
  });

  $(".toys").on("click", function () {
    loadContent("/toys/toys.html");
  });

  $(".transport").on("click", function () {
    loadContent("/transportations/transportation.html");
  });

  $(".verbs").on("click", function () {
    loadContent("/verbs/verbs.html");
  });
  $(".zoo").on("click", function () {
    loadContent("/zoo-animals/zoo.html");
  });

  $(".sidebar-link").on("click", function () {
    $("#about").css("margin", "10px");
    $("#about").css("padding", "10px");
    $(".video-stream").css("marginBottom", "80px");
  });

  // add class py-2 to every element in the div .video-stream
  $(".video-stream").children().addClass("py-2");
});

$(function () {
  $(".video").on("click", function () {
    var source = $(this).find("source").attr("src");
    var title = $(this).find(".video-name").text();
    var person = $(this).find(".video-by").text();
    var img = $(this).find(".author-img").attr("src");
    $(".video-stream video").stop();
    $(".video-stream source").attr("src", source);
    $(".video-stream video").load();
    $(".video-detail .author-img").attr("src", img);
  });
});

const vdSub = document.querySelector(".video-stream");
// for each vdSub child if it doesn't have the class of py-2 then add it
$(vdSub)
  .children()
  .each(function () {
    if (!$(this).hasClass("py-2")) {
      $(this).addClass("py-2");
    }
  });

// liked counter
// const likeBtn = document.querySelector(".like");
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
          title: $("#about").eq(1).text(),
          text: $("#about").eq(1).text(),
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
// check if this script included in the head tag <script src="/scripts/jquery.min.js"></script>

// if it isn't then add it
if (document.querySelector("script[src='/scripts/jquery.min.js']") === null) {
    var script = document.createElement("script");
    script.src = "/scripts/jquery.min.js";
    document.head.appendChild(script);
    }

    