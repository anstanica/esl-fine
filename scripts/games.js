

$(function () {
    $(".sidebar-link").on("click", function () {
      $(".sidebar-link").removeClass("is-active");
  
      $(this).addClass("is-active");
    });
  });
  

  
function loadContent(href) {
  $(".main-container").scrollTop(0);
  // $("title").text($(href + " .video-p-title").text());
  $(".main-container").load(href);
 
  $('.sidebar-link').on('click', function () {
    $("title").text($(this).text() + "Online Games");
   
  });

};


  $(function () {
  $(".sidebar-link").on("click", function () {
    var topicName = $(this).attr("data-topic");
    if (topicName){
    var href = "/" + topicName + "/game.html" + " #about";
    loadContent(href);
    // ma
    $('.iframe-container').css("height", "520px");
    $('.iframe-container').css("overflow", "auto");
    $('.iframe-container').css("object-fit", "cover");
  }
    // $('.main-container').css("width", "200%");
    // $('.main-container').css("padding", "auto");
    // $('.chat-stream').css("display", "none");
  });
  });
  $(".zoo").on("click", function () {
    loadContent("/zoo-animals/game.html" + " #about");
   
  });

  $(".animals").on("click", function () {
    // if width is more than 768px
    if ($(window).width() > 768) 
     {
    $(".main-container").css("margin-left", "-120px");
    $(".main-container").css("padding-left", "-120px");
    } else {
      $(".main-container").css("margin-left", "-40px");
      // $(".main-container").css("padding-left", "-100px");
 
    }
  }); 

// on scrolling resize the header by 20%
$("body").on("scroll", function () {
  $("header").css("height", "70%");
  
} 

);