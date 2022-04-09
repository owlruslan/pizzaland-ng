import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideMockStore} from '@ngrx/store/testing';
import mockPizza from '../../mocks/pizzas/pizza.mock';

import {PizzaCardComponent} from './pizza-card.component';

xdescribe('PizzaCardComponent', () => {
  let component: PizzaCardComponent;
  let fixture: ComponentFixture<PizzaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaCardComponent],
      providers: [
        provideMockStore()
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

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
