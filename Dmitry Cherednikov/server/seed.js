const mongoose = require('mongoose');
const { uri } = require('./config');

const { Pokemon } = require('./models/Pokemon.js');
const { pokemons } = require('./pokemons.json');

const seed = () => {
	mongoose.connect(uri, { useNewUrlParser: true })
		.then(() => Pokemon.deleteMany({}))
		.then(() => Pokemon.insertMany(pokemons.sort((a, b) => a.id - b.id)))
		.then(() => mongoose.disconnect())
		.then(() => console.log('( ͡° ͜◯ ͡°)'))
		.catch((err) => {
				// handle errors
		})
}

seed();