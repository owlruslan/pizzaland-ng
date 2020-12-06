import { Observable, of } from 'rxjs'
import { delay } from 'rxjs/operators'
import { SearchAPI } from './search-api'
import { ResponseSuccess } from '../../../../../../dist/core/lib/models'

export const mockSearchResults = ['Results1', 'Result2', 'Result3']

export class SearchMockService implements SearchAPI {

  getSearchResults (query: string): Observable<ResponseSuccess<any>> {
    return of(new ResponseSuccess(mockSearchResults)).pipe(delay(1000))
  }
}
