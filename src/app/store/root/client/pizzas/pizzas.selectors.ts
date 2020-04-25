import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './pizzas.state';

export const getUserState = createFeatureSelector<State>('user');

