import { SearchAPI } from '@app/services/search/search-api'
import { Observable, of } from 'rxjs'
import { ResponseSuccess } from '@app/models/response/response-success.model'
import { delay } from 'rxjs/operators'

const mockSearchResults = ['Results1', 'Result2', 'Result3']

export class SearchMockService extends SearchAPI {

  getSearchResults (query: string): Observable<ResponseSuccess<any>> {
    return of(new ResponseSuccess(mockSearchResults)).pipe(delay(1000))
  }
}
