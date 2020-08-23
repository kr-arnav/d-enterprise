import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title-layout',
  templateUrl: './page-title-layout.component.html',
  styleUrls: ['./page-title-layout.component.scss']
})
export class PageTitleLayoutComponent {

  // @Desc: html text to display consistent title across components
  @Input() title: string;

}
