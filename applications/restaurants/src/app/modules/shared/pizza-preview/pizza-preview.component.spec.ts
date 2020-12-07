import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PizzaPreviewComponent} from './pizza-preview.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import mockPizza from '../../../../../../../libraries/core/src/lib/mocks/pizzas/pizza.mock';

describe('app.modules.shared.pizza-preview.PizzaPreviewComponent', () => {
  let component: PizzaPreviewComponent;
  let fixture: ComponentFixture<PizzaPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPreviewComponent ],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPreviewComponent);
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
