import { Subject } from 'rxjs';

export interface Unsubscribe {

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
