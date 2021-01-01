import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Restaurant } from '../../../models/restaurants/restaurant';

export enum CursorType {
  Default,
  Pointer
}

@Component({
  selector: 'restaurants-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantCardComponent {
  @Input() model?: Restaurant;
  @Input() cursor = CursorType.Pointer;
  readonly cursorTypes = CursorType;
}
