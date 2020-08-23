import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardNowrapLayout } from './card-nowrap/card-nowrap-layout.component';
import { CardWrapLayout } from './card-wrap/card-wrap-layout.component';
import { CardImgLayout } from './card-img-layout/card-img-layout.component';
import { DirectivesModule } from '@directives/directives.module';
import { PageTitleLayoutComponent } from './page-title-layout/page-title-layout.component';
import { BtnPushLayoutComponent } from './btn-push-layout/btn-push-layout.component';
import { RouterModule } from '@angular/router';
import { SubtitleLayoutComponent } from './subtitle-layout/subtitle-layout.component';
import { HrLayoutComponent } from './hr-layout/hr-layout.component';
import { MidTitleLayoutComponent } from './mid-title-layout/mid-title-layout.component';
import { CarouselCardLayoutComponent } from './carousel-card-layout/carousel-card-layout.component';


@NgModule({
  declarations: [
    CardNowrapLayout,
    CardWrapLayout,
    CardImgLayout,
    PageTitleLayoutComponent,
    BtnPushLayoutComponent,
    SubtitleLayoutComponent,
    HrLayoutComponent,
    MidTitleLayoutComponent,
    CarouselCardLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [
    CardNowrapLayout,
    CardWrapLayout,
    CardImgLayout,
    PageTitleLayoutComponent,
    BtnPushLayoutComponent,
    SubtitleLayoutComponent,
    MidTitleLayoutComponent,
    HrLayoutComponent,
    CarouselCardLayoutComponent
  ]
})
export class LayoutsModule { }
