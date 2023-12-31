const axios = require("axios");
const getPokemonsById = require("../controllers/getPokemonsById");

const getApiData = async (pokemons = []) => {
  try {
    const pokemonPromises = Array.from({ length: 200 }, (_, i) =>
      getPokemonsById(i + 1, "api"));
    const resolvedPromises = await Promise.all(pokemonPromises);
    pokemons.push(...resolvedPromises);
    return pokemons;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = getApiData;
