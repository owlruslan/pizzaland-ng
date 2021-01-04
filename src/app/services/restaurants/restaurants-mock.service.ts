import { RestaurantsAPI } from './restaurants-api';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../../models/restaurants/restaurant';
import mockRestaurants from '../../mocks/restaurants/restaurants.mock';

export class RestaurantsMockService implements RestaurantsAPI {

  getRestaurants(query?: string): Observable<Restaurant[]> {
    return of(mockRestaurants);
  }

  getRestaurant(id: string): Observable<Restaurant> {
    return of(mockRestaurants[+id]);
  }
}
