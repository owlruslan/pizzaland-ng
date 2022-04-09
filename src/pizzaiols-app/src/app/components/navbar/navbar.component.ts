import {Component, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {cartStoreSelectors} from "../../store/cart";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  readonly unsubscribe = new Subject<void>();

  pizzasCount$: Observable<number> = this.store.pipe(
    select(cartStoreSelectors.getPizzasCountState),
    takeUntil(this.unsubscribe)
  );

  constructor(private store: Store) { }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
