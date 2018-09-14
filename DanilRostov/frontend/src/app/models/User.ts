import { Pokemon } from './Pokemon';

export interface User {
  name: string,
  email: string,
  id: string,
  pokemons: Array<Pokemon>
};