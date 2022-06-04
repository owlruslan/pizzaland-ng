import {Injectable} from "@angular/core";
import {Restaurant} from './restaurant';
import mockRestaurants from './restaurants.mock';

@Injectable({providedIn: 'root'})
export class RestaurantsService {

  /**
   * Get a restaurant list.
   */
  getRestaurants(query?: string): Restaurant[] {
    return mockRestaurants;
  }

  /**
   * Get the restaurant by id.
   */
  getRestaurant(id: string): Restaurant {
    return mockRestaurants[+id];
  }
}
