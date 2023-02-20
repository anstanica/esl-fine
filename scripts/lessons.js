
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
  $(".small-icon").on("click", function () {
    $(".menu").toggle();
    // $(".menu").css("display", "flex");
  });
});



$(function () {
  $(".sidebar-link").on("click", function () {
    $(".sidebar-link").removeClass("is-active");

    $(this).addClass("is-active");
  });
});

// This code is used to resize the sidebar while in mobile view.
// on refresh and load 

// $(window).on('resize', resize);
// windows onscroll 
// create topFunction() function
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }

// get the search input



// if m-icon is visible .main-container on click hide the sidebar
$(".main-container").on("click", function () {
  if (window.innerWidth < 768) {
    $(".sidebar").hide();
  }
  $(".menu").hide();
  // $('.sidebar').hide();
});


$(function () {
  $(".sidebar-link").on("click", function () {
    $(".main-container").removeClass("show");
    $(".main-container").scrollTop(0);
    $(".video-p-subtitle").addClass("hide");
    $(this).toggleClass("show");
  });
});

// can you refactor this code to make it more readable and reusable?


  // function for loading content
  function loadContent(href) {
    $(".main-container").scrollTop(0);
    // $("title").text($(href + " .video-p-title").text());
    $(".video-stream").load(href + " #about");
    $(".main-container").addClass("show");
  };


  // get the data-topic attributes

  $(function(){

    if ($(".sidebar-link")){
    $(".sidebar-link").on("click",function () {
      loadContent("/"+ $(this).attr("data-topic")  + "/" + $(this).attr("data-topic")  + ".html");
    });
    $(".zoo").on("click", function () {
      loadContent("/zoo-animals/zoo.html");
    });

    $(".days").on("click", function () {
      loadContent("/days-of-the-week/days.html");
    });
    $(".daily").on("click", function () {
      loadContent("/daily-routine/daily.html");
    }); 


    $(".transport").on("click", function () {
      loadContent("/transportations/transportation.html");
    });
  }
  });
  
  // load the content of the clicked element
  // $(".main-container").load("/" + topic + "/" + topic + ".html");
  // remove content on click
  // $(function () {
  //   $(".logo, .logo-expand, .discover").on("click", function (e) {
  //     loadContent("/animal/animal.html");
  //   });
  //   // load content on click
  //   $(".trending, .video").on("click", function () {
  //     loadContent("/body/body.html");
  //   });
  //   $(".days, .video").on("click", function () {
  //     loadContent("/days-of-the-week/days.html");
  //   });
  //   $(".food").on("click", function () {
  //     loadContent("/food/food.html");
  //   });
  //   $(".family").on("click", function () {
  //     loadContent("/family/family.html");
  //   });
  //   $(".Festivals").on("click", function () {
  //     loadContent("/Festivals/Festivals.html");
  //   });
  
  //   $(".colors").on("click", function () {
  //     loadContent("/colors/colors.html");
  //   });
    
  //   $(".clothes").on("click", function () {
  //     loadContent("/clothes/clothes.html");
  //   });
  
  //   $(".weather").on("click", function () {
  //     loadContent("/weather/weather.html");
  //   });
  //   $(".adj").on("click", function () {
  //     loadContent("/Adjectives/adjectives.html");
  //   });
  //   $(".adv").on("click", function () {
  //     loadContent("/Adverbs/adverbs.html");
  //   });
  //   $(".country").on("click", function () {
  //     loadContent("/countries/countries.html");
  //   });
  //   $(".music").on("click", function () {
  //     loadContent("/Music/music.html");
  //   });
  //   $(".daily").on("click", function () {
  //     loadContent("/daily-routine/daily.html");
  //   });
  //   $(".games").on("click", function () {
  //     loadContent("/games/games.html");
  //   });
  //   $(".alpha").on("click", function () {
  //     loadContent("/alphabets/alphabets.html");
  //   });
  
  //   $(".house").on("click", function () {
  //     loadContent("/house/house.html");
  //   });
  
  //   $(".jobs").on("click", function () {
  //     loadContent("/jobs/jobs.html");
  //   });
  
  //   $(".months").on("click", function () {
  //     loadContent("/months/months.html");
  //   });
  
  //   $(".class").on("click", function () {
  //     loadContent("/classroom/classroom.html");
  //   });
  
  //   $(".numbers").on("click", function () {
  //     loadContent("/numbers/numbers.html");
  //   });
  
  //   $(".phonics").on("click", function () {
  //     loadContent("/phonics/phonics.html");
  //   });
  
  //   $(".places").on("click", function () {
  //     loadContent("/places/places.html");
  //   });
  
  //   $(".questions").on("click", function () {
  //     loadContent("/questions/questions.html");
  //   });
  
  //   $(".seasons").on("click", function () {
  //     loadContent("/seasons/seasons.html");
  //   });
  
  //   $(".shapes").on("click", function () {
  //     loadContent("/shapes/shapes.html");
  //   });
  
  //   $(".sports").on("click", function () {
  //     loadContent("/sports/sports.html");
  //   });
  
  //   $(".time").on("click", function () {
  //     loadContent("/time/time.html");
  //   });
  
  //   $(".toys").on("click", function () {
  //     loadContent("/toys/toys.html");
  //   });
  
  //   $(".transport").on("click", function () {
  //     loadContent("/transportations/transportation.html");
  //   });
  
  //   $(".verbs").on("click", function () {
  //     loadContent("/verbs/verbs.html");
  //   });
  //   $(".zoo").on("click", function () {
  //     loadContent("/zoo-animals/zoo.html");
  //   });
  
  //   $(".sidebar-link").on("click", function () {
  //     $("#about").css("margin", "10px");
  //     $("#about").css("padding", "10px");
  //     $(".video-stream").css("marginBottom", "80px");
  //   });
  
  // });
  
  // add class py-2 to every element in the div .video-stream
//   $(".video-stream").children().addClass("py-2");
// });

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
  

