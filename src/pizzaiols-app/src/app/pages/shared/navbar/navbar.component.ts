import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Unsubscribe} from '../../../components/unsubscribe.interface';
import {UserResponse} from '../../../models';
import {cartStoreSelectors} from "../../../store/cart";
import {userStoreSelectors} from "../../../store/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy, Unsubscribe {
  readonly unsubscribe = new Subject<void>();

  userResponse$: Observable<UserResponse> = this.store.pipe(
    select(userStoreSelectors.getUserResponseState),
    takeUntil(this.unsubscribe)
  );

  pizzasCount$: Observable<number> = this.store.pipe(
    select(cartStoreSelectors.getPizzasCountState),
    takeUntil(this.unsubscribe)
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
    // TODO: dispatch get user response
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
