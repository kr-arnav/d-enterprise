import { Component, OnInit } from '@angular/core';

import { BankAccountInformation } from '@models/index';
import { NavigatorService } from '@services/navigation/navigator.service';
import { BankAccountService } from '@services/bank-account/bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {

  // @Desc: initializing Bank Account info
  // @Access: Public - to access from the template
  aInfo: BankAccountInformation = {
    accountNumber: null,
    bankName: null,
    branchName: null,
    ifscCode: null,
    accountHolderName: null,
    panCardNo: null
  };

  // @Desc: To be displayed as page title
  // @Access: Public - to access from the template
  title: string = "Bank Account Information";

  constructor(
    private navigator: NavigatorService,
    private baService: BankAccountService
  ) { }

  ngOnInit(): void {
    this.getBankAccountInformation();
  }

  // @Desc: Subscribe to bank account service for fetching Bank Account informaiton
  getBankAccountInformation(): void {
    this.baService.getBankAccountInformation()
      .subscribe(d => {
        if (d.aInfo != undefined)
          this.aInfo = d.aInfo;
      });
  }

  // @Desc: Subscribe to academic service for registering Bank Account info
  register() {
    this.baService.registerAcademicInformation(this.aInfo)
      .subscribe(d => {
        if (d.data.ok == 1)
          this.navigator.navigate('/update-info/declaration');
      });
  }


}
