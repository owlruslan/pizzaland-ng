import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MemoizedSelector} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {cartStoreSelectors} from "../../store/cart";
import {userStoreSelectors} from "../../store/user";
import {State} from "../../store/user/user.state";

import {NavbarComponent} from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let mockStore: MockStore;
  let mockUserResponseSelector: MemoizedSelector<State, any>;
  let mockPizzasCountSelector: MemoizedSelector<State, any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        provideMockStore()
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);

    mockStore = TestBed.inject(MockStore);
    mockUserResponseSelector = mockStore.overrideSelector(
      userStoreSelectors.getUserResponseState,
      null
    );
    mockPizzasCountSelector = mockStore.overrideSelector(
      cartStoreSelectors.getPizzasCountState,
      null
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
