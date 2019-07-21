import { MapState } from './map';
import { TileSet, ICameraState, IRectangle, ITourStop } from '../../models/map';
import { MapActions, MapActionTypes } from '../actions/map';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface MapState {
  tileSets: TileSet[];
  selectedTileSet: TileSet;
  camera: ICameraState;
  viewRectangle: IRectangle;
  tourStops: ITourStop[];
}

const initialState: MapState = {
  tileSets: environment.tileSets,
  selectedTileSet: undefined,
  camera: undefined,
  viewRectangle: undefined,
  tourStops: []
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

    case MapActionTypes.AddTourStop:
      state.tourStops.push({
        cameraState: Object.assign({}, state.camera),
        name: ''
      });
      return {
        ...state,
        tourStops: state.tourStops.slice()
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

export const getTourStops = createSelector(
  getMapState,
  state => state.tourStops
);
