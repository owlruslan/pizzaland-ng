import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RestaurantCardComponent} from './restaurant-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {provideMockStore} from '@ngrx/store/testing';
import mockPizza from '../../../../../../core/src/lib/mocks/pizzas/pizza.mock';

describe('app.modules.shared.pizza-card.RestaurantCardComponent', () => {
  let component: RestaurantCardComponent;
  let fixture: ComponentFixture<RestaurantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCardComponent ],
      providers: [
        provideMockStore()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCardComponent);
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
