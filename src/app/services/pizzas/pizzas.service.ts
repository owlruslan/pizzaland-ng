import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {APIService} from '@app/interfaces/api-service.interface';
import {UserLoginRequest} from '@app/models/user/user-login-request.model';
import {ResponseSuccess} from '@app/models/response/response-success.model';
import {UserLoginResponse} from '@app/models/user/user-login-response.model';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';

/**
 * Implementation of pizzas APIs.
 */
@Injectable()
export class PizzasService implements APIService {
  readonly host = environment.host;

  constructor(private http: HttpClient) {
  }

  /**
   * GET: /api/v1/pizzas
   * Get Pizzas.
   */
  getPizzas(token: string): Observable<ResponseSuccess<GetPizzasResponse>> {
    return this.http.get<ResponseSuccess<GetPizzasResponse>>(`${this.host}/api/v1/pizzas`, {
      headers: new HttpHeaders({Authorization: `Bearer ${token}`}),
    });
  }
}
