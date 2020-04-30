import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaToppingsComponent } from './pizza-toppings.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PizzaToppingsComponent', () => {
  let component: PizzaToppingsComponent;
  let fixture: ComponentFixture<PizzaToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaToppingsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaToppingsComponent);
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
