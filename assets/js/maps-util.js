function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(22.506495,88.357323),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  new google.maps.Marker({
      position: new google.maps.LatLng(22.506495,88.357323),
      map: map
  });

}
google.maps.event.addDomListener(window, 'load', initialize);