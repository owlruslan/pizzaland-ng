import { Injectable } from '@angular/core';
import { APIService } from '../../../../../core/src/lib/services';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestaurantsAPI } from './restaurants-api';
import { Restaurant } from '../../models/restaurants/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService implements APIService, RestaurantsAPI {
  readonly host = environment.host;

  constructor(private http: HttpClient) {
  }

  getRestaurants(query?: string): Observable<Restaurant[]> {
    const params = new HttpParams().set('query', query || '');
    return this.http.get<Restaurant[]>(`${this.host}/api/v1/restaurants`, { params });
  }

  getRestaurant(id: string): Observable<Restaurant> {
    const params = new HttpParams().set('id', id || '');
    return this.http.get<Restaurant>(`${this.host}/api/v1/restaurant`, { params });
  }
}
