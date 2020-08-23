import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent {

  // @Desc: html text to display consistent title across components
  @Input() title: string;

}
