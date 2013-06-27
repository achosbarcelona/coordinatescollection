//Custom
google.maps.visualRefresh = true;
$(document).ready(function(){
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  });
  $('#map_canvas').gmap({'scrollwheel': false,'disableDefaultUI':true}).bind('init', function() {
  $.getJSON('find.json', function(data){
            $.each(data.markers, function(i, marker){
              $('#map_canvas').gmap('addMarker', {
                'position': new google.maps.LatLng(marker.latitude, marker.longitude), 'bounds': true }
                ).click(function() {
            $('#map_canvas').gmap('openInfoWindow', { 'content': marker.content }, this);
            });
          });
        });
        });

  $('article').imagesLoaded({
      callback: function ($images, $proper, $broken) {
        $images.each( function() {
          var $h = this.height;
          var $w = parseInt(this.width, 10);


          if (parseInt(this.width, 10) > $('article').width()) {
            $marginLeft = -(parseInt(this.width, 10) - $('article').width()) / 2;
          } else {
            $marginLeft = 'auto';
          }

          $(this).css({
            height: parseInt(this.height, 10),
            width: $w,
            'margin-left': $marginLeft
          });
        });
        $('article:not(.nofocusoperandi)').focusoperandi({
          ignoreClass: 'ignore',
          totalWords: words,
          onScroll: scroll,
          scrollComplete: complete,
          startShow: $('.header-inner').find('h2').offset().top + $('.header-inner').find('h2').height() + 100
        });
        function words(data) {
          $('#totalWords').text(data);
        }
        function scroll(data) {
         $('#leftcount').text(data['totalLeft']);
          if(data['totalLeft'] <= 0 ) {
            $("#leftcount").fadeOut(200);
          }
        }
        function complete(data) {
          $('#next').fadeIn(800);
          $("#leftcount").fadeOut(200);
        }
      }
    });


});