import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {errorAnimations} from './error.animation';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {Unsubscribe} from '@app/interfaces/unsubscribe.interface';
import {ResponseError} from '@app/models/response/response-error.model';

@Component({
  selector: 'app-ui-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  animations: errorAnimations
})
export class ErrorMessageComponent implements OnInit, OnDestroy, Unsubscribe {

  @Input()
  errorResponse$: Observable<ResponseError>;

  errorSubject$ = new BehaviorSubject<ResponseError>(null);

  expanded = false;
  hidden = true;

  readonly unsubscribe = new Subject<void>();

  constructor() {
  }

  ngOnInit() {
    this.errorResponse$
      .pipe(
        map((err: ResponseError) => {
          this.errorSubject$.next(err);
        }),
        takeUntil(this.unsubscribe)
      )
      .subscribe();

    this.errorSubject$.pipe(
      map((errorObject: ResponseError) => {
        if (errorObject) {
          return errorObject;
        }
      }),
      takeUntil(this.unsubscribe)
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  onExpandClick(): void {
    this.expanded = !this.expanded;
  }

  onCloseClick(): void {
    this.hidden = !this.hidden;
  }
}
