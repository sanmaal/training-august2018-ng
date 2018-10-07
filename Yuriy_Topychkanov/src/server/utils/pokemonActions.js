const pokemonApi = require('../dbApi/pokemonApi');
const { verifyJWTToken } = require('../libs/auth');


module.exports.getPokemons = function (req, res) {
  const { page, token } = req.query;
  if (token) {
    getPokemonsForAuthorizedUser(token, page, res)
  } else {
    getPokemonsForAnonymousUser(page, res)
  }
};

module.exports.getPokemon = function (req, res) {
  const { id } = req.params;
  const { token } = req.query;
  getPokemonData(token, id, res);
};


module.exports.showCatchedPokemons = function (req, res) {
  const { user } = req;
  pokemonApi.getAllCatchedPokemons(user)
    .then(
      pokemons => {
        const pokemonsArray = pokemons.map((pokemon) => {
          return { id: pokemon.id, name: pokemon.pokemon.name, timestamp: pokemon.timestamp }
        });
        res.send(pokemonsArray)
      }
    )
    .catch(
      err => console.log(err)
    )
};

module.exports.catchPokemon = function (req, res) {
  const { id } = req.body;
  const { user } = req;
  const timestamp = Date.now();
  pokemonApi.addPokemonToUser(user, id, timestamp)
    .then(
      message => res.send(message)
    )
    .catch(
      err => console.log(err)
    )
};

module.exports.releasePokemon = function (req, res) {
  const { id } = req.body;
  const { user } = req;
  pokemonApi.removePokemonFromUser(user, id)
    .then(
      message => res.send(message)
    )
    .catch(
      err => console.log(err)
    );
};


function getPokemonsForAuthorizedUser(token, page, res) {
  verifyJWTToken(token).then((decodedToken) => {
    const user = decodedToken.data;
    Promise.all(
      [
        pokemonApi.getPokemonsByPage(page),
        pokemonApi.getAllCatchedPokemons(user)
      ]
    )
      .then(
        pokemonsArrays => {
          const pokemonsList = pokemonsArrays[ 0 ].map(
            (pokemon) => {
              let newPokemon = pokemon;
              const pokeId = pokemon.id;
              pokemonsArrays[ 1 ].forEach(({ id, timestamp }) => {
                if (id === pokeId) {
                  newPokemon = {
                    id,
                    name: pokemon.name,
                    timestamp
                  }
                }
              });
              return newPokemon
            });

          res.send(pokemonsList);
        }
      )
      .catch(
        err => console.log(err)
      )
  }).catch(() => {
    res.status(400)
      .json({ message: "Invalid auth token provided." })
  });
}

function getPokemonsForAnonymousUser(page, res) {
  pokemonApi.getPokemonsByPage(page)
    .then(
      pokemons => res.send(pokemons)
    )
    .catch(
      err => console.log(err)
    );
}

function getPokemonData(token, id, res) {
  verifyJWTToken(token).then((decodedToken) => {
    const user = decodedToken.data;
    Promise.all(
      [
        pokemonApi.findPokemonById(id),
        pokemonApi.getAllCatchedPokemons(user)
      ]
    )
      .then(
        pokemonsArray => {
          const pokemonData = { id: pokemonsArray[ 0 ].id, name: pokemonsArray[ 0 ].name };
          pokemonsArray[ 1 ].forEach(({ id, timestamp }) => {
            if (pokemonData.id === id) {
              pokemonData.timestamp = timestamp;
            }
          });
          res.send(pokemonData);
        }
      )
      .catch(
        err => console.log(err)
      )
  }).catch(() => {
    res.status(400)
      .json({ message: "Invalid auth token provided." })
  });
}
