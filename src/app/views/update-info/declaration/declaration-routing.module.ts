import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarationComponent } from './declaration.component';

const routes: Routes = [
  {
    path: '',
    component: DeclarationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclarationRoutingModule { }
