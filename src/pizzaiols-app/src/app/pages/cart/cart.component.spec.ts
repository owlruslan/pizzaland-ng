import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import { BasketStoreSelectors } from '../../store/root/client';
import { RootStoreState } from '../../store/root';
import mockGetPizzasResponse from '../../mocks/pizzas/get-pizzas-response.mock';

describe('app.modules.cart.CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  let mockStore: MockStore;
  let mockPizzasResponseSelector: MemoizedSelector<RootStoreState.State, any>;
  let mockTotalSelector: MemoizedSelector<RootStoreState.State, any>;

  const initialState = {
    client: {
      basket: {
        pizzasResponse: mockGetPizzasResponse,
      },
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [
        provideMockStore({ initialState }),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);

    mockStore = TestBed.inject(MockStore);
    mockPizzasResponseSelector = mockStore.overrideSelector(
      BasketStoreSelectors.getPizzasResponseState,
      null,
    );
    mockTotalSelector = mockStore.overrideSelector(
      BasketStoreSelectors.getTotalState,
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
