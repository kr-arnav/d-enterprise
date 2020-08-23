import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { ProfessionalService } from './professional.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ProfessionalComponent],
  imports: [
    ProfessionalRoutingModule,
    SharedModule
  ],
  providers: [ProfessionalService]
})
export class ProfessionalModule { }
