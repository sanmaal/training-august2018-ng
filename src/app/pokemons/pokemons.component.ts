import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent {
  displayedColumns = ['id', 'name'];
  dataSource: MatTableDataSource<pokemons>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor() {
    const pokes: pokemons[] = [];

    fetch('http://localhost:3000/pokemons')
      .then(res => res.json())
      .then(res => res.forEach(item => pokes.push(item)))
      .then(() => (this.dataSource = new MatTableDataSource(pokes)))
      .then(() => (this.dataSource.paginator = this.paginator))
      .catch(err => console.log(err));
  }
}

export interface pokemons {
  id: string;
  name: string;
  progress: string;
  color: string;
}
