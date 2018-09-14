const Pokemon = require('../models/pokemon');
const User = require('../models/user');

module.exports.getPokemonsByPage = function (page) {
    return Pokemon
        .find()
        .skip(10 * (page - 1))
        .limit(10)
        .then(
            pokemons => Promise.resolve(pokemons),
            err => Promise.reject(err)
        );
};

module.exports.findPokemonById = function (id) {
    return Pokemon
        .findById(id)
        .then(
            pokemon => Promise.resolve(pokemon),
            err => Promise.reject(err)
        );
};

module.exports.getPokemonsCatchedByUser = function (user, startFrom) {
  return User
    .findOne({ email: user.email })
        .then(
            ({ capturedPokemons }) => Promise.resolve(capturedPokemons.slice(startFrom, startFrom + 10)),
            (err) => Promise.reject(err)
        );
};

module.exports.addPokemonToUser = function (user, id, timestamp) {
  return User
    .updateOne(
        { $and: [ { email: user.email }, { 'capturedPokemons.id': { $ne: id } } ] },
      { $push: { capturedPokemons: { id: id, timestamp: timestamp } } })
        .then(
            (res) => res.n ? Promise.resolve('pokemon catched') : Promise.reject('can not catch pokemon twice'),
            err => Promise.reject(err)
        );
};

module.exports.removePokemonFromUser = function (user, id) {
  return User
    .updateOne(
        { email: user.email },
        { $pull: { 'capturedPokemons': { id: id } } })
        .then(
          ({ nModified }) => nModified > 0 ? Promise.resolve('pokemon released') : Promise.reject('there is no pokemon with such id in user collection'),
            err => Promise.reject(err)
        );
};
