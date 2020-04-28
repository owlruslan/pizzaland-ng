import { Component, OnInit } from '@angular/core';

export enum NavbarItems {
  PIZZAS,
  BASKET,
  AUTH
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
