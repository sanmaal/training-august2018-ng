const express = require('express');
const api = require('../api.js');
const router = express.Router();
const checkAuth = require('../middlewares/auth/checkAuth');

router.get ('/', (req, res, next) => {  
  api.getAllPokemons ()
      .then ((result) => {
        res.json(result);
      })
});

router.get ('/:page', (req, res, next) => {
  const perPage = 12;
  let page = req.params.page || 1;
  api.getPokemons (perPage, page)
      .then ((result) => {
        res.json(result);
      })
});

router.get ('/pokemon/:id', (req, res, next) => {
  let id = req.params.id || 1;
  api.showPokemon (id)
      .then ((result) => {
        res.send(result);
      })
});

router.post ('/', (req, res, next) => {
  api.searchByNamePokemon (req.body)
      .then ((result) => {
        res.json(result);
      })
});

router.put ('/catch/:id', checkAuth, (req, res, next) => {
    const userId = req.userId;
    const pokemonId = req.params.id;      
    api.catchPokemon (userId, pokemonId)
        .then (() => {
          res.status(200).send(pokemonId);
        })
        .catch (error => {
          return next(error);
        });
});

router.get ('/caught/:page', checkAuth, (req, res, next) => {  
  const perPage = 10;
  let page = req.params.page || 1;

  api.getCatchedPokemons (req.userId, perPage, page)
      .then ((result) => {
        res.send(result);
      })
      .catch (error => {
        return next(error);
      });
});

module.exports = router;