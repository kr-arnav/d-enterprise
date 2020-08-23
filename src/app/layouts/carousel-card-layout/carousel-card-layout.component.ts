import { Component, Input } from '@angular/core';
import { Carousel } from '@models/index';

@Component({
  selector: 'app-carousel-card-layout',
  templateUrl: './carousel-card-layout.component.html',
  styleUrls: ['./carousel-card-layout.component.scss']
})
export class CarouselCardLayoutComponent {

  // @Desc: to display to cards with text overlaying on image
  @Input() card: Carousel;

}
