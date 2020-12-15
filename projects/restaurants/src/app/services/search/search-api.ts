import { Observable } from 'rxjs';
import { Restaurant } from '../../../../../core/src/lib/models/restaurants/restaurant';

export interface SearchAPI {

  getSearchResults(query: string): Observable<Restaurant[]>;
}
