import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnDarkThemeDirective } from './btn-dark-theme.directive';
import { PgThemeDirective } from './pg-theme.directive';
import { ContainerLightThemeDirective } from './container-light-theme.directive';
import { ContainerDarkThemeDirective } from './container-dark-theme.directive';
import { BtnLightThemeDirective } from './btn-light-theme.directive';



@NgModule({
  declarations: [
    BtnDarkThemeDirective,
    BtnLightThemeDirective,
    PgThemeDirective,
    ContainerLightThemeDirective,
    ContainerDarkThemeDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnDarkThemeDirective,
    BtnLightThemeDirective,
    PgThemeDirective,
    ContainerLightThemeDirective,
    ContainerDarkThemeDirective
  ]
})
export class DirectivesModule { }
