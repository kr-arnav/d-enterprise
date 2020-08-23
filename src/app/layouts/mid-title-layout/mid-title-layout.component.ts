import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mid-title-layout',
  templateUrl: './mid-title-layout.component.html',
  styleUrls: ['./mid-title-layout.component.scss']
})
export class MidTitleLayoutComponent {

  // @Desc: html text to display consistent title across components
  @Input() title: string;
}
