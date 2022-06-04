import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PizzaSmallPreviewComponent} from './pizza-small-preview.component';

describe('PizzaSmallPreviewComponent', () => {
  let component: PizzaSmallPreviewComponent;
  let fixture: ComponentFixture<PizzaSmallPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaSmallPreviewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSmallPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
