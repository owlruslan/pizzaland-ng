import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import mockGetPizzasResponse from '../../mocks/pizzas/get-pizzas-response.mock';
import {GetPizzasResponse} from '../../models';


/**
 * Implementation of restaurant APIs.
 */
@Injectable({providedIn: 'root'})
export class PizzasService {
  readonly host = environment.host;

  constructor() {
  }

  /**
   * GET: /api/v1/restaurant
   * Get Pizzas.
   */
  getPizzas(): Observable<GetPizzasResponse> {
    return of(mockGetPizzasResponse);
  }
}
