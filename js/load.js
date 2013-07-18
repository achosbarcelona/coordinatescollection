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
  $("#close-overlay-legend").click(function(){
    event.preventDefault();
    $("#overlay-content-legend").delay(500).animate({"opacity":"0"}, 700).css({"display":"none"});
  });
  $("#close-overlay-meridian").click(function(){
    event.preventDefault();
    $("#overlay-content-meridian").delay(500).animate({"opacity":"0","display":"none"}, 700).css({"display":"none"});
  });
  $("#close-overlay-horizon").click(function(){
    event.preventDefault();
    $("#overlay-content-horizon").delay(500).animate({"opacity":"0","display":"none"}, 700).css({"display":"none"});
  });
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
    });
// Store functionality changes
//Collection selection
    $("body").on( "click", "a.selection", function()
    {
      $("#overlay").fadeIn(300);
      setGallery();
      var designs = $("ul#custom-selections-design");
      var selected =  this.id;
      $.each(designs, function(index, item){
        if($(item).hasClass( selected )  )
        {
          $(item).show();
        }else{
          $(item).hide();
        }
      });
    });



   function setGallery(){
    // Gallery
      if($("#gallery").length){

          // Declare variables
          var totalImages = jQuery("#gallery > li").length,
              imageWidth = jQuery("#gallery > li:first").outerWidth(true),
              totalWidth = imageWidth * totalImages,
              visibleImages = Math.round(jQuery("#gallery-wrap").width() / imageWidth),
              visibleWidth = visibleImages * imageWidth,
              stopPosition = (visibleWidth - totalWidth);

          $("#gallery").width(totalWidth);

         $("#gallery-prev").click(function(){
              if($("#gallery").position().left < 0 && !$("#gallery").is(":animated")){
                  $("#gallery").animate({left : "+=" + imageWidth + "px"});
              }
              return false;
          });

          $("#gallery-next").click(function(){
              if($("#gallery").position().left > stopPosition && !$("#gallery").is(":animated")){
                  $("#gallery").animate({left : "-=" + imageWidth + "px"});
              }
              return false;
          });
      }
   }


    $("body").on("click", "ul#custom-nav li div", function(){
    var selected = this.id, target = "#custom-selections-"+selected, navs = $("ul#custom-nav li div");

    $.each(navs, function(index, item){
      if( item.id == selected){
        $("#gallery").animate({"left": -($(target).position().left)}, 600);
      }
    });

      //$(value).removeClass("hit");
       var list = $(".sku");

  });

  function nextStep(elm){
      $(elm).addClass("active");
  }

  $("ul#custom-selections-type li h3").click(function(){
    var selections = $("ul#custom-selections-type li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
    });
    $(this).addClass("hit");
    $("#sku-type").html(this.innerHTML);
    //console.log(this.innerHTML);
  });

  $("ul#custom-selections-size li h3").click(function(){
    var selections = $("ul#custom-selections-size li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
    });
    $(this).addClass("hit");
    $("#sku-size").html(this.innerHTML);

  });

  $("ul#custom-selections-design li h3").click(function(){
    var selections = $("ul#custom-selections-design li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
    });
    $(this).addClass("hit");
    $("#sku-design").html($(this).children().attr("title"));
    $(".custom").attr("src", $(this).children().attr("src") );
  });

  $("ul#custom-selections-metal li h3").click(function(){
    var selections = $("ul#custom-selections-metal li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
    });
    $(this).addClass("hit");

    $("#sku-metal").html(this.innerHTML);

    selected = $(this).children().attr("title").toLowerCase().replace(" ", "_");
    line = $(".custom").attr("src").toString();
    console.log(line);
    var alt = "ring_";
    if(line.search(alt) < 0 ) alt = "bracelet_";
    var src = line.split(alt);
    $(".custom").attr("src", src[0]+alt+selected+".jpg") ;

//    $(".custom").attr("src", $(this).children().attr("src") );

  });

  $("ul#custom-selections-finish li h3").click(function(){
    var selections = $("ul#custom-selections-finish li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
    });
    $(this).addClass("hit");

    $("#sku-finish").html(this.innerHTML);
    selected = $(this).attr("class").toLowerCase().replace(" ", "_").replace("_hit", "").replace(" hit", "");
    var line = $(".custom").attr("src").toString();
    var alt = "ring_";
    if(line.search(alt) < 0 ) alt = "bracelet_";
    var src = line.split(alt);
    $(".custom").attr("src", src[0]+alt+selected+".jpg") ;
  });


  $("ul#custom-selections-stone li h3").click(function(){
    var selections = $("ul#custom-selections-stone li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
    });
    $(this).addClass("hit");
    $("#sku-stone").html(this.innerHTML);
  });

  $("span.clear").click(function(){
    cleanSlate();
  });

  function cleanSlate(){
     var list = $(".sku");
     $.each(list , function(index, value){
      list[index].innerHTML = "";
     });

    var selections = $("ul#custom-selections-type li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
      $(value).removeClass("active");
    });

    selections = $("ul#custom-selections-size li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
      $(value).removeClass("active");
    });

    selections = $("ul#custom-selections-design li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
      $(value).removeClass("active");
    });

    selections = $("ul#custom-selections-metal li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
      $(value).removeClass("active");
    });

    selections = $("ul#custom-selections-finish li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
      $(value).removeClass("active");
    });

    selections = $("ul#custom-selections-stone li h3");
    $.each(selections, function(index, value){
      $(value).removeClass("hit");
      $(value).removeClass("active");
    });
  }

    $("body").delegate(".purchase", "click", function() {

       var list = $(".sku");
       $.each(list, function(index, item){
       // console.log(item.id + ":" + item.innerHTML);
       var err = item.id.split("-");
        if(!item.innerHTML) item.innerHTML = "Please make a selection for "+err[1];
      });
    });

    function purchase(){
      $.ajax({
        type: "POST",
        url: "http://coordinatescollection.fd9.com/shop/api/relay.php",
        data: {"account": "new","email":email, "password":password},
        success: function(data){ var obj = jQuery.parseJSON(data); validateObj(obj); },
        fail: function(data){ console.log("error");   }
      });

    }





});//Closed