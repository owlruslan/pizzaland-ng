import { loadRestaurants, loadRestaurantsError, loadRestaurantsSuccess, RestaurantsActions } from './restaurants.actions';
import { initialState, State } from './restaurants.state';
import { Action, createReducer, on } from '@ngrx/store';

const scoreboardReducer = createReducer(
  initialState,
  on(loadRestaurants, state => ({ ...state })),
  on(loadRestaurantsSuccess, (state, { response }) => ({ ...state, restaurants: response })),
  on(loadRestaurantsError, state => ({ ...state })),
);

export function reducer(state: State | undefined, action: Action): State {
  return scoreboardReducer(state, action);
}
