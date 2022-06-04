import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Restaurant} from '../models/restaurants/restaurant';
import {RestaurantsApiService} from "./restaurants-api.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
  readonly data: Observable<Restaurant[]> = this.restaurants.getRestaurants();

  constructor(private restaurants: RestaurantsApiService) { }
}
