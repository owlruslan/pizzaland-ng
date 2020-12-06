import { Observable } from 'rxjs';
import { ResponseSuccess } from '../../../../../../libraries/core/src/lib/models/response/response-success.model';

export interface SearchAPI {

  getSearchResults(query: string): Observable<ResponseSuccess<any>>;
}
