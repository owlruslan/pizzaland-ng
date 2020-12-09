import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PizzasComponent} from './pizzas.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {FormBuilder} from '@angular/forms';
import {MemoizedSelector} from '@ngrx/store';
import {cold} from 'jasmine-marbles';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import mockGetPizzasResponse from '../../mocks/pizzas/get-pizzas-response.mock';
import { PizzasStoreSelectors } from '../../store/root/client';
import { RootStoreState } from '../../store/root';
import { GetPizzasResponse } from '../../../../../core/src/lib/models';


const initialState = {
  client: {
    pizzas: mockGetPizzasResponse
  }
};

describe('app.modules.pizzas.PizzasComponent', () => {
  let component: PizzasComponent;
  let fixture: ComponentFixture<PizzasComponent>;

  let mockStore: MockStore;
  let mockPizzasResponseSelector: MemoizedSelector<RootStoreState.State, GetPizzasResponse>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasComponent ],
      imports: [
        NoopAnimationsModule
      ],
      providers: [
        provideMockStore({initialState}),
        FormBuilder
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasComponent);

    mockStore = TestBed.inject(MockStore);
    mockPizzasResponseSelector = mockStore.overrideSelector(
      PizzasStoreSelectors.getPizzasResponseState,
      mockGetPizzasResponse
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

  describe('#pizzas', () => {
    it('should return right data', () => {
      component.form.controls.toppings.setValue(['anchovy']);
      component.pizzas$ = cold('-a', {
        a: []
      });
      const expected = cold('-b', {
        b: []
      });

      expect(component.pizzas$).toBeObservable(expected);
    });

    it('should return right data', () => {
      component.form.controls.toppings.setValue([]);
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
