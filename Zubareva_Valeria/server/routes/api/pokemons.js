const express = require('express');
const router = express.Router();

const checkAuth = require('../../middlewares/auth/checkAuth');

const Pokemon = require('../../models/Pokemon');
const User = require('../../models/User');

router.get('/', (req, res) => {
    const { offset, limit } = req.query;
    Pokemon.find()
        .sort('id')
        .skip(parseInt(offset) * parseInt(limit))
        .limit(parseInt(limit))
        .then(pokemons =>  {
            if(req.userId) {
                pokemons = pokemons.map(pokemon => {
                    const caughtIndex = pokemon.users.map(user => user.id).indexOf(req.userId);
                    const time = caughtIndex >= 0 ? pokemon.users[caughtIndex].time : null;
                    return {
                        _id: pokemon._id,
                        id: pokemon.id,
                        name: pokemon.name,
                        caught: caughtIndex >= 0,
                        time: time
                    }
                });
                return res.status(200).json(pokemons)
            }
            res.status(200).json(pokemons.map(pokemon => {
                return {
                    _id: pokemon._id,
                    id: pokemon.id,
                    name: pokemon.name
                }}))
        })
        .catch(() => res.status(500).send({message: 'There was a problem finding pokemons.'}))
});

router.get('/caught-pokemons', checkAuth, (req, res) => {
    const {offset, limit} = req.query;
    User.findById(req.userId, {password: 0})
        .then(user => {
            if (!user) return res.status(404).send("No user found.");
            res.status(200).json(user.caughtPokemons.slice(offset * limit, offset * limit + limit));
        })
        .catch(() => res.status(500).send("There was a problem finding the user."));
});

router.put('/', checkAuth, (req, res) => {
    const { pokemon, time } = req.body;
    User.findByIdAndUpdate(req.userId, { $push: { caughtPokemons: { pokemon, time } } })
        .then(() => {
            return Pokemon.findByIdAndUpdate(pokemon._id, { $push: { users: {id: req.userId, time } } })
        })
        .then(() => res.status(200).send({"message": "Updated"}))
        .catch(() => res.status(500).send("There was a problem with updating"));
});

router.get('/:id', (req, res) => {
    Pokemon.findOne({id: req.params.id})
        .then(pokemon => {
            const caughtIndex = pokemon.users.map(user => user.id).indexOf(req.userId);
            const time = caughtIndex >= 0 ? pokemon.users[caughtIndex].time : null;
            res.json({
                id: pokemon.id,
                name: pokemon.name,
                caught: caughtIndex >= 0,
                time: time
            })
        })
        .catch(() => res.status(500).send("There was a problem finding the pokemon."))
});

module.exports = router;