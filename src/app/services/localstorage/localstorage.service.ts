import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private loggedIn: boolean;
  private loginSubject = new Subject<boolean>();
  constructor() {
    this.isAlreadyLoggedIn();
  }

  isAlreadyLoggedIn(): boolean {
    this.loggedIn = localStorage.getItem('mobile') != null;
    this.loginSubject.next(this.loggedIn);
    return this.loggedIn;
  }

  setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
    this.loggedIn = true;
    this.loginSubject.next(this.loggedIn);
  }

  getLoginStatusObservable(): Observable<boolean> {
    return this.loginSubject.asObservable();
  }

  getLocalStorage(key: string): string {
    return localStorage.getItem(key);
  }

  logout(): void {
    localStorage.clear();
    this.loggedIn = false;
    this.loginSubject.next(this.loggedIn);
  }

  generateHeaderObject(): Object {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "authorization": localStorage.getItem("token")
    })
    let options = { headers: headers }
    return options;
  }

}
