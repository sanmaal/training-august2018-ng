const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  capturedPokemons: []
}, { toJSON: { virtuals: true } });

userSchema.virtual('capturedPokemons.pokemon', {
  ref: 'Pokemon',
  localField: 'capturedPokemons.id',
  foreignField: 'id'
});

module.exports = mongoose.model('User', userSchema);
