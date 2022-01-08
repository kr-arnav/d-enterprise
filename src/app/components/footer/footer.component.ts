import { Component, OnInit } from '@angular/core';

import { ContactPerson, LocationServed } from '@models/index';
import * as json from "@assets/local.json";

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

  developer: string = "Developed by BDSV PVT.LTD. (info@bdsv.in)";

  constructor() { }

  ngOnInit(): void {
    this.locationsServed = json.locationsServed;
    this.contactPersons = json.contactPersons;
  }

}
