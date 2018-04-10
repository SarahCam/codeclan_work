const initialize = function() {

  const container = document.getElementById('main-map');
  const center = {lat: 56.1703, lng: -4.02793};
  const myPlace = {lat: 55.9504, lng: -4.00793};
  const zoom = 9;

  const map = new MapWrapper(container, center, zoom);
  map.addMarker(center);
  map.addMarker(myPlace);

  const bounceButton = document.getElementById('button-bounce-markers');
  bounceButton.addEventListener('click', map.bounceMarkers.bind(map));

  map.addClickEvent();
}

window.addEventListener('DOMContentLoaded', initialize);
