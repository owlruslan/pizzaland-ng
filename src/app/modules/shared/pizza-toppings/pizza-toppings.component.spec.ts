import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaToppingsComponent } from './pizza-toppings.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PizzaToppingsComponent', () => {
  let component: PizzaToppingsComponent;
  let fixture: ComponentFixture<PizzaToppingsComponent>;

  const fn = () => {};

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

  describe('#registerOnChange', () => {
    it('should set fn', () => {
      component.registerOnChange(fn);
      expect(component.onModelChange).toBe(fn);
    });
  });

  describe('#registerOnTouched', () => {
    it('should set fn', () => {
      component.registerOnTouched(fn);
      expect(component.onTouch).toBe(fn);
    });
  });

  describe('#writeValue', () => {
    it('should set value', () => {
      const value = 'value';
      component.writeValue(value);
      expect(component.value).toBe(value);
    });
  });

  describe('#updateTopping', () => {
    beforeEach(() => {
      component.registerOnChange(fn);
    });

    it('should unset value', () => {
      const topping = 'bacon';
      component.value = [topping];
      component.updateTopping(topping);
      expect(component.value).toEqual([]);
    });

    it('should set value', () => {
      const topping = 'bacon';
      component.updateTopping(topping);
      expect(component.value).toEqual([topping]);
    });
  });

  describe('#onBlur', () => {
    it('should set focused', () => {
      const value = 'value';
      component.onBlur(value);
      expect(component.focused).toBe('');
    });
  });

  describe('#onFocus', () => {
    it('should set focused value', () => {
      const value = 'value';
      component.registerOnTouched(fn);
      component.onFocus(value);
      expect(component.focused).toBe(value);
    });
  });
});
