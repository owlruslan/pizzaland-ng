import {createAction, props} from '@ngrx/store';
import {Pizza} from "../../models";
import {FEATURE_KEY} from './cart.state';

export const add = createAction(`${FEATURE_KEY}/add`, props<{ pizza: Pizza }>());
