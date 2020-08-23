import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { LocalstorageService } from '@services/localstorage.service';
import { BankAccountInformation } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  // @Desc: getting Backend api url from environment
  // @Access: Private 
  private apiBaseUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) {
  }

  // @Desc: requestion Bank Accountc Information from the backend api
  getBankAccountInformation(): Observable<{ message: string, aInfo: BankAccountInformation }> {
    let res = this
      .http
      .get<{ message: string, aInfo: BankAccountInformation }>(
        `${this.apiBaseUrl}/user-information/bank-account-information/${this.localStorageService.getLocalStorage('mobile')}`
      )
    return res;
  }

  // @Desc: Requesting to register the Bank Account information to the backend api
  registerAcademicInformation(aInfo: BankAccountInformation): Observable<{ message: string, data: any }> {
    let res = this
      .http
      .post<{ message: string, data: any }>(
        `${this.apiBaseUrl}/user-information/bank-account-information/${localStorage.getItem("mobile")}`,
        aInfo,
        this.localStorageService.generateHeaderObject()
      );
    return res;
  }
}
