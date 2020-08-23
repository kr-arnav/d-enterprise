import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@models/user.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Token } from '@models/token.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // @Desc: backend api url
  // @Access: private
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  // @Desc: Login request to backend
  loginUser(user: User): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + '/user/login', user);
  }

}
