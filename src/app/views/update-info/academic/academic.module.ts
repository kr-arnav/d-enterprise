import { NgModule } from '@angular/core';

import { AcademicRoutingModule } from './academic-routing.module';
import { AcademicComponent } from './academic.component';
import { AcademicService } from '@services/academic/academic.service';
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
