import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TileSet } from '../../models/map';
import { MapState, getSelectedTileSet } from '../../state/reducers/map';
import { SelectTileSet, UnselectTile } from '../../state/actions/map';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedTileSet$: Observable<TileSet>;

  tileSets = [
    {
      name: 'Washington DC',
      url: 'https://s3.amazonaws.com/amulrean-vricon/usa/washington_dc/tileset.json'
    },
    {
      name: 'North Korea',
      url: 'https://s3.amazonaws.com/amulrean-vricon/north_korea/pyongyang/tileset.json'
    },
    {
      name: 'Brazil',
      url: 'https://s3.amazonaws.com/amulrean-vricon/brazil/rio_de_janeiro/tileset.json'
    }
  ];

  constructor(private store: Store<MapState>) {
    this.selectedTileSet$ = store.pipe(select(getSelectedTileSet));
  }

  ngOnInit() {}

  selectTileSet(selected: TileSet) {
    this.store.dispatch(new SelectTileSet(selected));
  }

  reset() {
    this.store.dispatch(new UnselectTile());
  }
}
