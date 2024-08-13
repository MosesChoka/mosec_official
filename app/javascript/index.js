async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
      center: { lat: 0.0593318, lng: 34.2835138 },
      zoom: 14,
    });
    const marker = new AdvancedMarkerElement({
      map,
      position: { lat: 0.0593318, lng: 34.2835138 },
    });
  }
  
  initMap();