const {pokeapi} = require('./pokemonsByApi');
const {dbPokemons} = require('./pokemonsByDb');

const allPokemons = async () => {
    try {
        const api = await pokeapi();
        const db = await dbPokemons();
        const allPokemons = api.concat(db);
        return allPokemons;
    } catch (error) {
        console.log({ error: error.message });
    }
}

module.exports = {allPokemons};