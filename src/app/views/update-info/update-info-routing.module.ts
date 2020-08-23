import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateInfoComponent } from './update-info.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateInfoComponent,
    children: [
      {
        path: '',
        redirectTo: 'personal',
        pathMatch: 'full'
      },
      {
        path: 'personal',
        loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule)
      },
      {
        path: 'academic',
        loadChildren: () => import('./academic/academic.module').then(m => m.AcademicModule)
      },
      {
        path: 'professional',
        loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule)
      },
      {
        path: 'bank-account',
        loadChildren: () => import('./bank-account/bank-account.module').then(m => m.BankAccountModule)
      },
      {
        path: 'declaration',
        loadChildren: () => import('./declaration/declaration.module').then(m => m.DeclarationModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateInfoRoutingModule { }
