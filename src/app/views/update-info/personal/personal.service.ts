import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PersonalInformation } from '@models/index';
import { environment } from '@environments/environment';
import { LocalstorageService } from '@services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  // @Desc: getting Backend api url from environment
  // @Access: Private 
  private apiBaseUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) {
  }

  // @Desc: requestion PersonalInformation from the backend api
  getUserPersonalInformation(): Observable<{ message: string, pInfo: PersonalInformation }> {
    let res = this
      .http
      .get<{ message: string, pInfo: PersonalInformation }>(
        `${this.apiBaseUrl}/user-information/personal-information/${this.localStorageService.getLocalStorage('mobile')}`
      )
    return res;
  }

  // @Desc: Requesting to register the PersonalService to the backend api
  registerPersonalInformation(pInfo: PersonalInformation): Observable<{message: string, data: any}> {
    let res = this
      .http
      .post<{message: string, data: any}>(
        `${this.apiBaseUrl}/user-information/personal-information/${localStorage.getItem("mobile")}`,
        pInfo,
        this.localStorageService.generateHeaderObject()
      );
    return res;
  }

}
