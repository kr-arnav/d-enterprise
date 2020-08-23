import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // @Desc: To be displayed as page title
  // @Access: Public - to access from the template
  title: string = "Dashboard";

  constructor() { }

  ngOnInit(): void {
  }

}
