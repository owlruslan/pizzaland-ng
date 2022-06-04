import {Observable, of} from 'rxjs';
import mockRestaurants from '../../mocks/restaurants/restaurants.mock';
import {Restaurant} from '../../models/restaurants/restaurant';
import {RestaurantsAPI} from './restaurants-api';

export class RestaurantsMockService implements RestaurantsAPI {

  getRestaurants(query?: string): Observable<Restaurant[]> {
    return of(mockRestaurants);
  }

  getRestaurant(id: string): Observable<Restaurant> {
    return of(mockRestaurants[+id]);
  }
}
