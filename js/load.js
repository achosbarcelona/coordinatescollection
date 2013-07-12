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
  $("#p-line").delay(1800).animate({"opacity":"1"}, 700);
});