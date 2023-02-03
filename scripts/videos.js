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
      // video.height = window.innerHeight;
      $("#streamer").css("height", "100%");
      // $("a.user-icon").css("width", "40%");
      // $(".user-menu-items a.user-icon ").css("width", "50%");
      $(".user-menu-items a.user-icon ").css("margin", "auto");
      $(".user-menu-items a.user-icon ").css("padding", "auto");
      $(".user-menu-items").css("right", "-100px");
      $(".user-menu-items").css("top", "-30px");
      $(".user-menu-items").css("position", "absolute");
      $(".user-menu-items").css("height", "50%");
      // $(".user-menu-items").css("width", "120%");
      $(".user-menu-items .user-icon").css("display", "inline-block");
      // create a menu icon for the user menu
      $(".user-menu-items .user-icon").css("font-size", "70%");
      $(".user-menu-items .user-icon").css("font-weight", "900");

      // make the media controls smaller



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
      // reset .user-menu-items style to default
      $(".user-menu-items").css("right", "100px");
      $(".user-menu-items").css("top", "8px");
      $(".user-menu-items").css("position", "relative");
      $(".user-menu-items").css("height", "100%");
      $(".user-menu-items").css("width", "100%");
      // $(".user-menu-items .user-icon").css("display", "block");
      $(".user-menu-items .user-icon").css("font-size", "100%");
      // $(".user-menu-items .user-icon").css("font-weight", "100");

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
  
  const allVideos = document.querySelectorAll(".video");
  
  allVideos.forEach((v) =>
  {
      v.addEventListener("mouseover", () =>
      {
          const video = v.querySelector("video");
          video.play();
      });
      v.addEventListener("mouseleave", () =>
      {
          const video = v.querySelector("video");
          video.pause();
      });
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
  
    // search the parent folder "youtuube" and find the the directory that matches the class



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
 

$(".sidebar-link").on("click", function () {
  // load the video from the source /content/vsrc  into the video-stream div if it has the same name as the clicked link
// if video name matches the data-topic attribute of the clicked link then load the video

var videoName = $(this).attr("data-topic");
// var videoSrc = ;


    $('.main-container').html("<video id='streamer' src='vsrc/" + videoName + ".mp4' controls></video>");
      // resize the video tag to fit the screen
      var video = document.querySelector("#streamer");
      video.width = window.innerWidth - 50;
      // 
      video.height = window.innerHeight - 100;

      // load the video 
      

      // $("#streamer").css("width", "80%");
      // add padding to the video stream div
      $("#streamer").css("padding", "50px");
      $("#streamer").css("padding-top", "0");
      // add margin to the right
      $("#streamer").css("margin-right", "50px");


});
// $(".main-container").load('#streamer');
  
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
