import {Component, OnDestroy, OnInit} from '@angular/core';
import {Unsubscribe} from '@app/interfaces/unsubscribe.interface';
import {Observable, Subject} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {RootStoreState} from '@app/store/root';
import {takeUntil} from 'rxjs/operators';
import {PizzasStoreSelectors} from '@app/store/root/client';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit, OnDestroy, Unsubscribe {
  readonly unsubscribe = new Subject<void>();

  pizzasResponse$: Observable<GetPizzasResponse> = this.store.pipe(
    select(PizzasStoreSelectors.getPizzasResponseState),
    takeUntil(this.unsubscribe)
  );

  tagsResponse$: Observable<string[]> = this.store.pipe(
    select(PizzasStoreSelectors.getTagsResponseState),
    takeUntil(this.unsubscribe)
  );

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    // TODO: dispatch get pizzas response
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
