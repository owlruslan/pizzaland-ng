import {TestBed} from '@angular/core/testing';
import {mockPizzaResults} from "../pizzas/get-pizzas-response.mock";
import mockPizza from "../pizzas/pizza.mock";

import {CartService} from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should add pizza to cart', () => {
    service.addToCart(mockPizza);
    expect(service.getPizzas().length).toBe(3);
  });

  it('should retrieve pizza list', () => {
    const listResult = service.getPizzas();
    expect(listResult).toEqual(mockPizzaResults.slice(0, 2))
  })
});
