import {createAction, props} from '@ngrx/store';
import {Restaurant} from '../../models/restaurants/restaurant';
import {FEATURE_KEY} from './restaurants.state';

export const loadRestaurants = createAction(`${FEATURE_KEY}/loadRestaurants`, props<{ query?: string }>());
export const loadRestaurantsSuccess = createAction(`${FEATURE_KEY}/loadRestaurantsSuccess`, props<{ response: Restaurant[] }>());
export const loadRestaurantsError = createAction(`${FEATURE_KEY}/loadRestaurantsError`);
