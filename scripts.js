$(document).ready(function() {
  if ($(window).width() <= 1024) {
    $(".hamburger").click(function() {
      $(".hamburger").toggleClass("is-active");
      $("nav").toggleClass("close");
      $(".burger-container").toggleClass("rounded-borders");
    });
    $("nav a").click(function() {
      $("nav").toggleClass("close");
      $(".hamburger").toggleClass("is-active");
      $(".burger-container").toggleClass("rounded-borders");
    });
  };
  if ($(window).width() > 1024) {
    $("nav").removeClass("close");
  };
  $(".nav-a").click(function(){
    $(".nav-a").addClass("active");
    $(".nav-b").removeClass("active");
    $(".nav-c").removeClass("active");
    $(".nav-d").removeClass("active");
  });

  $(".nav-b").click(function(){
    $(".nav-b").addClass("active");
    $(".nav-a").removeClass("active");
    $(".nav-c").removeClass("active");
    $(".nav-d").removeClass("active");
  });

  $(".nav-c").click(function(){
    $(".nav-c").addClass("active");
    $(".nav-a").removeClass("active");
    $(".nav-b").removeClass("active");
    $(".nav-d").removeClass("active");
  });

  $(".nav-d").click(function(){
    $(".nav-d").addClass("active");
    $(".nav-a").removeClass("active");
    $(".nav-b").removeClass("active");
    $(".nav-c").removeClass("active");
  });


});
