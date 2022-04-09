import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MemoizedSelector} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import mockGetPizzasResponse from '../../mocks/pizzas/get-pizzas-response.mock';
import {cartStoreSelectors} from "../../store/cart";
import {State} from "../../store/pizzas/pizzas.state";

import {CartComponent} from './cart.component';

xdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  let mockStore: MockStore;
  let mockPizzasResponseSelector: MemoizedSelector<State, any>;
  let mockTotalSelector: MemoizedSelector<State, any>;

  const initialState = {
    client: {
      basket: {
        pizzasResponse: mockGetPizzasResponse,
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [
        provideMockStore({initialState}),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
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

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
