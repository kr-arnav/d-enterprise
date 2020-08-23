import { Component, Input } from '@angular/core';
import { CardNowrap } from '@models/index';

@Component({
  selector: 'app-card-nowrap-layout',
  templateUrl: './card-nowrap-layout.component.html',
  styleUrls: ['./card-nowrap-layout.component.scss']
})
export class CardNowrapLayout {

  // @Desc: to display to cards with text below the image
  @Input() card: CardNowrap;

}
