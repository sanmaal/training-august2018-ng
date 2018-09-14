'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto');
const mainBD = require('./config/bdconfig').mainBD;
const User = require('./models/User');
const Pokemon = require('./models/Pokemon');

mongoose.connect(mainBD, { useNewUrlParser: true })
  .then(() => console.log('connection success'))
  .catch(err => console.log(err)); 

//User Api

exports.createUser = (userData) => {
  const user = {
    username: userData.username,
    email: userData.email,
    password: hash (userData.password),
  }
  return new User(user).save();
}

function hash (text) {
  return crypto.createHash('sha1').update(text).digest('base64');
}

exports.getUser = (id) => {
  return User.findOne(id);
}

exports.checkUser = (userData) => {
  return User
        .findOne({email: userData.email})
        .then ((user) => {
          if ( user.password == hash(userData.password) ) {
            console.log('User password is OK');
            return Promise.resolve(user);
          } else {
            return Promise.reject('Error, wrong password');
          }
        })
}

//Pokemon API

exports.getAllPokemons =  () => {
  return Pokemon
        .find();
}

exports.getPokemons =  (perPage, page) => {
  return Pokemon
        .find()
        .skip((perPage * page) - perPage)
        .limit(perPage);
}

exports.searchByNamePokemon = (userData) => {
  return Pokemon
        .find({name: userData.name});   
}

exports.showPokemon = (id) => {
  return Pokemon
        .find({id: id});
}

exports.catchPokemon = (userId, pokemonId) => {
  return User
        .findByIdAndUpdate(userId, {
            $addToSet: { caughtPokemonsList: pokemonId }
          })
}

exports.getCatchedPokemons = (userId, perPage, page) => {
  return User.findById(userId)
        .then((result) => {
          const catchedPokemons = result.catchList;
          return catchedPokemons;
        })
        .then((result) => {
          return Pokemon
              .find({id: {$in : result}})
              .skip((perPage * page) - perPage)
              .limit(perPage);
        })
}
