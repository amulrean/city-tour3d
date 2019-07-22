import { Action } from '@ngrx/store';
import { TileSet, IMoveEndPayload, ICameraState, ITourStop } from '../../models/map';

export enum MapActionTypes {
  SelectTileSet = '[Map] Select Tile Set',
  UnselectTile = '[Map] Unselect Tile Set',
  MoveEnd = '[Map] Move End',
  AddTourStop = '[Map] Add Tour Stop',
  RemoveTourStop = '[Map] Remove Tour Stop',
  ClearTourStops = '[Map] Clear Tour Stops',
  SetMoveToTourStop = '[Map] Set Move To Tour Stop',
  ClearMoveToTourStop = '[Map] Clear Move To Tour Stop'
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

export class RemoveTourStop implements Action {
  readonly type = MapActionTypes.RemoveTourStop;

  constructor(public payload: number) {}
}

export class ClearTourStops implements Action {
  readonly type = MapActionTypes.ClearTourStops;

  constructor() {}
}

export class SetMoveToTourStop implements Action {
  readonly type = MapActionTypes.SetMoveToTourStop;

  constructor(public payload: ITourStop) {}
}

export class ClearMoveToTourStop implements Action {
  readonly type = MapActionTypes.ClearMoveToTourStop;

  constructor() {}
}

export type MapActions =
  | SelectTileSet
  | UnselectTile
  | MoveEnd
  | AddTourStop
  | RemoveTourStop
  | ClearTourStops
  | SetMoveToTourStop
  | ClearMoveToTourStop;
