import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { ContactPerson } from '@models/contact-person.model';
import { Observable } from 'rxjs';
import { LocationServed } from '@models/location-served.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private jsonServerUrl = environment.jsonServerUrl;
  constructor(
    private http: HttpClient
  ) { }

  getContactPersons(): Observable<ContactPerson[]> {
    return this.http.get<ContactPerson[]>(`${this.jsonServerUrl}/contactPersons`);
  }
  getLocationsServed(): Observable<LocationServed[]> {
    return this.http.get<LocationServed[]>(`${this.jsonServerUrl}/locationsServed`);
  }
}
