const jwt = require("jsonwebtoken");

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
userSchema.methods.generateJwt = function () {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET");

};
module.exports = mongoose.model('User', userSchema);
