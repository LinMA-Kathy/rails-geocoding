import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="map"
export default class extends Controller {
  static values = {apiKey: String}
  connect() {
    mapboxgl.accessToken = this.apiKeyValue;
    this.map = new mapboxgl.Map({
    // container: 'map', // container ID
    container: this.element,
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
  });
  this.#addMakersToMap();
  }

  #addMakersToMap(){
  new mapboxgl.Marker()
  .setLngLat([-65.017, -16.457])
  .addTo(this.map);
  }
}
