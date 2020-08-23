import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { AcademicInformation } from '@models/index';
import { LocalstorageService } from '@services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  // @Desc: getting Backend api url from environment
  // @Access: Private 
  private apiBaseUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) {
  }

  // @Desc: requestion Academic Information from the backend api
  getUserAcademicInformation(): Observable<{ message: string, aInfo: AcademicInformation }> {
    let res = this
      .http
      .get<{ message: string, aInfo: AcademicInformation }>(
        `${this.apiBaseUrl}/user-information/academic-information/${this.localStorageService.getLocalStorage('mobile')}`
      )
    return res;
  }

  // @Desc: Requesting to register the Academic information to the backend api
  registerAcademicInformation(aInfo: AcademicInformation): Observable<{message: string, data: any}> {
    let res = this
      .http
      .post<{message: string, data: any}>(
        `${this.apiBaseUrl}/user-information/academic-information/${localStorage.getItem("mobile")}`,
        aInfo,
        this.localStorageService.generateHeaderObject()
      );
    return res;
  }
}
