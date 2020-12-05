import { Observable } from 'rxjs'
import { ResponseSuccess } from '@app/models/response/response-success.model'

export abstract class SearchAPI {

  abstract getSearchResults(query: string): Observable<ResponseSuccess<any>>;
}
