import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {GetPizzasResponse} from '../../models';
import mockGetPizzasResponse from '../../mocks/pizzas/get-pizzas-response.mock';
import {APIService} from '../api-service.interface';


/**
 * Implementation of restaurant APIs.
 */
@Injectable({providedIn: 'root'})
export class PizzasService implements APIService {
  readonly host = environment.host;

  constructor(private http: HttpClient) {
  }

  /**
   * GET: /api/v1/restaurant
   * Get Pizzas.
   */
  getPizzas(token: string): Observable<GetPizzasResponse> {
    return of(mockGetPizzasResponse);
    /*return this.http.get<ResponseSuccess<GetPizzasResponse>>(`${this.host}/api/v1/restaurant`, {
      headers: new HttpHeaders({Authorization: `Bearer ${token}`}),
    });*/
  }
}
