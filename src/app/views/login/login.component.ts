import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { LocalstorageService } from '@services/localstorage.service';
import { NavigatorService } from '@services/navigator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @Desc: Title for the Form
  // @Access: Public
  title: string = 'Login Form';

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalstorageService,
    private navigationService: NavigatorService
  ) { }

  ngOnInit(): void {
    this.nav();
  }
  
  // @Desc: Check if already logged in and redirect accordingly
  nav(): void {
    if(this.localStorageService.isAlreadyLoggedIn()){
      this.navigationService.navigate('/update-info');
    }
  }

  // @Desc: login if not already
  login(userFormValue) {
    this.loginService.loginUser(userFormValue)
      .subscribe(d => {
        if (d.data.length > 0) {
          this.localStorageService.setLocalStorage('token', d.data);
          this.localStorageService.setLocalStorage('mobile', userFormValue.mobile);
          this.navigationService.navigate('/update-info');
        }
      },
      err => {
        console.log(JSON.stringify(err.error))
      }
      )
  }

}
