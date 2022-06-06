import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CartService} from "../cart/cart.service";
import mockPizza from "../pizzas/pizza.mock";

import {RestaurantComponent} from './restaurant.component';


describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantComponent],
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [FormBuilder],
      teardown: { destroyAfterEach: false },
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should add pizza to cart', () => {
    const pizza = mockPizza;
    const addToCartSpy = jest.spyOn(cartService, 'addToCart');
    component.onAddCart(pizza);
    expect(addToCartSpy).toHaveBeenCalledWith(pizza);
  });
});
