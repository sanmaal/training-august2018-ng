const pokemonActions = require("../utils/pokemonActions");

module.exports = function (app) {
    app.all('/catch-pokemon', pokemonActions.mustAuthenticatedMw);
    app.all('/catched-pokemons', pokemonActions.mustAuthenticatedMw);
    app.all('/pokemon/:id', pokemonActions.mustAuthenticatedMw);
    app.all('/release-pokemon', pokemonActions.mustAuthenticatedMw);
    app.get('/', function (req, res) {
        pokemonActions.getPokemons(req, res)
    });
    app.get('/pokemon/:id', function (req, res) {
        pokemonActions.getPokemon(req, res);
    });
    app.post('/catch-pokemon', function (req, res) {
        pokemonActions.catchPokemon(req, res);
    });

    app.post('/catched-pokemons', function (req, res) {
        pokemonActions.showCatchedPokemons(req, res);
    });

    app.post('/release-pokemon', function (req, res) {
        pokemonActions.releasePokemon(req, res)
    })
};
