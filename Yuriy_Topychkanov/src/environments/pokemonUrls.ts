export const pokemonsPerPage = (page, token = null) => {
  if (token) {
    return `http://localhost:3000/?page=${page}&token=${token}`
  }
  return `http://localhost:3000/?page=${page}`;
};

export const catchedPokemons = (token) => `http://localhost:3000/catched-pokemons/?token=${token}`;

export const pokemonsDetail = (id, token = null) => {
  if (token) {
    return `http://localhost:3000/pokemon/${id}?token=${token}`;
  }
  return `/pokemon/${id}`;
};

export const catchPokemon = 'http://localhost:3000/catch-pokemon/';

export const releasePokemon = 'http://localhost:3000/release-pokemon/';
