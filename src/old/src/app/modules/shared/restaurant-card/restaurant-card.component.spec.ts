import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RestaurantCardComponent} from './restaurant-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {provideMockStore} from '@ngrx/store/testing';

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
});
