import { ActionReducerMap } from '@ngrx/store';
import { mapReducer, MapState } from './map';

export interface AppState {
  map: MapState;
}

export const reducers: ActionReducerMap<AppState> = {
  map: mapReducer
};
