import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { NavigatorService } from '@services/navigator.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor(
    private regService: RegistrationService,
    private navigator: NavigatorService
  ) { }

  ngOnInit(): void {
  }

  // @Desc: registration request to the backend api from a vendor
  register(userFormValue) {
    userFormValue.role = 'Vendor';
    alert(JSON.stringify(userFormValue))
    this.regService.postUser(userFormValue)
      .subscribe(user => {
        this.navigator.navigate('login');
      });
  }

}
