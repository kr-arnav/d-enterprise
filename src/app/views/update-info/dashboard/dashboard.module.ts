import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
