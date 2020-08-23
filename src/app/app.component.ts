import { Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'Dummy Enterprises', content: 'Online examination' },
      { name: 'keywords', content: 'Dummy Enterprises, Freelancing, Online Examination' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Arnav Kumar (this.arnav@gmail.com)' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2020-08-20', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }
}
