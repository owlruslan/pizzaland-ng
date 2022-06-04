import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import mockPizza from "../../pizzas/pizza.mock";
import {PizzaCardComponent} from './pizza-card.component';

describe('PizzaCardComponent', () => {
  let component: PizzaCardComponent;
  let fixture: ComponentFixture<PizzaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaCardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#onBuy', function () {
    it('should add pizza to cart', function () {
      const pizza = mockPizza;
      const onBuySpy = jest.spyOn(component, 'onBuy')
      component.onBuy(pizza)
      expect(onBuySpy).toHaveBeenCalledWith(pizza);
    });
  });
});
