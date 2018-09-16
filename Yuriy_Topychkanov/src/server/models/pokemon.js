const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
    name: String
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
