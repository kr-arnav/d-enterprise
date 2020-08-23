import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { AcademicComponent } from './academic.component';
import { FormsModule } from '@angular/forms';
import { AcademicService } from './academic.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [AcademicComponent],
  imports: [
    AcademicRoutingModule,
    SharedModule
  ],
  providers: [AcademicService]
})
export class AcademicModule { }
