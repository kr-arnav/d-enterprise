import { Component, OnInit } from '@angular/core';
import { School } from '@models/sub-models';
import { AcademicInformation } from '@models/user-academic-information.model';
import { AcademicService } from './academic.service';
import { NavigatorService } from '@services/navigator.service';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {

  // @Desc: initializing academic info
  // @Access: Public - to access from the template
  aInfo: AcademicInformation = {
    twelfth: { name: '', specialization: '', yearOfPassing: null, marks: null },
    diplomaOrGraduation: { name: '', specialization: '', yearOfPassing: null, marks: null },
    postGraduation: { name: '', specialization: '', yearOfPassing: null, marks: null },
    other: { name: '', specialization: '', yearOfPassing: null, marks: null }
  };

  // @Desc: To be displayed as page title
  // @Access: Public - to access from the template
  title: string = "Academic Information";

  constructor(
    private academicService: AcademicService,
    private navigator: NavigatorService
  ) { }

  ngOnInit(): void {
    this.getAcademicInfo();
  }

  // @Desc: Subscribe to academic service for fetching academic informaiton
  getAcademicInfo(): void {
    this.academicService.getUserAcademicInformation()
      .subscribe(d => {
        if (d.aInfo.twelfth != undefined)
          this.aInfo = d.aInfo;
      });
  }

  // @Desc: Subscribe to academic service for registering academic info
  register() {
    this.academicService.registerAcademicInformation(this.aInfo)
      .subscribe(d => {
        if (d.data.ok == 1)
          this.navigator.navigate('/update-info/professional');
      });
  }

}
