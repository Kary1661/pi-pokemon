const express = require('express');
const typesHandel = require('../handels/typesHandel')

const typesRouter = express.Router();

typesRouter.get('/', typesHandel);

module.exports = typesRouter;