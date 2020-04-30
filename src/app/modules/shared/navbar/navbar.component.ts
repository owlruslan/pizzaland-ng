import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootStoreState, UserStoreSelectors} from '@app/store/root';
import {Observable, Subject} from 'rxjs';
import {UserResponse} from '@app/models/user/user-response.model';
import {takeUntil} from 'rxjs/operators';
import {Unsubscribe} from '@app/interfaces/unsubscribe.interface';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';
import {BasketStoreSelectors} from '@app/store/root/client';

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
    select(BasketStoreSelectors.getPizzasCountState),
    takeUntil(this.unsubscribe)
  );

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    this.userResponse$.subscribe(x => {
      if (x) {
        console.log(x);
      }
    });
    // TODO: dispatch get user response
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
