import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeclarationRoutingModule } from './declaration-routing.module';
import { DeclarationComponent } from './declaration.component';
import { DeclarationService } from '@services/declaration/declaration.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [DeclarationComponent],
  imports: [
    DeclarationRoutingModule,
    SharedModule
  ],
  providers: [DeclarationService]
})
export class DeclarationModule { }
