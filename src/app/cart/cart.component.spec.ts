import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MemoizedSelector} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import mockPizzaResults from '../pizzas/get-pizzas-response.mock';
import {cartStoreSelectors} from "../store/cart";
import {State} from "../store/pizzas/pizzas.state";

import {CartComponent} from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  let mockStore: MockStore;
  let mockPizzasResponseSelector: MemoizedSelector<State, any>;
  let mockTotalSelector: MemoizedSelector<State, any>;

  const initialState = {
    client: {
      basket: {
        pizzasResponse: mockPizzaResults,
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [
        provideMockStore({initialState}),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);

    mockStore = TestBed.inject(MockStore);
    mockPizzasResponseSelector = mockStore.overrideSelector(
      cartStoreSelectors.getPizzas,
      null,
    );
    mockTotalSelector = mockStore.overrideSelector(
      cartStoreSelectors.getTotalState,
      null,
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
