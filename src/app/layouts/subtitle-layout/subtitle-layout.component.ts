import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle-layout',
  templateUrl: './subtitle-layout.component.html',
  styleUrls: ['./subtitle-layout.component.scss']
})
export class SubtitleLayoutComponent {

  // @Desc: html text to display consistent title across components
  @Input() title: string;

}
