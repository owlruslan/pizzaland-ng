import { Observable, of } from 'rxjs'
import { delay } from 'rxjs/operators'
import { ResponseSuccess } from '../../models/response/response-success.model'
import { SearchAPI } from './search-api'

export const mockSearchResults = ['Results1', 'Result2', 'Result3']

export class SearchMockService extends SearchAPI {

  getSearchResults (query: string): Observable<ResponseSuccess<any>> {
    return of(new ResponseSuccess(mockSearchResults)).pipe(delay(1000))
  }
}
