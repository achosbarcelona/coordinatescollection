//Custom
google.maps.visualRefresh = true;
$(document).ready(function(){
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
  });
  $("#contact-us-mini li").each(function(i){
    $(this).delay(i * 500).animate({"opacity":"1"}, 700);
  });
  $(".logo").delay(1000).animate({"opacity":"1"}, 700);
  $(".made-in-la-logo").delay(1500).animate({"opacity":"1"}, 700);
  $("#learn-more-home").delay(1800).animate({"opacity":"1"}, 700);


  $("#product-url-legend").click(function(){
    $("#overlay-content-legend").delay(500).css({"display":"block"}).animate({"opacity":"1"}, 700);
  });
  $("#product-url-meridian").click(function(){
    $("#overlay-content-meridian").delay(500).css({"display":"block"}).animate({"opacity":"1"}, 700);
  });
  $("#product-url-horizon").click(function(){
    $("#overlay-content-horizon").delay(500).css({"display":"block"}).animate({"opacity":"1"}, 700);
  });
  // Listen for these anchors being called.
  $("#jump-1").click(function(){
    $("#mini-globe").delay(1000).animate({"opacity":"1","margin-top":"15px"}, 700);
    $("#every-memory").delay(1000).animate({"opacity":"1","margin-top":"15px"}, 700);
    $("#hiw").delay(1200).animate({"opacity":"1","margin-top":"15px"}, 700);
  });

  $("#jump-2").click(function(){
    $("#p-line").delay(1000).animate({"opacity":"1","margin-top":"15px"}, 700);
    $("#p-desc").delay(1200).animate({"opacity":"1","margin-top":"15px"}, 700);
  });

  $("#jump-3").click(function(){
    $("#header").delay(1000).animate({"opacity":"1"}, 700);
    $("#products-load").delay(1300).animate({"opacity":"1"}, 700);
    $("#no-border").delay(1500).animate({"opacity":"1","margin-top":"15px"}, 700);
  });




});//Closed