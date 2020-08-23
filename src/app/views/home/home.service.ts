import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { ContactPerson, LocationServed, Client, CardNowrap, CardWrap, Carousel } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private jsonServerUrl = environment.jsonServerUrl;
  constructor(
    private http: HttpClient
  ) { }

  getRoute(r: string): string {
    return this.jsonServerUrl + r;
  }

  getContactPersons(): Observable<ContactPerson[]> {
    return this.http.get<ContactPerson[]>(this.getRoute('/contactPersons'));
  }
  getLocationsServed(): Observable<LocationServed[]> {
    return this.http.get<LocationServed[]>(this.getRoute('/locationsServed'));
  }
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.getRoute("/clients"));
  }
  getServices(): Observable<CardNowrap[]> {
    return this.http.get<CardNowrap[]>(this.getRoute('/services'));
  }
  getDomains(): Observable<CardWrap[]> {
    return this.http.get<CardWrap[]>(this.getRoute('/domains'));
  }
  getCarousels(): Observable<Carousel[]> {
    return this.http.get<Carousel[]>(this.getRoute('/carousels'));
  }
}
