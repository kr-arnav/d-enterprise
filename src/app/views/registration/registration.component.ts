import { Component, OnInit } from '@angular/core';

import { Button } from '@models/index';
import { NavigatorService } from '@services/navigator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // @Desc: title for Vendor and Freelancer
  // @Access: Public - to use in template
  title: string = 'Registration Form';
  btns: Button[] = [
    { name: 'Freelancer', uri: '/registration/freelancer' },
    { name: 'Vendor', uri: '/registration/vendor' }
  ];
  constructor(
    private navigator: NavigatorService
  ) { }

  ngOnInit(): void {
    this.updateTitle();
  }

  // @Desc: Update title for vendor and freelancer
  updateTitle() {
    this.title = this.navigator.getRoute().split('/')[this.navigator.getRoute().split('/').length - 1] +
      " " + 'Registration Form';
  }

}
