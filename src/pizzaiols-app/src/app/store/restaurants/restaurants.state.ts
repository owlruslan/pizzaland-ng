import {Restaurant} from '../../models/restaurants/restaurant';

export const FEATURE_KEY = `shared/restaurants`;

export interface State {
  restaurants: Restaurant[];
}

export const initialState: State = {
  restaurants: []
};
