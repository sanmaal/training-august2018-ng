const pokemonsList = require('../../db.json');
const mongoose = require('mongoose');
const Pokemon = require('../models/pokemon.js');

mongoose.connect('mongodb://localhost/homeworkDB', { useNewUrlParser: true })
    .then(
        () =>
            Pokemon.insertMany(pokemonsList.pokemons)
                .then(
                    () => mongoose.disconnect(console.log('pokemons inserted')),
                    err => mongoose.disconnect(console.log(err.message))
                )
    )
    .catch(err => console.log(err.message));
