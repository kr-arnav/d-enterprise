import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateInfoGuard } from '@guards/update-info.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./views/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'update-info',
    loadChildren: () => import('./views/update-info/update-info.module').then(m => m.UpdateInfoModule),
    canActivate: [UpdateInfoGuard]
  },
  {
    path: '*',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
