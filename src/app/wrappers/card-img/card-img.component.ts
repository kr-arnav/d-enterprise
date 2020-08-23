import { Component, Input, AfterViewInit } from '@angular/core';
import { CardNowrap } from '@models/card-nowrap.model';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.scss']
})
export class CardImgComponent {

  // @Desc: to generate a card with image at top and text below that
  @Input() cards: CardNowrap[];

}
