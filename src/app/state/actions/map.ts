import { Action } from '@ngrx/store';
import { TileSet, IMoveEndPayload, ICameraState, ITourStop } from '../../models/map';

export enum MapActionTypes {
  SelectTileSet = '[Map] Select Tile Set',
  UnselectTile = '[Map] Unselect Tile Set',
  MoveEnd = '[Map] Move End',
  AddTourStop = '[Map] Add Tour Stop'
}

export class SelectTileSet implements Action {
  readonly type = MapActionTypes.SelectTileSet;

  constructor(public payload: TileSet) {}
}

export class UnselectTile implements Action {
  readonly type = MapActionTypes.UnselectTile;

  constructor() {}
}

export class MoveEnd implements Action {
  readonly type = MapActionTypes.MoveEnd;

  constructor(public payload: IMoveEndPayload) {}
}

export class AddTourStop implements Action {
  readonly type = MapActionTypes.AddTourStop;

  constructor() {}
}

export type MapActions = SelectTileSet | UnselectTile | MoveEnd | AddTourStop;
