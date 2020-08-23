import { Component, OnInit } from '@angular/core';

import { PersonalInformation } from '@models/index';
import { NavigatorService } from '@services/navigation/navigator.service';
import { PersonalService } from '@services/personal/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  // @Desc: initializing PersonalInformaiton
  // @Access: Public - to access from the template
  pInfo: PersonalInformation = {
    name: { fName: '', mName: '', lName: '' },
    dob: '',
    gender: '',
    contact: { cityCode: '', landlineNo: '', mobileNo1: '', mobileNo2: '' },
    guardian: { fatherName: '', fatherMobile: '', motherName: '', motherMobile: '' },
    presentAddress: { address: '', pincode: '' },
    permanentAddress: { address: '', pincode: '' }
  };

  // @Desc: To be displayed as page title
  // @Access: Public - to access from the template
  title: string = "Personal Information";
  date: string = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;

  constructor(
    private navigator: NavigatorService,
    private personalService: PersonalService
  ) { }

  ngOnInit(): void {
    this.getPersonalInformation();
  }

  // @Desc: Subscribe to PersonalInformationService for fetching PersonalInformaiton
  getPersonalInformation(): void {
    this.personalService.getUserPersonalInformation()
      .subscribe(d => {
        if (d.pInfo.name != undefined) {
          this.pInfo = d.pInfo;
          this.pInfo.dob = this.pInfo.dob.substring(0, 10)
        }
      });
  }

  // @Desc: Subscribe to PersonalInformationService for registering PersonalInformaiton
  register() {
    this.personalService.registerPersonalInformation(this.pInfo)
      .subscribe(d => {
        if (d.data.ok == 1)
          this.navigator.navigate('/update-info/academic');
      });
  }

}
