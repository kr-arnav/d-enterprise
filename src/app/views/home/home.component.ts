import { Component, OnInit } from '@angular/core';
import * as json from "@assets/local.json";

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
  constructor() { }

  ngOnInit(): void {
    this.services = json.services;
    this.domains = json.domains;
    this.clients = json.clients;
    this.carousels = json.carousels;
  }

}
