const ROUTES = {
    AUTHORIZATION:  '/authorization',
    SHOW_ALL_USERS: '/users',
    REGISTRATION:   '/registration*',
    SHOW_ALL_POKEMONS: '/pokemons',
    SHOW_CHUNK_POKEMONS: '/pokemons/:page/:limit',
    SHOW_POKEMON_BY_ID: '/pokemon/:id',
    LOGIN: '/login',
    LOGOUT: '/logout'
}

module.exports = ROUTES;
    