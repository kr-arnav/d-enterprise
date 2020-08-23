import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mid-title',
  templateUrl: './mid-title.component.html',
  styleUrls: ['./mid-title.component.scss']
})
export class MidTitleComponent {

  // @Desc: html text to display consistent title across components
  @Input() title: string;

}
