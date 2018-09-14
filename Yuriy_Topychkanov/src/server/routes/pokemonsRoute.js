const pokemonActions = require("../utils/pokemonActions");
const userActions = require("../utils/userActions");
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
module.exports = function (app) {
  app.all('/catch-pokemon', auth, userActions.readUserProfile);
  app.all('/catched-pokemons', auth, userActions.readUserProfile);
  app.all('/pokemon/:id', auth, userActions.readUserProfile);
  app.all('/release-pokemon', auth, userActions.readUserProfile);
  app.get('/', function (req, res) {
    pokemonActions.getPokemons(req, res)
  });
  app.get('/pokemon/:id', auth, function (req, res) {
    pokemonActions.getPokemon(req, res);
  });
  app.get('/catched-pokemons', function (req, res) {
    console.log(req);
    pokemonActions.showCatchedPokemons(req, res);
  });
  app.post('/catch-pokemon', auth, function (req, res) {
    pokemonActions.catchPokemon(req, res);
  });
  app.post('/release-pokemon', auth, function (req, res) {
    pokemonActions.releasePokemon(req, res)
  })
};
