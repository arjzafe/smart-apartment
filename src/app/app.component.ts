import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Observable, Subscription } from 'rxjs';
import { Geocode, Record } from './interfaces/list-items';
import { ApartmentService } from './services/apartment.service';
import { MapboxService } from './services/mapbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private map!: mapboxgl.Map;
  apartmentRecords$!: Observable<Record[]>;
  geoCodeSubscription$!: Subscription;

  constructor(
    private apartmentService: ApartmentService,
    private mapBoxService: MapboxService
  ) { }

  ngOnInit(): void {
    this.mapBoxService.createMap('map');
    this.apartmentService.loadApartmentList();
  }

  loadPins() {
    this.apartmentRecords$ = this.apartmentService.getRecords();

    this.geoCodeSubscription$ = this.apartmentService.getGeoCodes().subscribe(geoCodes => {
      this.mapBoxService.loadPins(geoCodes);
    });
  }

  showAllPins() {
    this.mapBoxService.showAllPins();
  }

  removeAllPins() {
    this.apartmentRecords$ = new Observable;
    this.mapBoxService.clearMarkers();
  }

  zoomToPin(geoCode: Geocode) {
    this.mapBoxService.zoomToPin(geoCode);
  }

  ngOnDestroy(): void {
    this.mapBoxService.remove();
    this.geoCodeSubscription$.unsubscribe();
  }
}
