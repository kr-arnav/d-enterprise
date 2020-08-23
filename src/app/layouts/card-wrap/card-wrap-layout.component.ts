import { Component, Input } from '@angular/core';
import { CardWrap } from '@models/index';

@Component({
  selector: 'app-card-wrap-layout',
  templateUrl: './card-wrap-layout.component.html',
  styleUrls: ['./card-wrap-layout.component.scss']
})
export class CardWrapLayout {

  // @Desc: to display to cards with text overlaying on image
  @Input() card: CardWrap;

}
