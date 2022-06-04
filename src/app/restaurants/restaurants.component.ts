import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Restaurant} from './restaurant';
import {RestaurantsService} from "./restaurants.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantsComponent {
  readonly data: Restaurant[] = this.restaurants.getRestaurants();

  constructor(private restaurants: RestaurantsService) { }
}
