import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ResponseSuccess } from '../../../../../../dist/core/lib/models';
import { SearchAPI } from './search-api';

export const mockSearchResults = ['Results1', 'Result2', 'Result3'];

export class SearchMockService implements SearchAPI {

  getSearchResults(query: string): Observable<ResponseSuccess<any>> {
    return of(new ResponseSuccess(mockSearchResults)).pipe(delay(1000));
  }
}
