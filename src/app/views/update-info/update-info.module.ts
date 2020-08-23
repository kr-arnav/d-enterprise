import { NgModule } from '@angular/core';

import { UpdateInfoRoutingModule } from './update-info-routing.module';
import { UpdateInfoComponent } from './update-info.component';
import { SharedModule } from '@shared/shared.module';
import { UpdateInfoService } from '@services/update-info/update-info.service'


@NgModule({
  declarations: [UpdateInfoComponent],
  imports: [
    UpdateInfoRoutingModule,
    SharedModule
  ],
  providers: [
    UpdateInfoService
  ]
})
export class UpdateInfoModule { }
