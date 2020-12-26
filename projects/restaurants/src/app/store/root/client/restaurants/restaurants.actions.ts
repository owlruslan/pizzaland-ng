import { createAction, props } from '@ngrx/store';
import { Restaurant } from '../../../../models/restaurants/restaurant';

const PREFIX = '[Restaurants]';

export const loadRestaurants = createAction(`${PREFIX} Load Restaurants`,
  props<{ query?: string }>());
export const loadRestaurantsSuccess = createAction(`${PREFIX} Load Restaurants Success`,
  props<{ response: Restaurant[] }>());
export const loadRestaurantsError = createAction(`${PREFIX} Load Restaurants Error`);
