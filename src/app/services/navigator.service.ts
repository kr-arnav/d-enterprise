import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  jsonServerBaseUrl: string = environment.jsonServerUrl;
  privateprotectedRoutes: string[];
  constructor(
    private router: Router
  ) { }

  navigate(uri: string): void {
    this.router.navigate([uri]);
  }

  getRoute(): string {
    return this.router.url;
  }
}
