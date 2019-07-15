import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TileSet } from '../../models/map';
import { MapState, getSelectedTileSet, getTitleSets } from '../../state/reducers/map';
import { SelectTileSet, UnselectTile } from '../../state/actions/map';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  tileSets$: Observable<TileSet[]>;
  selectedTileSet$: Observable<TileSet>;
  selectedTileSetName: string;
  subscriptions: Subscription[] = [];

  constructor(private store: Store<MapState>) {
    this.tileSets$ = store.pipe(select(getTitleSets));
    this.selectedTileSet$ = store.pipe(select(getSelectedTileSet));
  }

  ngOnInit() {
    this.subscriptions.push(
      this.selectedTileSet$.subscribe(selectedTileSet => {
        if (selectedTileSet) {
          this.selectedTileSetName = selectedTileSet.name;
        } else {
          this.selectedTileSetName = undefined;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }

  selectTileSet(selected: TileSet) {
    this.store.dispatch(new SelectTileSet(selected));
  }

  reset() {
    this.store.dispatch(new UnselectTile());
  }
}
