import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIService } from '../../../../../core/src/lib/services';
import { SearchAPI } from './search-api';
import { environment } from '../../../environments/environment';
import { Restaurant } from '../../../../../core/src/lib/models/restaurants/restaurant';

/**
 * Implementation of Search APIs.
 */
@Injectable({
  providedIn: 'root',
})
export class SearchService implements APIService, SearchAPI {
  readonly host = environment.host;

  constructor(private http: HttpClient) {}

  /**
   * GET: /api/v1/search
   * Get search results.
   */
  getSearchResults(searchQuery: string): Observable<Restaurant[]> {
    const params = new HttpParams().set('query', searchQuery);
    return this.http.get<Restaurant[]>(`${this.host}/api/v1/search`, { params });
  }
}
