const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  pokemonId: { type: Number, unique: true },
    name: String
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
