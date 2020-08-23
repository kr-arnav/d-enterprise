import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { NavigatorService } from '@services/navigator.service';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent implements OnInit {

  constructor(
    private regService: RegistrationService,
    private navigator: NavigatorService
  ) { }

  ngOnInit(): void {
  }

  // @Desc: registration request to the backend api from a freelencer
  register(userFormValue) {
    userFormValue.role = 'Freelancer';
    this.regService.postUser(userFormValue)
      .subscribe(user => {
        this.navigator.navigate('login');
      });
  }

}
