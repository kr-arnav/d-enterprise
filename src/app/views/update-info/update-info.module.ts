import { NgModule } from '@angular/core';

import { UpdateInfoRoutingModule } from './update-info-routing.module';
import { UpdateInfoComponent } from './update-info.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [UpdateInfoComponent],
  imports: [
    UpdateInfoRoutingModule,
    SharedModule
  ]
})
export class UpdateInfoModule { }
