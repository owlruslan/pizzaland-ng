import {createFeatureSelector} from "@ngrx/store";
import {FEATURE_KEY, State} from "./restaurants.state";

export const getState = createFeatureSelector<State>(FEATURE_KEY);
