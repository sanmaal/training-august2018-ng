### pokedex backend server ###

My face is tired from dealing with backend

once inside root folder, run `npm install` to download all packages

run `node seed.js` to populate pokemons, then `npm start` to run server

( ͡° ͜◯ ͡°) ***contact me to get access to database*** ( ͡° ͜◯ ͡°)

if i'm busy at the moment, create those variables in your enviroment that match with your database url

user
password
host
port
name

or simply `port` and `name` in case of locally installed mongodb

or simply copypast your whole url in the config/index.js ¯\_(ツ)_/¯

- - - - 

### api/endpoints ###

#### pokemons ####

`api/pokemons/all` - get all pokemons  

`api/pokemons/all/?page=number&amount=number` - get some of them  

`api/pokemons/all/:id` - get single pokemon  

`api/pokemons/all/catched` - get catched pokemons (requires auth)  

`api/pokemons/catched/?page=number&amount=number` - get some of them (requires auth)


#### auth ####

`api/auth/login` - to log in  

`api/auth/signup` - to sign up  






