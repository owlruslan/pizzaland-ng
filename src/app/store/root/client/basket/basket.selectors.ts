import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './basket.state';

export const getUserState = createFeatureSelector<State>('user');

