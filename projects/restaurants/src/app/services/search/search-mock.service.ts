import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SearchAPI } from './search-api';
import { ResponseSuccess } from '../../../../../core/src/lib/models';
import { Restaurant } from '../../../../../core/src/lib/models/restaurants/restaurant';

export const mockRestaurant: Restaurant = {
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

  getSearchResults(query: string): Observable<ResponseSuccess<any>> {
    return of(new ResponseSuccess(mockSearchResults)).pipe(delay(1000));
  }
}
