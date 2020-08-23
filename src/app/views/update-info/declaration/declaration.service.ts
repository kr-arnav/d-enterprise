import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { LocalstorageService } from '@services/localstorage.service';
import { AgreedTerms } from '@models/index';


@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  // @Desc: getting Backend api url from environment
  // @Access: Private 
  private apiBaseUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) {
  }

  // @Desc: requestion AgreedTerms from the backend api
  getAgreedTerms(): Observable<{ message: string, aTerms: AgreedTerms }> {
    let res = this
      .http
      .get<{ message: string, aTerms: AgreedTerms }>(
        `${this.apiBaseUrl}/user-information/terms-agreement/${this.localStorageService.getLocalStorage('mobile')}`
      )
    return res;
  }

  // @Desc: Requesting to register the AgreedTerms to the backend api
  registerAgreedTerms(aTerms: AgreedTerms): Observable<{message: string, data: any}> {
    let res = this
      .http
      .post<{message: string, data: any}>(
        `${this.apiBaseUrl}/user-information/terms-agreement/${localStorage.getItem("mobile")}`,
        aTerms,
        this.localStorageService.generateHeaderObject()
      );
    return res;
  }
}
