// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
      center: { lat: -4.020609, lng: 39.678760 },
      zoom: 14,
      mapId: "4504f8b37365c3d0",

    });

    const marker = new AdvancedMarkerElement({
       map,
       position: { lat: -4.020609, lng: 39.678760 },
    });

    marker.addListener('click', ({domEvent, latLng}) => {
      const {target} = domEvent;
      // Handle the click event.
      // ...
    });
    

  }
  
  initMap();