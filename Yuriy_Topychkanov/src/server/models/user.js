const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    capturedPokemons: [
        {
            id: { type: Number, unique: true },
            timestamp: Number
        }
    ],

});

module.exports = mongoose.model('User', userSchema);
