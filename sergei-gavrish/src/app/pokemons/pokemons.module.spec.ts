import { PokemonsModule } from './pokemons.module';

describe('PokemonPagesModule', () => {
  let pokemonsModule: PokemonsModule;

  beforeEach(() => {
    pokemonsModule = new PokemonsModule();
  });

  it('should create an instance', () => {
    expect(pokemonsModule).toBeTruthy();
  });
});
