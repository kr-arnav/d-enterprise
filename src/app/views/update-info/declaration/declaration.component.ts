import { Component, OnInit } from '@angular/core';

import { NavigatorService } from '@services/navigation/navigator.service';
import { DeclarationService } from '@services/declaration/declaration.service';
import { AgreedTerms } from '@models/index';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {

  // @Desc: initializing AgreedTerms
  // @Access: Public - to access from the template
  agreedTerms: AgreedTerms = { agreed: false };

  // @Desc: To be displayed as page title
  // @Access: Public - to access from the template
  title: string = "Declaration";

  constructor(
    private navigator: NavigatorService,
    private declarationService: DeclarationService
  ) { }

  ngOnInit(): void {
    this.getAgreedTerms();
  }

  // @Desc: Subscribe to bank account service for fetching Agreed Terms
  getAgreedTerms(): void {
    this.declarationService.getAgreedTerms()
      .subscribe(d => {
        if (d.aTerms.agreed != undefined) {
          this.agreedTerms = d.aTerms;
        }
      });
  }

  // @Desc: Subscribe to bank account service for registring Agreed Terms
  register() {
    this.declarationService.registerAgreedTerms(this.agreedTerms)
      .subscribe(d => {
        if (d.data.ok == 1)
          this.navigator.navigate('/update-info/dashboard');
      });
  }

}
