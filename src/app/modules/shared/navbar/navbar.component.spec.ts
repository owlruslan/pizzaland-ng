import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {MemoizedSelector} from '@ngrx/store';
import { RootStoreState, UserStoreSelectors } from '../../../store/root';
import { BasketStoreSelectors } from '../../../store/root/client';

describe('app.modules.shared.navbar.NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let mockStore: MockStore;
  let mockUserResponseSelector: MemoizedSelector<RootStoreState.State, any>;
  let mockPizzasCountSelector: MemoizedSelector<RootStoreState.State, any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [
        provideMockStore()
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);

    mockStore = TestBed.inject(MockStore);
    mockUserResponseSelector = mockStore.overrideSelector(
      UserStoreSelectors.getUserResponseState,
      null
    );
    mockPizzasCountSelector = mockStore.overrideSelector(
      BasketStoreSelectors.getPizzasCountState,
      null
    );

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
