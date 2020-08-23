import { Component, OnInit } from '@angular/core';

import { ContactPerson, LocationServed } from '@models/index';
import { CommonService } from '@services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // @Desc: storing ContactPerson Array
  // @Access: Public - Required to render in the template
  contactPersons: ContactPerson[];

  // @Desc: storing LocationServed Array
  // @Access: Public - Required to render in the template
  locationsServed: LocationServed[];

  developer: string = "Developed by Arnav Kumar (this.arnav@gmail.com)";

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getContactPerson();
    this.getLocationServed();
  }

  // @Desc: Requesting for Contact details
  // @From: CommonService
  getContactPerson(): void {
    this.commonService.getContactPersons()
      .subscribe(contactPerson => this.contactPersons = contactPerson);
  }

  // @Desc: Requesting for locaitons served
  // @From: CommonService
  getLocationServed(): void {
    this.commonService.getLocationsServed()
      .subscribe(locationsServed => this.locationsServed = locationsServed);
  }

}
