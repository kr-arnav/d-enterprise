import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { CardNowrap } from '@models/card-nowrap.model';

@Component({
  selector: 'app-card-nowrap',
  templateUrl: './card-nowrap.component.html',
  styleUrls: ['./card-nowrap.component.scss']
})
export class CardNowrapComponent {

  // @Desc: to generate cards with texts below image
  @Input() cards: CardNowrap[];

}
