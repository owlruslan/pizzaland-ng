import { Restaurant } from '../../../../models/restaurants/restaurant';

export interface State {
  restaurants: Restaurant[];
}

export const initialState: State = {
  restaurants: []
};
