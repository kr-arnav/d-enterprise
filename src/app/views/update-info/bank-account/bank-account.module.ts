import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankAccountComponent } from './bank-account.component';
import { FormsModule } from '@angular/forms';
import { BankAccountService } from './bank-account.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [BankAccountComponent],
  imports: [
    BankAccountRoutingModule,
    SharedModule
  ],
  providers: [BankAccountService]
})
export class BankAccountModule { }
