import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PizzaCardComponent} from './pizza-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {provideMockStore} from '@ngrx/store/testing';
import mockPizza from '../../../../../../../libraries/core/src/lib/mocks/pizzas/pizza.mock';

describe('app.modules.shared.pizza-card.PizzaCardComponent', () => {
  let component: PizzaCardComponent;
  let fixture: ComponentFixture<PizzaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaCardComponent ],
      providers: [
        provideMockStore()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCardComponent);
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

  it('should set pizza', () => {
    // @ts-ignore
    component.pizza$.next(null);
    component.pizza = mockPizza;
    expect(component.pizza).toEqual(mockPizza);
  });

  it('should get pizza', () => {
    component.pizza = mockPizza;
    expect(component.pizza).toEqual(mockPizza);
  });
});
