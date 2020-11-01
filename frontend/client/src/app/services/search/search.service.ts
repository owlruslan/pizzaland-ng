import { Injectable } from '@angular/core'
import { APIService } from '@app/interfaces/api-service.interface'
import { environment } from '@src/environments/environment'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ResponseSuccess } from '@app/models/response/response-success.model'

/**
 * Implementation of Search APIs.
 */
@Injectable({
  providedIn: 'root',
})
export class SearchService implements APIService {
  readonly host = environment.host

  constructor (private http: HttpClient) {
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
