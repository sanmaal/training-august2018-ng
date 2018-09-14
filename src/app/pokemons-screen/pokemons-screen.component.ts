import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonsrestService } from '../pokemonsrest.service';


@Component({
  selector: 'app-pokemons-screen',
  templateUrl: './pokemons-screen.component.html',
  styleUrls: ['./pokemons-screen.component.scss']
})
export class PokemonsScreenComponent implements OnInit {

  constructor(private pokemonsrestService: PokemonsrestService){}
  
  pokemons: Pokemon[] = [];
  caughtPokemons: Pokemon[] = [];

  wasClicked = false;

  onClick() {
        this.wasClicked= !this.wasClicked;
  }

  onLoadMore(){
    this.getChunkPokemons(++this.page,this.limit);
  }

  page = 1;
  limit = 20;

  getAllPokemons(): void {
    this.pokemonsrestService.getPokemons()
    .subscribe(pokemons => {this.pokemons = pokemons;
        //console.log(this.pokemons);
    }
    );
  }

  getChunkPokemons(page, limit):void {
    this.pokemonsrestService.getChunkPokemons(page, limit)
    .subscribe(pokemons => {this.pokemons = this.pokemons.concat(pokemons);
        console.log(pokemons);
    }
    );
  }

  catchPokemon(pokemon: Pokemon): void{
      this.caughtPokemons.push(pokemon);
      console.log(this.caughtPokemons);
      this.onClick();
  }

  
  ngOnInit() {
    //this.getAllPokemons();
    this.getChunkPokemons(this.page,this.limit);
    //console.log(this.pokemons);
  }

  ngDoCheck(){
    //console.log(this.pokemons);
  }

}


