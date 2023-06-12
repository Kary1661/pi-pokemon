const express = require('express');
const {allPokemons} = require('../controllers/allPokemons');
const {getPokemonsById} = require('../controllers/getPokemonsById');
const {createPokemon} = require('../controllers/createPokemon');
const {getPokemonsByName} = require('../controllers/getPokemonsByName');

const pokemonsRouter = express.Router();

pokemonsRouter.get('/pokemons', allPokemons);
pokemonsRouter.get('/pokemons/:idPokemon', getPokemonsById);
pokemonsRouter.post('/', createPokemon);
pokemonsRouter.get('/pokemons/name?="..."', getPokemonsByName);


module.exports = pokemonsRouter;