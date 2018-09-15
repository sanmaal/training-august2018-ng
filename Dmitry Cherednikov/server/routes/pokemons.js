const express = require('express');
const { Pokemon } = require('../models/Pokemon');
const { User } = require('../models/user');
const auth = require('../middlewares/auth');
const checkAuth = require('../middlewares/checkAuth');
const router = express.Router();

router.get('/all', checkAuth, async (req, res) => { 
	const { page, amount } = req.query;	

	let user;
	if (req.user) {
		user = await User.findById(req.user._id, { password: 0 })
	}

	Pokemon.find()
		.skip(page * amount - amount)
		.limit(parseInt(amount))
		.then(pokemons => {
			//todo fix
			if (user) {
				return pokemons.map((pok) => {
					const catched = user.catched.find(p => pok.id === p.id);
					if (catched) {
						return { ...catched };
					}
					return {
						name: pok.name,
						id: pok.id,
						date: null,
					};
				})
			}
			return pokemons;
		 })
		.then(data => res.send(data))
		.catch(err => {
			// handle errors
			res.status(500).send('Something went wrong')
		})
});

router.get('/all/:id', checkAuth, (req, res) => { // todo
	Pokemon.findOne({ id: req.params.id})
		.then(async (pokemon) => {	
				if (!pokemon) return res.status(404).send(`Not found`)
				
				//todo fix
				let user;	
				let pok;
				if (req.user) user = await User.findById( req.user._id, { password: 0 })
				if (user) {
					pok = user.catched.find(p => +req.params.id === p.id);
				}
				if (pok) return pok;
				return pokemon
		})
		.then(data => res.send(data))
		.catch(err => {
			// handle errors
			res.status(500).send(`Something went wrong`)
		})
});

router.get('/catched', auth, (req, res) => {
	const { _id } = req.user;
	const { page, amount } = req.query;

	User.findById(_id, { password: 0 })
	.then(data => {
		if (page && amount) {
			return res.send(
				data.catched.slice(page * amount - amount, page * amount)
			)
		}
		return res.send(data.catched);
	})
	.catch(err => {
		// handle errors
		res.status(500).send('Something went wrong');
	})
});

// todo
router.put('/catched', auth, async (req, res) => {
	const { _id } = req.user;

	const pokemon = await Pokemon.findOne({ id: req.body.id });
	if (!pokemon) return res.status(400).send(`This pokemon doesn't exist`);

	const user = await User.findById( _id, { password:  0 });
	const check = user.catched.some(poke => req.body.id === poke.id);
	if (check) return res.status(400).send('You have already catched this pokemon');

	const date = new Date().toLocaleString();
	const catchedPokemon = {
		name: pokemon.name,
		id: pokemon.id,
		date,
	}

	User.findByIdAndUpdate(_id,  { $push: { catched: catchedPokemon }})
		.then(() => res.send(JSON.stringify(date)))
		.catch(err => {
			// handle errors
			res.status(500).send('Something went wrong');
		})
})

module.exports = router;