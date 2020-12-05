import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { UserResponse } from '../../../models/user/user-response.model'
import { RootStoreState, UserStoreSelectors } from '../../../store/root'
import { BasketStoreSelectors } from '../../../store/root/client'
import { Unsubscribe } from '../../../interfaces/unsubscribe.interface'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy, Unsubscribe {
  readonly unsubscribe = new Subject<void>();

  userResponse$: Observable<UserResponse> = this.store.pipe(
    select(UserStoreSelectors.getUserResponseState),
    takeUntil(this.unsubscribe)
  );

  pizzasCount$: Observable<number> = this.store.pipe(
    // @ts-ignore
    select(BasketStoreSelectors.getPizzasCountState),
    takeUntil(this.unsubscribe)
  );

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    // TODO: dispatch get user response
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
