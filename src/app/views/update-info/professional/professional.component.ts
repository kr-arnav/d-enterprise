import { Component, OnInit } from '@angular/core';

import { ProfessionalInformation } from '@models/index';
import { NavigatorService } from '@services/navigator.service';
import { ProfessionalService } from './professional.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  // @Desc: initializing ProfessionalInformation
  // @Access: Public - to access from the template
  pInfo: ProfessionalInformation = {
    organisationName: '',
    designation: '',
    natureOfWork: '',
    fromDate: null,
    toDate: null,
    totalExperienceInMonth: null
  };

  // @Desc: To be displayed as page title
  // @Access: Public - to access from the template
  title: string = "Professional Information";

  constructor(
    private navigator: NavigatorService,
    private professionalService: ProfessionalService
  ) { }

  ngOnInit(): void {
    this.getProfessionalInfo();
  }

  // @Desc: Subscribe to ProfessionalInformationService for fetching ProfessionalInformation
  getProfessionalInfo(): void {
    this.professionalService.getUserProfessionalInformation()
      .subscribe(d => {
        if (d.pInfo != undefined) {
          this.pInfo = d.pInfo
        }
      });
  }

  // @Desc: Subscribe to ProfessionalInformationService for registering ProfessionalInformation
  register() {
    this.professionalService.registerProfessionalInformation(this.pInfo)
      .subscribe(d => {
        if (d.data.ok == 1)
          this.navigator.navigate('/update-info/bank-account');
      });
  }

}
