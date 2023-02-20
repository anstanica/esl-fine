// $(window).on('resize', resize);
// windows onscroll
// create topFunction() function

// .m-icon onclick display sidebar

//

// onc refer-div display on click
// get ppp button

// When the document is ready, do the following:

// const strongTags = document.querySelectorAll("strong");

// if (!$("strong").hasClass("border-y"))
// {
//     $("strong").addClass("border-y");
// }

const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
  v.addEventListener("mouseover", () => {
    const video = v.querySelector("video");
    video.play();
  });
  v.addEventListener("mouseleave", () => {
    const video = v.querySelector("video");
    video.pause();
  });
});

$(function () {
  $(".sidebar-link").on("click", function () {
    $(".main-container").removeClass("show");
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");

    $(this).addClass("is-active");
    // $(".video-p-subtitle").addClass("hide");
    $(".button-wrapper").show();
    if (window.innerWidth < 768) {
      $(".sidebar").hide();
    }
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

  $(".main-container").html(
    "<video id='streamer' src='vsrc/" + videoName + ".mp4' controls></video>"
  );
  // resize the video tag to fit the screen
  var video = document.querySelector("#streamer");
  // add a play icon to the video

  // add a poster seeking a screenshot from specific time in the videos
  // create an image tag

  // poster.setAttribute("src", image);
  video.setAttribute("poster", "vsrc/posters/" + videoName + ".png");
  // console.log(poster);
  video.width = window.innerWidth;
  //
  video.height = window.innerHeight ;
    // hide the controls after 3 seconds of inactivity on the video then show them again when the mouse is moved
   


  

  // if screen width is less than 768px then set the video width to 100%
  if (window.innerWidth < 768) {
    $("#streamer").css("width", "100%");
    $("#streamer").css("height", "50.25%");
  }
  $("#streamer").css("margin-top", "50px");
});
