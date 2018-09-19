const pokemonActions = require("../utils/pokemonActions");
const userActions = require("../utils/userActions");
const { verifyJWT_MW } = require("../utils/middleware");


module.exports = function (app) {
  app.all('/catch-pokemon', verifyJWT_MW);
  app.all('/catched-pokemons', verifyJWT_MW);
  app.all('/pokemon/:id', verifyJWT_MW);
  app.all('/release-pokemon', verifyJWT_MW);
  app.get('/', function (req, res) {
    pokemonActions.getPokemons(req, res);
  });
  app.get('/pokemon/:id', function (req, res) {
    pokemonActions.getPokemon(req, res);
  });
  app.get('/catched-pokemons', function (req, res) {
    pokemonActions.showCatchedPokemons(req, res);
  });
  app.post('/catch-pokemon', function (req, res) {
    pokemonActions.catchPokemon(req, res);
  });
  app.post('/release-pokemon', function (req, res) {
    pokemonActions.releasePokemon(req, res)
  })
};
