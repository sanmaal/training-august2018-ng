export class Pokemon {
  name: string;
  id: number;
  catchInfo: {
    isCaught: boolean,
    timestamp: string
  };

  constructor(pokemon: Pokemon) {
    this.name = pokemon.name;
    this.id = pokemon.id;
  }
}
