const pokemonApi = require('../dbApi/pokemonApi');

module.exports.getPokemons = function (req, res) {
    const { page } = req.query;
    pokemonApi.getPokemonsByPage(page)
        .then(
            pokemons => res.send(pokemons)
        )
        .catch(
            err => console.log(err)
        );
};

module.exports.getPokemon = function (req, res) {
    const { id } = req.params;
    pokemonApi.findPokemonById(id)
        .then(
            pokemon => res.send(pokemon)
        )
        .catch(
            err => console.log(err)
        );
};

module.exports.showCatchedPokemons = function (req, res) {
    const { page } = req.body;
    const startPosition = 10 * (page - 1);
    const { user } = req;
    pokemonApi.getPokemonsCatchedByUser(user, startPosition)
        .then(
            pokemons => res.send(pokemons)
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

module.exports.mustAuthenticatedMw = function (req, res, next) {
    req.isAuthenticated() ? next() : res.redirect('/');
};
