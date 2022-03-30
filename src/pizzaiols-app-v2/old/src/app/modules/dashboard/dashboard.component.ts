import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Restaurant} from '../../models/restaurants/restaurant';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  readonly restaurants: Observable<Restaurant[]> = this.restaurantsService.getRestaurants();

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
  }

}
