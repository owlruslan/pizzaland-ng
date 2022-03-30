import { RootStoreState } from '../../index';

export const getRestaurantsState = (state: RootStoreState.State) => state.client.restaurants;
