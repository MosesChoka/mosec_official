// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
      center: { lat: 0.0593318, lng: 34.2835138 },
      zoom: 14,
      mapId: "4504f8b37365c3d0",

    });

    const marker = new AdvancedMarkerElement({
       map,
       position: { lat: 0.0593318, lng: 34.2835138 },
    });
    

  }
  
  initMap();

  (function () {
    function textareaAutoHeight(el, offsetTop = 0) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight + offsetTop}px`;
    }

    (function () {
      const textareas = [
        '#hs-tac-message'
      ];

      textareas.forEach((el) => {
        const textarea = document.querySelector(el);
        const overlay = textarea.closest('.hs-overlay');

        if (overlay) {
          const { element } = HSOverlay.getInstance(overlay, true);

          element.on('open', () => textareaAutoHeight(textarea, 3));
        } else textareaAutoHeight(textarea, 3);

        textarea.addEventListener('input', () => {
          textareaAutoHeight(textarea, 3);
        });
      });
    })();
  })()