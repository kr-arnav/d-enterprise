import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { VendorComponent } from './vendor/vendor.component';
import { SharedModule } from '@shared/shared.module';
import { RegistrationService } from '@services/registration/registration.service';


@NgModule({
  declarations: [RegistrationComponent, FreelancerComponent, VendorComponent],
  imports: [
    RegistrationRoutingModule,
    SharedModule
  ],
  providers: [
    RegistrationService
  ]
})
export class RegistrationModule { }
