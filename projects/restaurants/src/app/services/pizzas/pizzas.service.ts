import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { APIService } from '../../../../../core/src/lib/services';
import { GetPizzasResponse, ResponseSuccess } from '../../../../../core/src/lib/models';
import mockGetPizzasResponse from '../../../../../core/src/lib/mocks/pizzas/get-pizzas-response.mock';


/**
 * Implementation of pizzas APIs.
 */
@Injectable({providedIn: 'root'})
export class PizzasService implements APIService {
  readonly host = environment.host;

  constructor(private http: HttpClient) {
  }

  /**
   * GET: /api/v1/pizzas
   * Get Pizzas.
   */
  getPizzas(token: string): Observable<GetPizzasResponse> {
    return of(mockGetPizzasResponse);
    /*return this.http.get<ResponseSuccess<GetPizzasResponse>>(`${this.host}/api/v1/pizzas`, {
      headers: new HttpHeaders({Authorization: `Bearer ${token}`}),
    });*/
  }
}
