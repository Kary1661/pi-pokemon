const express = require('express');
const {allPokeType} = require('../controllers/pokemonType')
const typesRouter = express.Router();

typesRouter.get('/types', allPokeType)

module.exports = typesRouter;