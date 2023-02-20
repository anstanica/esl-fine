$(function () {
    $(".sidebar-link").on("click", function () {
      $(".sidebar-link").removeClass("is-active");
  
      $(this).addClass("is-active");
    });
  });
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
  
  // When the document is ready, do the following:
  
  $(function () {
    $(".small-icon").on("click", function () {
      $(".menu").toggle();
      // $(".menu").css("display", "flex");
    });
  });
  
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
  

  //  get the data-topic attribute from the sidebar link
  // var topic = $(this).attr("data-topic");
  // if the .sidebar-link  = "live" or "community" or "competition" or "tutorial" show a message to the user "coming soon"
  

    // search the parent folder "youtuube" and find the the directory that matches the class


    // function for loading content
    function loadContent(href) {
      $(".main-container").scrollTop(0);
      // $("title").text($(href + " .video-p-title").text());
      $(".video-stream").load(href + " #about");
      $(".main-container").addClass("show");
      $('.sidebar-link').on('click', function () {
        $("title").text($(this).text() + "Worksheets");
      });
   
    };

    $(function () {
      $(".sidebar-link").on("click", function () {
        loadContent("/" + $(this).attr("data-topic") + "/worksheets/worksheet.html");
      });
      
      $(".zoo").on("click", function () {
        loadContent("/zoo-animals/worksheets/worksheet.html");
      });
      $(".discover").on("click", function () {
        loadContent("/animal/worksheet.html");
      });
    });
    
    // $('.main-container').html("<video id='streamer' src='vsrc/"+ videoName + ".mp4' controls></video>");
    // function for removing content

    // remove content on click
  //   $(function () {
  //   $(".logo, .logo-expand, .discover").on("click", function (e) {
  //     loadContent("/animal/worksheet.html")
  //     //
  //   });
  //   // load content on click
  //   $(".trending, .video").on("click", function () {
  //     loadContent("/body/worksheets/worksheet.html");
     
  //   });
  //   $(".days, .video").on("click", function () {
  //     loadContent("/days-of-the-week/worksheets/worksheet.html");
     
  //   });
  //   $(".clothes, .video").on("click", function () {
  //     loadContent("/clothes/worksheets/worksheet.html");
     
  //   });
  //   $(".food").on("click", function () {
  //     loadContent("/food/worksheets/worksheet.html");
     
  //   });
  //   $(".family").on("click", function () {
  //     loadContent("/family/worksheets/worksheet.html");
     
  //   });
  //   $(".Festivals").on("click", function () {
  //     loadContent("/Festivals/worksheets/worksheet.html");
     
  //   });
  //   $(".colors").on("click", function () {
  //     loadContent("/colors/worksheets/worksheet.html");
     
  //   });
  //   $(".weather").on("click", function () {
  //     loadContent("/weather/worksheets/worksheet.html");
     
  //   });
  //   $(".adj").on("click", function () {
  //     loadContent("/Adjectives/worksheets/worksheet.html");
     
  //   });
  //   $(".adv").on("click", function () {
  //     loadContent("/Adverbs/worksheets/worksheet.html");
     
  //   });
  //   $(".country").on("click", function () {
  //     loadContent("/countries/worksheets/worksheet.html");
     
  //   });
  //   $(".music").on("click", function () {
  //     loadContent("/Music/worksheets/worksheet.html");
     
  //   });
  //   $(".daily").on("click", function () {
  //     loadContent("/daily-routine/worksheets/worksheet.html");
     
  //   });
  //   $(".games").on("click", function () {
  //     loadContent("/games/worksheets/worksheet.html");
     
  //   });
  //   $(".alpha").on("click", function () {
  //     loadContent("/Alphabets/worksheets/worksheet.html");
     
  //   });
  
  //   $(".house").on("click", function () {
  //     loadContent("/house/worksheets/worksheet.html");
     
  //   });
  
  //   $(".jobs").on("click", function () {
  //     loadContent("/jobs/worksheets/worksheet.html");
     
  //   });
  
  //   $(".months").on("click", function () {
  //     loadContent("/months/worksheets/worksheet.html");
     
  //   });
  
  //   $(".class").on("click", function () {
  //     loadContent("/classroom/worksheets/worksheet.html");
     
  //   });
  
  //   $(".numbers").on("click", function () {
  //     loadContent("/numbers/worksheets/worksheet.html");
     
  //   });
  
  //   $(".phonics").on("click", function () {
  //     loadContent("/phonics/worksheets/worksheet.html");
     
  //   });
  
  //   $(".places").on("click", function () {
  //     loadContent("/places/worksheets/worksheet.html");
     
  //   });
  
  //   $(".questions").on("click", function () {
  //     loadContent("/questions/worksheets/worksheet.html");
     
  //   });
  
  //   $(".seasons").on("click", function () {
  //     loadContent("/seasons/worksheets/worksheet.html");
     
  //   });
  
  //   $(".shapes").on("click", function () {
  //     loadContent("/shapes/worksheets/worksheet.html");
     
  //   });
  
  //   $(".sports").on("click", function () {
  //     loadContent("/sports/worksheets/worksheet.html");
     
  //   });
  
  //   $(".time").on("click", function () {
  //     loadContent("/time/worksheets/worksheet.html");
     
  //   });
  
  //   $(".toys").on("click", function () {
  //     loadContent("/toys/worksheets/worksheet.html");
     
  //   });
  
  //   $(".transport").on("click", function () {
  //     loadContent("/transportations/worksheets/worksheet.html");
     
  //   });
  
  //   $(".verbs").on("click", function () {
  //     loadContent("/verbs/worksheets/worksheet.html");
     
  //   });
  //   $(".zoo").on("click", function () {
  //     loadContent("/zoo-animals/worksheets/worksheet.html");
  //     $("title").text($(this).text() + "Worksheets");
  //   });
  
  //   $(".sidebar-link").on("click", function () {
  //     $("#about").css("margin", "10px");
  //     $("#about").css("padding", "10px");
  //     $(".video-stream").css("marginBottom", "80px");
  //   });
  
  //   // add class py-2 to every element in the div .video-stream
  //   $(".video-stream").children().addClass("py-2");
  // });



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
