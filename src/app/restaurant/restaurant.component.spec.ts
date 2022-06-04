import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MemoizedSelector} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {cold} from 'jest-marbles';
import {State} from 'src/app/store/pizzas/pizzas.state';
import mockGetPizzasResponse from '../mocks/pizzas/get-pizzas-response.mock';
import {GetPizzasResponse} from '../models';
import {pizzasStoreSelectors} from "../store/pizzas";

import {RestaurantComponent} from './restaurant.component';


const initialState = {
  client: {
    pizzas: mockGetPizzasResponse
  }
};

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;

  let mockStore: MockStore;
  let mockPizzasResponseSelector: MemoizedSelector<State, GetPizzasResponse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantComponent],
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        provideMockStore({initialState}),
        FormBuilder,
      ],
      teardown: { destroyAfterEach: false },
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);

    mockStore = TestBed.inject(MockStore);
    mockPizzasResponseSelector = mockStore.overrideSelector(
      pizzasStoreSelectors.getPizzasResponseState,
      mockGetPizzasResponse
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#restaurant', () => {
    it('should return right data', () => {
      component.form.controls['toppings'].setValue(['anchovy']);
      component.pizzas$ = cold('-a', {
        a: []
      });
      const expected = cold('-b', {
        b: []
      });

      expect(component.pizzas$).toBeObservable(expected);
    });

    it('should return right data', () => {
      component.form.controls['toppings'].setValue([]);
      component.pizzas$ = cold('-a', {
        a: []
      });
      const expected = cold('-b', {
        b: []
      });

      expect(component.pizzas$).toBeObservable(expected);
    });
  });
});
