import {Observable} from 'rxjs';
import {Restaurant} from '../../models/restaurants/restaurant';

export interface RestaurantsAPI {

  /**
   * GET: /api/v1/restaurants
   * Get restaurants list.
   */
  getRestaurants(query?: string): Observable<Restaurant[]>;

  /**
   * GET: /api/v1/restaurant
   * Get restaurant by id.
   */
  getRestaurant(id: string): Observable<Restaurant>;
}
