import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '@models/index';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

import { LocalstorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) { }

  // Desc: Registration request to the backend
  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/user/register', user);
  }

}
