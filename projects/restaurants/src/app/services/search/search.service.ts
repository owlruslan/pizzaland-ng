import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { APIService } from '../../interfaces/api-service.interface'
import { ResponseSuccess } from '../../models/response/response-success.model'
import { SearchAPI } from './search-api'
import { environment } from '../../../environments/environment'


/**
 * Implementation of Search APIs.
 */
@Injectable({
  providedIn: 'root',
})
export class SearchService extends SearchAPI implements APIService {
  readonly host = environment.host

  constructor (private http: HttpClient) {
    super()
  }

  /**
   * GET: /api/v1/search
   * Get search results.
   */
  getSearchResults (searchQuery: string): Observable<ResponseSuccess<any>> {
    const params = new HttpParams().set('query', searchQuery)

    return this.http.get<ResponseSuccess<any>>(`${this.host}/api/v1/search`,
      { params })
  }
}
