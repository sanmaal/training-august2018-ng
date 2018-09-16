const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  capturedPokemons: [
    {
      id: { type: Number, ref: 'Pokemon', localField: 'id', foreignField: 'pokemonId' },
      timestamp: Number
    }
  ],

});

module.exports = mongoose.model('User', userSchema);
