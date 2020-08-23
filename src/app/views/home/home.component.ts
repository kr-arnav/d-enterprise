import { Component, OnInit } from '@angular/core';
import { HomeService } from '@services/home/home.service';

import { CardNowrap, CardWrap, Client, Carousel } from '@models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services: CardNowrap[];
  domains: CardWrap[];
  clients: Client[];
  carousels: Carousel[];
  constructor(
    private homeServices: HomeService
  ) { }

  ngOnInit(): void {
    this.getServices();
    this.getDomains();
    this.getClients();
    this.getCarousels();
  }

  getServices(): void {
    this.homeServices.getServices()
      .subscribe(s => {
        this.services = s;
      });
  }

  getDomains(): void {
    this.homeServices.getDomains()
      .subscribe(d => {
        this.domains = d;
      });
  }

  getClients(): void {
    this.homeServices.getClients()
      .subscribe(c => {
        this.clients = c;
      });
  }

  getCarousels(): void {
    this.homeServices.getCarousels()
      .subscribe(c => {
        this.carousels = c;
      });
  }

}
