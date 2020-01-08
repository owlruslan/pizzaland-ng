import {Subject} from 'rxjs';

export interface IUnsubscribe {

  /**
   * Unsubscribe subject.
   *
   * Example:
   * ```
   * ngOnDestroy(): void {
   *   this.unsubscribe.next();
   * }
   * ```
   */
  readonly unsubscribe: Subject<void>;
}
