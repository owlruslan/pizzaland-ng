import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Store} from "@ngrx/store";
import {provideMockStore} from '@ngrx/store/testing';
import mockPizza from "../../mocks/pizzas/pizza.mock";
import {cartStoreActions} from "../../store";

import {PizzaCardComponent} from './pizza-card.component';

describe('PizzaCardComponent', () => {
  let component: PizzaCardComponent;
  let fixture: ComponentFixture<PizzaCardComponent>;
  let store: Store

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaCardComponent],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    store = TestBed.inject(Store)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#onBuy', function () {
    it('should add pizza to cart', function () {
      const pizza = mockPizza;
      const dispatchSpy = jest.spyOn(store, 'dispatch')
      component.onBuy(pizza)
      expect(dispatchSpy).toHaveBeenCalledWith(cartStoreActions.add({pizza}))
    });
  });
});
