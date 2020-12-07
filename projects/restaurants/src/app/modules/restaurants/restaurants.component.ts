import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restaurants-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  readonly restaurants = new Array(24).fill(1);

  constructor() { }

  ngOnInit(): void {
  }

}
