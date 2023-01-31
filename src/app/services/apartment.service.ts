import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConst } from './api.const';
import { ApartmentList, Geocode, Record } from '@app/interfaces/list-items';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private records$ = new BehaviorSubject<Record[]>([]);

  constructor(private http: HttpClient) { }

  loadApartmentList() {
    this.http.get<ApartmentList>(ApiConst.APARTMENT_LIST_ITEMS)
      .pipe(
        map(response => response.records)
      )
      .subscribe(records => {
        this.records$.next(records)
      });
  }

  getRecords(): Observable<Record[]> {
    return this.records$
  }

  getGeoCodes(): Observable<Geocode[]> {
    return this.records$.pipe(
      map(records => records.map(record => record.geocode))
    );
  }
}
