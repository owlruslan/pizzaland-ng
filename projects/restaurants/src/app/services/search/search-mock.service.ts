import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SearchAPI } from './search-api';
import { Restaurant } from '../../../../../core/src/lib/models/restaurants/restaurant';

export const mockRestaurant: Restaurant = {
  id: '1',
  name: 'So Tasty pizza',
  rating: 5.0,
  address: 'Address mock'
};

export const mockSearchResults: Restaurant[] = [
  mockRestaurant,
  mockRestaurant,
  mockRestaurant,
];

export class SearchMockService implements SearchAPI {

  getSearchResults(query: string): Observable<Restaurant[]> {
    return of(mockSearchResults).pipe(delay(1000));
  }
}
