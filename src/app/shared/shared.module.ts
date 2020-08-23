import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '@directives/directives.module';
import { WrapperModule } from '@wrappers/wrappers.module';
import { LayoutsModule } from '@layouts/layouts.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    WrapperModule,
    LayoutsModule,
    DirectivesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    WrapperModule,
    LayoutsModule,
    DirectivesModule
  ]
})
export class SharedModule { }
