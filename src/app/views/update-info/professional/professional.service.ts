import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { LocalstorageService } from '@services/localstorage.service';
import { ProfessionalInformation } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  private apiBaseUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) { }

  getUserProfessionalInformation(): Observable<{ message: string, pInfo: ProfessionalInformation }> {
    let res = this
      .http
      .get<{ message: string, pInfo: ProfessionalInformation }>(
        `${this.apiBaseUrl}/user-information/professional-information/${this.localStorageService.getLocalStorage('mobile')}`
      )
    return res;
  }

  registerProfessionalInformation(pInfo: ProfessionalInformation): Observable<{ message: string, data: any }> {
    let res = this
      .http
      .post<{ message: string, data: any }>(
        `${this.apiBaseUrl}/user-information/professional-information/${localStorage.getItem("mobile")}`,
        pInfo,
        this.localStorageService.generateHeaderObject()
      );
    return res;
  }
}
