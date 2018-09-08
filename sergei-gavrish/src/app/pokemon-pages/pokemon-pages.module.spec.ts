import { PokemonPagesModule } from './pokemon-pages.module';

describe('PokemonPagesModule', () => {
  let pokemonPagesModule: PokemonPagesModule;

  beforeEach(() => {
    pokemonPagesModule = new PokemonPagesModule();
  });

  it('should create an instance', () => {
    expect(pokemonPagesModule).toBeTruthy();
  });
});
