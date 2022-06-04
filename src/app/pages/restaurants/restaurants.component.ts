import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Restaurant} from '../../models/restaurants/restaurant';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
  readonly restaurants: Observable<Restaurant[]> = this.restaurantsService.getRestaurants();

  constructor(private restaurantsService: RestaurantsService) { }
}
