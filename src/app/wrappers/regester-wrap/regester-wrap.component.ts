import { Component, OnInit, Input } from '@angular/core';
import { NavigatorService } from '@services/navigator.service';
import { RegistrationService } from '@services/registration.service';
import { User } from '@models/user.model';

@Component({
  selector: 'app-regester-wrap',
  templateUrl: './regester-wrap.component.html',
  styleUrls: ['./regester-wrap.component.scss']
})
export class RegesterWrapComponent implements OnInit {

  @Input() public role: string;
  public user: User;
  public error: string;

  constructor(
    private regService: RegistrationService,
    private navigator: NavigatorService
  ) { }

  ngOnInit(): void {
    this.user = new User(this.role, '', '');
  }

  // @Desc: registration request to the backend api from a freelencer
  register() {
    this.regService.postUser(this.user)
      .subscribe(
        user => {
          this.navigator.navigate('login');
        },
        err => {
          this.error = err.error.message;
        }
      );
  }

}
