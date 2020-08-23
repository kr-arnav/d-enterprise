import { Component, Input, AfterViewInit, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Carousel } from '@models/index';
import { CarouselCardLayoutComponent } from '@layouts/carousel-card-layout/carousel-card-layout.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  // @Desc: to generate cards with image in the back of text
  @Input() cards: Carousel[];

}
