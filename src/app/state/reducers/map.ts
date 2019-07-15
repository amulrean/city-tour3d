import { MapState } from './map';
import { TileSet, ICameraState, IRectangle } from '../../models/map';
import { MapActions, MapActionTypes } from '../actions/map';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface MapState {
  tileSets: TileSet[];
  selectedTileSet: TileSet;
  camera: ICameraState;
  viewRectangle: IRectangle;
}

const initialState: MapState = {
  tileSets: environment.tileSets,
  selectedTileSet: undefined,
  camera: undefined,
  viewRectangle: undefined
};

export function mapReducer(state = initialState, action: MapActions) {
  switch (action.type) {
    case MapActionTypes.SelectTileSet:
      return {
        ...state,
        selectedTileSet: action.payload
      };

    case MapActionTypes.UnselectTile:
      return {
        ...state,
        selectedTileSet: undefined
      };

    case MapActionTypes.MoveEnd:
      return {
        ...state,
        camera: action.payload.camera,
        viewRectangle: action.payload.viewRectangle
      };

    default:
      return state;
  }
}

export const getMapState = createFeatureSelector<MapState>('map');

export const getSelectedTileSet = createSelector(
  getMapState,
  state => state.selectedTileSet
);

export const getTitleSets = createSelector(
  getMapState,
  state => state.tileSets
);
