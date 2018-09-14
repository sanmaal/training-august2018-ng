const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	id: {
		type: Number,
		required: true,
	},
})

exports.Pokemon = mongoose.model('Pokemon', pokemonSchema);