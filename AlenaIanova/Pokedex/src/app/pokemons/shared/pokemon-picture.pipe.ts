import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pokemonPictureUrl'})
export class PokemonPicturePipe implements PipeTransform {
  transform(pokemonId: number | string): string {
    return `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemonId}.png`;
  }
}
