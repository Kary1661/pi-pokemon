const {Router} = require('express');
const pokemonHandel = require('../handels/pokemonHandel');
const pokemonHandelById = require('../handels/pokemonHandelById');
const postPokemonHandel = require('../handels/postPokemonHandel');
const {validate} = require('../middlewares');



const pokemonsRouter = Router();

pokemonsRouter.get('/', pokemonHandel);
pokemonsRouter.get('/:id', pokemonHandelById);
pokemonsRouter.post('/', validate, postPokemonHandel);


module.exports = pokemonsRouter;