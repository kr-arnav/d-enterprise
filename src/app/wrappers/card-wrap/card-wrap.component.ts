import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CardWrap } from '@models/card-wrap.mode';

@Component({
  selector: 'app-card-wrap',
  templateUrl: './card-wrap.component.html',
  styleUrls: ['./card-wrap.component.scss']
})
export class CardWrapComponent {

  // @Desc: to generate cards with image in the back of text
  @Input() cards: CardWrap[];

}
