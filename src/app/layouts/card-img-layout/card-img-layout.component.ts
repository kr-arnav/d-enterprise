import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-img-layout',
  templateUrl: './card-img-layout.component.html',
  styleUrls: ['./card-img-layout.component.scss']
})
export class CardImgLayout {

  @Input() card;

}
