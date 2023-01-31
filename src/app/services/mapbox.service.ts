import { Injectable } from '@angular/core';
import { Geocode } from '@app/interfaces/list-items';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  private map!: mapboxgl.Map;
  private bounds!: mapboxgl.LngLatBounds;
  private markers: mapboxgl.Marker[] = [];

  createMap(elementId: string, options: {} = {}): void {
    const { accessToken, style } = environment.mapbox
    this.map = new mapboxgl.Map({
      container: elementId,
      zoom: 13,
      style,
      accessToken,
      center: [-96.752014, 32.854499],
      ...options
    });
    this.bounds = new mapboxgl.LngLatBounds();
  }

  loadPins(geoCodes: Geocode[]) {
    this.clearMarkers();
    geoCodes.forEach(geoCode => {
      const lngLat = this.makeLngLat(geoCode);
      const markerOptions = {
        color: 'red'
      };

      const marker = new mapboxgl.Marker(markerOptions)
        .setLngLat(lngLat)
        .addTo(this.map);

      marker.getElement().addEventListener('click', (e) => this.zoomToPin(geoCode));

      this.bounds.extend(lngLat);
      this.markers.push(marker);
    });
  }

  showAllPins() {
    return this.map.fitBounds(this.bounds, { padding: 100 });
  }

  clearMarkers() {
    if (this.markers)
      this.markers.forEach(marker => marker.remove());
  }

  zoomToPin(geoCode: Geocode) {
    const lngLat = this.makeLngLat(geoCode);

    this.showAllPins().easeTo({
      center: lngLat,
      zoom: 19,
      duration: 3000
    });
  }

  remove() {
    this.map.remove();
    this.bounds = new mapboxgl.LngLatBounds();
    this.markers = [];
  }

  private makeLngLat(geoCode: Geocode): mapboxgl.LngLat {
    const { Longitude, Latitude } = geoCode;
    return new mapboxgl.LngLat(Number(Longitude), Number(Latitude));
  }
}
