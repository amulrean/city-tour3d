import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TileSet, IMoveEndPayload, IRectangle, ICameraState } from '../../models/map';
import { MapState, getSelectedTileSet } from '../../state/reducers/map';
import { MoveEnd } from '../../state/actions/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  viewer;
  selectedTileSet$: Observable<TileSet>;
  currentTileSet: TileSet;
  subscriptions: Subscription[] = [];

  constructor(private store: Store<MapState>) {
    this.selectedTileSet$ = store.pipe(select(getSelectedTileSet));
  }

  ngOnInit() {
    this.viewer = new Cesium.Viewer('cesiumContainer', {
      sceneMode: Cesium.SceneMode.SCENE3D,
      geocoder: false
    });

    this.viewer.camera.moveEnd.addEventListener(() => {
      this.store.dispatch(new MoveEnd(this.getMoveEndPayload()));
    });

    this.subscriptions.push(
      this.selectedTileSet$.subscribe(selectedTileSet => {
        if (this.currentTileSet) {
          this.viewer.scene.primitives.remove(this.currentTileSet);
          this.currentTileSet = undefined;
        }
        if (selectedTileSet) {
          this.currentTileSet = this.viewer.scene.primitives.add(
            new Cesium.Cesium3DTileset({
              url: selectedTileSet.url
            })
          );
          this.viewer.flyTo(this.currentTileSet);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }

  private getMoveEndPayload(): IMoveEndPayload {
    return {
      camera: this.getCurrentCameraState(),
      viewRectangle: this.getCurrentViewRectangle()
    };
  }

  private getCurrentViewRectangle(): IRectangle {
    return this.viewer.camera.computeViewRectangle();
  }

  private getCurrentCameraState(): ICameraState {
    return {
      position: this.viewer.camera.position,
      heading: this.viewer.camera.heading,
      pitch: this.viewer.camera.pitch,
      roll: this.viewer.camera.roll
    };
  }
}
