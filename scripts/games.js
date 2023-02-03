

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
      $(".chat-stream").css("display", "none");

      // new updates
      $(".menu").css("right", "0");
      $(".menu").css("top", "15px");

      // decrease the width of the iframe-container by 10% every 100px of window width
      $(".iframe-container").css("width", "100% - 10% * $windowWidth / 100");
      $(" .user-menu-items ").css("width", "100% - 20% * $windowWidth / 100");



    } else if ($windowWidth > 786) {
      $(".button-wrapper").css("right", "200px");
      $(".sidebar").css("display", "block");
      $(".m-icon").css("display", "none");
      $(".side-title").html("Menu");
      $(".m-icon").css("top", "17px");
      $("#about").css("left", "0%");
      // new updates
      $(".iframe-container").css("position", "absolute");
      // increase the width of the iframe-container by 10% every 100px of window width
      $(".iframe-container").css("width", "100% + 10% * $windowWidth / 100");
      
    

    } else {
      $(".button-wrapper").css("right", "460px");
      $(".sidebar").css("display", "block");
      $(".m-icon").css("display", "none");
      $(".side-title").html("Menu");
      $(".m-icon").css("top", "17px");
      $(".chat-stream").css("display", "block");
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
//   github pull command
    
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
      $(".related-resources").remove();
      $(".myTopBtn").remove();
      $(".related-resources").remove();
      $(".myTopBtn").remove();
      $(".video-p-subtitle").addClass("hide");
      $(this).toggleClass("show");
      $('#about').css("width", "100%");

      $('#about').css("width", "100%");

    });
  });
    $('.iframe-container').css("height", "520px");
    $('.iframe-container').css("overflow", "hidden");

  // can you refactor this code to make it more readable and reusable?
  
    // search the parent folder "youtuube" and find the the directory that matches the class


// remove a div with a class of "related-resources" from the DOM
$(".related-resources").remove();


// remove a div with a class of "related-resources" from the DOM


    // function for loading content
    function loadContent(href) {
      $(".main-container").scrollTop(0);
      // $("title").text($(href + " .video-p-title").text());
      $(".main-container").load(href);
      $(".main-container").addClass("show");
      $('.sidebar-link').on('click', function () {
        $("title").text($(this).text() + "Online Games");
       
      });
   
    };

    // sidebar-link on click function
    $(".sidebar-link").on("click", function () {
      var topicName = $(this).attr("data-topic");
      var href = "/" + topicName + "/game.html" + " #about";
      loadContent(href);
      // ma
      $('.iframe-container').css("height", "520px");
      $('.iframe-container').css("overflow", "auto");
      $('.iframe-container').css("object-fit", "cover");

      $('.main-container').css("width", "200%");
      $('.main-container').css("margin", "0");
      // $('.chat-stream').css("display", "none");

    });


    // 
    // $('.main-container').html("<video id='streamer' src='vsrc/"+ videoName + ".mp4' controls></video>");
    // remove content on click
  //   $(function () {
  //   $(".logo, .logo-expand, .discover").on("click", function (e) {
  //     loadContent("/animal/game.html")
  //     //
  //   });
  //   // load content on click
  //   $(".trending, .video").on("click", function () {
  //     loadContent("/body/game.html");
     
  //   });
  //   $(".days, .video").on("click", function () {
  //     loadContent("/days/game.html");
     
  //   });
  //   $(".food").on("click", function () {
  //     loadContent("/food/game.html");
     
  //   });
  //   $(".family").on("click", function () {
  //     loadContent("/family/game.html");
     
  //   });
  
  //   $(".colors").on("click", function () {
  //     loadContent("/colors/game.html");
     
  //   });
  //   $(".weather").on("click", function () {
  //     loadContent("/weather/game.html");
     
  //   });
  //   $(".adj").on("click", function () {
  //     loadContent("/Adjectives/game.html");
     
  //   });
  //   $(".adv").on("click", function () {
  //     loadContent("/Adverbs/game.html");
     
  //   });
  //   $(".country").on("click", function () {
  //     loadContent("/countries/game.html");
     
  //   });
  //   $(".music").on("click", function () {
  //     loadContent("/Music/game.html");
     
  //   });
  //   $(".daily").on("click", function () {
  //     loadContent("/daily/game.html");
     
  //   });
  //   $(".games").on("click", function () {
  //     loadContent("/games/game.html");
     
  //   });
  //   $(".alpha").on("click", function () {
  //     loadContent("/Alphabets/game.html");
     
  //   });
  
  //   $(".house").on("click", function () {
  //     loadContent("/house/game.html");
     
  //   });
  
  //   $(".jobs").on("click", function () {
  //     loadContent("/jobs/game.html");
     
  //   });
  
  //   $(".months").on("click", function () {
  //     loadContent("/months/game.html");
     
  //   });
  
  //   $(".class").on("click", function () {
  //     loadContent("/classroom/game.html");
     
  //   });
  
  //   $(".numbers").on("click", function () {
  //     loadContent("/numbers/game.html");
     
  //   });
  
  //   $(".phonics").on("click", function () {
  //     loadContent("/phonics/game.html");
     
  //   });
  
  //   $(".places").on("click", function () {
  //     loadContent("/places/game.html");
     
  //   });
  
  //   $(".questions").on("click", function () {
  //     loadContent("/questions/game.html");
     
  //   });
  
  //   $(".seasons").on("click", function () {
  //     loadContent("/seasons/game.html");
     
  //   });
  
  //   $(".shapes").on("click", function () {
  //     loadContent("/shapes/game.html");
     
  //   });
  
  //   $(".sports").on("click", function () {
  //     loadContent("/sports/game.html");
     
  //   });
  
  //   $(".time").on("click", function () {
  //     loadContent("/time/game.html");
     
  //   });
  
  //   $(".toys").on("click", function () {
  //     loadContent("/toys/game.html");
     
  //   });
  
  //   $(".transport").on("click", function () {
  //     loadContent("/transport/game.html");
     
  //   });
  
  //   $(".verbs").on("click", function () {
  //     loadContent("/verbs/game.html");
     
  //   });
  //   $(".zoo").on("click", function () {
  //     loadContent("/zoo-animals/game.html");
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
  // const savedData = localStorage.getItem("clicks");
  // var clicks = 0;
  // if (savedData !== null) {
  //   clicks = savedData;
  // } else {
  //   clicks = 0;
  // }
  // // clicks = savedData;
  // document.getElementById("clicks").innerHTML = clicks;
  // $(function () {
  //   $("#clicks").on("click", function () {
  //     document.getElementById("clicks").innerHTML = clicks;
  //     clicks++;
  //     localStorage.setItem("clicks", clicks);
  //   });
  
  //   if (localStorage && localStorage.getItem("clicks")) {
  //     clicks = localStorage.getItem("clicks");
  //   }
  // });
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
