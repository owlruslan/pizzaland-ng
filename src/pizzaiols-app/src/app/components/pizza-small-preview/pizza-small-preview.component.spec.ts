import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

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

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
