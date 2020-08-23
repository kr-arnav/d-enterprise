import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree } from '@angular/router';

import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { NavigatorService } from '@services/navigation/navigator.service';

@Injectable({
    providedIn: 'root'
})
export class UpdateInfoGuard implements CanActivate {

    constructor(
        private localStorageService: LocalstorageService,
        private navigator: NavigatorService
    ) { }

    canActivate(): boolean {
        this.localStorageService.getLoginStatusObservable()
            .subscribe(isLoggedIn => {
                if (isLoggedIn) {
                    return true
                }
                else {
                    this.navigator.navigate('/login');
                    return false;
                }
            });
        return this.localStorageService.isAlreadyLoggedIn();;
    }

}
