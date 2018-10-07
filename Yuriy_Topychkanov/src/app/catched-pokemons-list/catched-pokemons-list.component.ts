import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../services/pokemons/pokemons.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-catched-pokemons-list',
  templateUrl: './catched-pokemons-list.component.html',
  styleUrls: [ './catched-pokemons-list.component.scss' ]
})
export class CatchedPokemonsListComponent implements OnInit {
  pokemons: any = [];
  pokemonsData: any = [];
  page: number = 1;
  needLoader: boolean = false;
  subscription: Subscription;

  constructor(private pokemonsService: PokemonsService) {
  }

  addPokemonsData() {
    this.subscription = this.pokemonsService.getCatchedPokemons()
      .subscribe((pokemonsData) => {
        this.pokemonsData = pokemonsData;
        this.addPokemonsOnPage();
      })
  }

  addPokemonsOnPage() {
    const startPosition = (this.page - 1) * 10;
    const endPosition = this.page * 10;
    const pokemons = this.pokemonsData.slice(startPosition, endPosition);
    this.needLoader = endPosition < this.pokemonsData.length;
    this.pokemons = this.pokemons.concat(pokemons);
  }

  ngOnInit() {
    this.addPokemonsData()
  }


  loadMore() {
    this.page += 1;
    this.addPokemonsOnPage()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
