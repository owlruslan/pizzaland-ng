import { Observable } from 'rxjs';
import { Restaurant } from '../../models/restaurants/restaurant';

export interface SearchAPI {

  getSearchResults(query: string): Observable<Restaurant[]>;
}
