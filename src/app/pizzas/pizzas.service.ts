import {Injectable} from '@angular/core';
import {mockPizzaResults} from './get-pizzas-response.mock';
import {Pizza} from "./pizza.model";


/**
 * Implementation of restaurant APIs.
 */
@Injectable({providedIn: 'root'})
export class PizzasService {

  /**
   * Get Pizzas.
   */
  getPizzas(): Pizza[] {
    return mockPizzaResults;
  }
}
