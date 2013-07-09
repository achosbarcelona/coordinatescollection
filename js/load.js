//Custom
google.maps.visualRefresh = true;
$(document).ready(function(){
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
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

});