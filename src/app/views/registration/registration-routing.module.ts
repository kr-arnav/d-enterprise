import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'freelancer',
        pathMatch: 'full'
      },
      {
        path: 'freelancer',
        component: FreelancerComponent
      },
      {
        path: 'vendor',
        component: VendorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
