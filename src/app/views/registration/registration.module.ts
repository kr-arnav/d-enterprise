import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { VendorComponent } from './vendor/vendor.component';
import { RegistrationService } from './registration.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [RegistrationComponent, FreelancerComponent, VendorComponent],
  imports: [
    RegistrationRoutingModule,
    SharedModule
  ],
  providers: [RegistrationService]
})
export class RegistrationModule { }
