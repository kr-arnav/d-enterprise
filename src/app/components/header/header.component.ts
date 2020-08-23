import { Component, OnInit, HostListener } from '@angular/core';

import { LocalstorageService } from '@services/localstorage.service';
import { NavigatorService } from '@services/navigator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private loggedIn: boolean;
  screenWidth;    // screenWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }
  constructor(
    private localStorageService: LocalstorageService,
    private navigator: NavigatorService
  ) { }

  ngOnInit(): void {
    this.getLoginStatus();
    this.getScreenSize();
  }

  // @Desc: Fetching screen size to ensure responsiveness
  // @From winodw object
  getScreenSize(): void {
    this.screenWidth = window.innerWidth;   // initializing screenWidth
  }

  // @Desc: Fetching LoginStatus
  // @From: LocalStorageService
  getLoginStatus(): void {
    if (this.localStorageService.isAlreadyLoggedIn()) {
      this.loggedIn = true;
    }
    this.localStorageService.getLoginStatusObservable()
      .subscribe(b => this.loggedIn = b);
  }

  // @Desc: Showing navigation for mobile
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  // @Desc: Hiding navigation for mobile
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // @Desc: Logging out
  logout() {
    if (this.localStorageService.isAlreadyLoggedIn()) {
      this.localStorageService.logout();
    }
    else {
      this.navigator.navigate('/login');
    }
  }


}
