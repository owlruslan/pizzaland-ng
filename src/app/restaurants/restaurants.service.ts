import {Injectable} from "@angular/core";
import {Observable, of} from 'rxjs';
import mockRestaurants from '../mocks/restaurants/restaurants.mock';
import {Restaurant} from './restaurant';

@Injectable({providedIn: 'root'})
export class RestaurantsService {

  /**
   * Get a restaurant list.
   */
  getRestaurants(query?: string): Observable<Restaurant[]> {
    return of(mockRestaurants);
  }

  /**
   * Get the restaurant by id.
   */
  getRestaurant(id: string): Observable<Restaurant> {
    return of(mockRestaurants[+id]);
  }
}
