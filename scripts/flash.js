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
      $(".m-icon").css("display", "block");
      $(".button-wrapper").css("right", "0");
      $(".button-wrapper").css("top", "70px");
      $(".search-bar").css("width", "75%");
      $(".search-bar").css("marginLeft", "30px");
      $(".search-bar input").css("width", "75%");
      $(".search-bar").css("left", "50px");
     
    } else if ($windowWidth < 992) {
      $(".button-wrapper").css("right", "200px");
  
    } else {
      $(".button-wrapper").css("right", "460px");
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
    // on toggle sidebar 
    // if sidebar is visible
 
    if (".m-icon"){
    //  make the .search-bar left 50px
    
      $(".logo-expand").hide();
      $(".m-icon").css("left", "15px");
   
    } else {
     
        $(".logo-expand").show();
        $(".m-icon").css("left", "0");
        $(".m-icon").css("top", "0");
      }
    });
    $(window).on("load", function () {
        $("iframe").each(function () {
            $(this).attr("src", $(this).attr("data-src"));

        });
    });
  
  
  
  $(function () {
    $(".sidebar-link").on("click", function () {
      $(".main-container").removeClass("show");
      $(".main-container").scrollTop(0);
      $(".video-p-subtitle").addClass("hide");
    });
    // if the .sidebar is invisible then make the .search-bar left 50px


  });
  
  // can you refactor this code to make it more readable and reusable?
  

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
  
      