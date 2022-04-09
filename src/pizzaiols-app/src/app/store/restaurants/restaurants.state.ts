import {Restaurant} from '../../models/restaurants/restaurant';

export const FEATURE_KEY = `restaurants`;

export interface State {
  restaurants: Restaurant[];
}

export const initialState: State = {
  restaurants: []
};
