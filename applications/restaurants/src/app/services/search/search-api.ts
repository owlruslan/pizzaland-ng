import { Observable } from 'rxjs';
import { ResponseSuccess } from '../../../../../../libraries/core/src/lib/models';

export interface SearchAPI {

  getSearchResults(query: string): Observable<ResponseSuccess<any>>;
}
